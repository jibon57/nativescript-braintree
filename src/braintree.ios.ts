import { Observable } from 'tns-core-modules/data/observable';
import * as utils from "tns-core-modules/utils/utils";

const appDelegate = require('./getappdelegate').getAppDelegate();
const enableMultipleOverridesFor = require('./getappdelegate').enableMultipleOverridesFor;

declare const BTAppSwitch, BTDropInRequest, BTDropInController, UIApplication, PPDataCollector;

export function setupBraintreeAppDeligate(urlScheme) {
    enableMultipleOverridesFor(appDelegate, 'applicationDidFinishLaunchingWithOptions', function (application, launchOptions) {
        try {
            BTAppSwitch.setReturnURLScheme(urlScheme);
            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    });

    enableMultipleOverridesFor(appDelegate, 'applicationOpenURLSourceApplicationAnnotation', function (application, url, sourceApplication, annotation) {
        try {
            if (url.scheme == urlScheme) {
                BTAppSwitch.handleOpenURLSourceApplication(url, sourceApplication);
                return true;
            }
        } catch (error) {
            console.log(error);
        }
        return false;
    })
}

export class Braintree extends Observable {

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

        let t = this;

        let request = BTDropInRequest.alloc().init();

        if (options.amount) {
            request.amount = options.amount;
        }
        if (options.collectDeviceData) {
            request.collectDeviceData = true;
        }
        if (options.requestThreeDSecureVerification) {
            request.threeDSecureVerification = true;
        }
        let dropIn = BTDropInController.alloc().initWithAuthorizationRequestHandler(token, request, function (controller, result, error) {
            if (error !== null) {

                setTimeout(function () {
                    t.notify({
                        eventName: 'error',
                        object: t
                    });
                });

            } else if (result.cancelled) {
                t.output.status = 'cancelled';
                t.output.msg = 'User has cancelled payment';

                setTimeout(function () {
                    t.notify({
                        eventName: 'cancel',
                        object: t
                    });
                });

            } else {

                if (typeof result.paymentMethod == null) {

                    t.output.status = 'error';
                    t.output.msg = 'Nonce Value empty';

                    setTimeout(function () {
                        t.notify({
                            eventName: 'error',
                            object: t
                        });
                    });
                    return;
                }

                t.output.status = 'success';
                t.output.msg = 'Got Payment Nonce Value';
                t.output.nonce = result.paymentMethod.nonce;
                t.output.paymentMethodType = result.paymentMethod.type;
                t.output.deviceInfo = PPDataCollector.collectPayPalDeviceData();

                setTimeout(function () {
                    t.notify({
                        eventName: 'success',
                        object: t
                    });
                });
            }
            controller.dismissViewControllerAnimatedCompletion(true, null);
        });

        let app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
        app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(dropIn, true, null);
    }
}

export interface BrainTreeOptions {
    amount: string;
    collectDeviceData?: boolean;
    requestThreeDSecureVerification?: boolean;
}
