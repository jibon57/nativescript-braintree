import {Observable} from "@nativescript/core";
import { BrainTreeOptions } from '.';

const setupAppDeligate = require('./getappdelegate').setupAppDeligate;
declare const BTDropInRequest, BTDropInController, BTThreeDSecureRequest, BTThreeDSecureVersion, UIApplication, PPDataCollector;

export function setupBraintreeAppDeligate(urlScheme) {
    setupAppDeligate(urlScheme);
}


export class Braintree extends Observable {
    dropInController;
    public output = {
        'status': 'fail',
        'msg': 'unknown',
        'nonce': '',
        'paymentMethodType': '',
        'deviceInfo': ''
    };

    constructor() {
        super();
    }

    public startPayment(token: any, options: BrainTreeOptions) {

        let request = BTDropInRequest.alloc().init();

        if (options.amount) {
            request.amount = options.amount;
        }
        if (options.collectDeviceData) {
            request.collectDeviceData = true;
        }
        if (options.requestThreeDSecureVerification && options.amount) {
            let threeDSecureRequest = BTThreeDSecureRequest.alloc().init();
            threeDSecureRequest.amount = NSDecimalNumber.decimalNumberWithString(options.amount);
            threeDSecureRequest.versionRequested = BTThreeDSecureVersion.Version2;
            request.threeDSecureVerification = true;
            request.threeDSecureRequest = threeDSecureRequest;
        }
        let dropIn = BTDropInController.alloc().initWithAuthorizationRequestHandler(token, request, (controller, result, error) => {
            if (error !== null) {

                setTimeout(() => {
                    this.notify({
                        eventName: 'error',
                        object: this
                    });
                });

            } else if (result.cancelled) {
                this.output.status = 'cancelled';
                this.output.msg = 'User has cancelled payment';

                setTimeout(() => {
                    this.notify({
                        eventName: 'cancel',
                        object: this
                    });
                });

            } else {

                if (typeof result.paymentMethod == null) {

                    this.output.status = 'error';
                    this.output.msg = 'Nonce Value empty';

                    setTimeout(() => {
                        this.notify({
                            eventName: 'error',
                            object: this
                        });
                    });
                    return;
                }


                // Apple Pay implementation
                if (result.paymentDescription === "Apple Pay") {

                    let request = PKPaymentRequest.alloc().init();

                    request.paymentSummaryItems = options.applePayPaymentRequest.paymentSummaryItems;
                    request.countryCode = options.applePayPaymentRequest.countryCode;
                    request.currencyCode = options.applePayPaymentRequest.currencyCode;
                    request.merchantIdentifier = options.applePayPaymentRequest.merchantIdentifier;
                    request.merchantCapabilities = options.applePayPaymentRequest.merchantCapabilities;
                    request.supportedNetworks = options.applePayPaymentRequest.supportedNetworks as NSArray<string>;


                    console.log(`canMakePayments(): ${PKPaymentAuthorizationViewController.canMakePayments()}`);
                    console.log(`canMakePaymentsUsingNetworks(): ${PKPaymentAuthorizationViewController.canMakePaymentsUsingNetworks(request.supportedNetworks)}`);
                    console.log(`canMakePaymentsUsingNetworksCapabilities(): ${PKPaymentAuthorizationViewController.canMakePaymentsUsingNetworksCapabilities(request.supportedNetworks, request.merchantCapabilities)}`);

                    let applePayController = PKPaymentAuthorizationViewController.alloc().initWithPaymentRequest(request);

                    let pkPaymentDelegateImpl: PKPaymentAuthorizationViewControllerDelegateImpl = new PKPaymentAuthorizationViewControllerDelegateImpl();

                    let applePayClient = new BTApplePayClient(dropIn.apiClient);

                    pkPaymentDelegateImpl.applePayClient = applePayClient;
                    pkPaymentDelegateImpl.braintree = this;

                    try {
                        applePayController.delegate = pkPaymentDelegateImpl;
                    } catch (error) {
                        console.log(`Initialization of PKPaymentAuthorizationViewController failed`);
                        let alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle("Error", "An error has occurred, please try again or use a different payment method.", UIAlertControllerStyle.Alert);
                        alertController.addAction(UIAlertAction.actionWithTitleStyleHandler("Ok", UIAlertActionStyle.Default, null));
                        controller.presentViewControllerAnimatedCompletion(alertController, true, null);
                        return;
                    }


                    console.log(`applePayController: ${applePayController}`);
                    console.log(`delegateImpl: ${pkPaymentDelegateImpl}`);

                    this.dropInController = controller;
                    controller.presentViewControllerAnimatedCompletion(applePayController, true, (): void => {
                    });

                    return;

                } else {
                    this.output.nonce = result.paymentMethod.nonce;
                    this.output.paymentMethodType = result.paymentMethod.type;
                    this.output.status = 'success';
                    this.output.msg = 'Got Payment Nonce Value';
                    this.output.deviceInfo = PPDataCollector.collectPayPalDeviceData();
                    setTimeout(() => {
                        this.notify({
                            eventName: 'success',
                            object: this
                        });
                    });
                }
            }
            controller.dismissViewControllerAnimatedCompletion(true, null);
        });

        let app = UIApplication.sharedApplication;
        app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(dropIn, true, null);
    }

    submitApplePayment(applePayNonce: string): void {
        this.output.nonce = applePayNonce;
        this.output.paymentMethodType = "18";
        this.output.status = 'success';
        this.output.msg = 'Got Payment Nonce Value';
        this.output.deviceInfo = PPDataCollector.collectPayPalDeviceData();

        this.dropInController.dismissViewControllerAnimatedCompletion(true, null);

        setTimeout(() => {
            this.notify({
                eventName: 'success',
                object: this
            });
        });
    }
}

@NativeClass
export class PKPaymentAuthorizationViewControllerDelegateImpl extends NSObject implements PKPaymentAuthorizationViewControllerDelegate {
    public static ObjCProtocols = [PKPaymentAuthorizationViewControllerDelegate];
    applePayClient: BTApplePayClient;
    nonce: BTApplePayCardNonce;
    braintree: Braintree;

    paymentAuthorizationViewControllerDidAuthorizePaymentCompletion?(controller: PKPaymentAuthorizationViewController, payment: PKPayment, completion: (p1: PKPaymentAuthorizationStatus) => void): void {
        console.log(`PaymentAuthorizationViewController Did Authorize Payment Completion executing`);

        this.applePayClient.tokenizeApplePayPaymentCompletion(payment, (nonce: BTApplePayCardNonce, error: NSError): void => {
            if (nonce) {
                this.nonce = nonce;
                completion(PKPaymentAuthorizationStatus.Success);
            } else {
                completion(PKPaymentAuthorizationStatus.Failure);
                console.dir("#####################");
                console.log(`error: ${error}`);
                console.dir("#####################");
            }
        });
    }

    paymentAuthorizationViewControllerDidAuthorizePaymentHandler?(controller: PKPaymentAuthorizationViewController, payment: PKPayment, completion: (p1: PKPaymentAuthorizationResult) => void): void {
        console.log(`PaymentAuthorizationViewController Did Authorize Payment Handler executing`);
        let result = PKPaymentAuthorizationResult.alloc().init();

        this.applePayClient.tokenizeApplePayPaymentCompletion(payment, (nonce: BTApplePayCardNonce, error: NSError): void => {
            if (nonce) {
                this.nonce = nonce;
                result.status = PKPaymentAuthorizationStatus.Success;
                completion(result);
            } else {
                result.status = PKPaymentAuthorizationStatus.Failure;
                completion(result);
                console.dir("#####################");
                console.log(`error: ${error}`);
                console.dir("#####################");
            }
        });

    }

    paymentAuthorizationViewControllerDidFinish(controller: PKPaymentAuthorizationViewController): void {
        console.log(`paymentAuthorizationViewControllerDidFinish(${controller})`);
        if (!this.nonce) {
            controller.dismissViewControllerAnimatedCompletion(true, null);
        } else {
            this.braintree.submitApplePayment(this.nonce.nonce);
            this.braintree.dropInController.dismissViewControllerAnimatedCompletion(true, null);
        }
    }
    paymentAuthorizationViewControllerDidSelectPaymentMethodCompletion?(controller: PKPaymentAuthorizationViewController, paymentMethod: PKPaymentMethod, completion: (p1: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectPaymentMethodCompletion Method not implemented 4.");
    }
    paymentAuthorizationViewControllerDidSelectPaymentMethodHandler?(controller: PKPaymentAuthorizationViewController, paymentMethod: PKPaymentMethod, completion: (p1: PKPaymentRequestPaymentMethodUpdate) => void): void {
        let paymentMethodUpdate = PKPaymentRequestPaymentMethodUpdate.alloc().init();
        completion(paymentMethodUpdate);
    }
    paymentAuthorizationViewControllerDidSelectShippingAddressCompletion?(controller: PKPaymentAuthorizationViewController, address: any, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKShippingMethod>, p3: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingAddressCompletion Method not implemented 6.");
    }
    paymentAuthorizationViewControllerDidSelectShippingContactCompletion?(controller: PKPaymentAuthorizationViewController, contact: PKContact, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKShippingMethod>, p3: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingAddressCompletion Method not implemented 7.");
    }
    paymentAuthorizationViewControllerDidSelectShippingContactHandler?(controller: PKPaymentAuthorizationViewController, contact: PKContact, completion: (p1: PKPaymentRequestShippingContactUpdate) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingContactHandler Method not implemented 8.");
    }
    paymentAuthorizationViewControllerDidSelectShippingMethodCompletion?(controller: PKPaymentAuthorizationViewController, shippingMethod: PKShippingMethod, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingMethodCompletion Method not implemented 9.");
    }
    paymentAuthorizationViewControllerDidSelectShippingMethodHandler?(controller: PKPaymentAuthorizationViewController, shippingMethod: PKShippingMethod, completion: (p1: PKPaymentRequestShippingMethodUpdate) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingMethodHandler Method not implemented 10.");
    }
    paymentAuthorizationViewControllerWillAuthorizePayment?(controller: PKPaymentAuthorizationViewController): void {
        console.log("paymentAuthorizationViewControllerWillAuthorizePayment Method not implemented 11.");
    }
}
