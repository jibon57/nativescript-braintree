import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

declare const com;
const DropInRequest = com.braintreepayments.api.dropin.DropInRequest;

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
        let activity = app.android.foregroundActivity || app.android.startActivity;

        let dropInRequest = new DropInRequest();

        if (options.amount) {
            dropInRequest.amount(options.amount);
        }

        let getIntentMethod = dropInRequest.getClass().getMethod("getIntent", [android.content.Context.class]);

        let clientTokenMethod = dropInRequest.getClass().getMethod("clientToken", [java.lang.String.class]);

        let isAndroidPayEnabled = dropInRequest.getClass().getMethod("isAndroidPayEnabled", []);
        let booleanType = isAndroidPayEnabled.getReturnType();

        if (options.collectDeviceData) {
            let collectDeviceDataMethod = dropInRequest.getClass().getMethod("collectDeviceData", [booleanType]);
            collectDeviceDataMethod.invoke(dropInRequest, [true]);
        }

        if (options.requestThreeDSecureVerification) {
            let requestThreeDSecureVerificationMethod = dropInRequest.getClass().getMethod("requestThreeDSecureVerification", [booleanType]);
            requestThreeDSecureVerificationMethod.invoke(dropInRequest, [true]);
        }

        clientTokenMethod.invoke(dropInRequest, [token]);
        let dIRIntent = getIntentMethod.invoke(dropInRequest, [activity]);
        this.callIntent(dIRIntent);
    }

    private callIntent(intent) {
        let t = this;

        app.android.foregroundActivity.startActivityForResult(intent, 4949);
        app.android.on(app.AndroidApplication.activityResultEvent, onResult);

        function onResult(args) {
            app.android.off(app.AndroidApplication.activityResultEvent, onResult);
            t.handleResults(args.requestCode, args.resultCode, args.intent);
        }

    }

    private handleResults(requestCode, resultCode, data) {

        let t = this;
        let androidAcivity = android.app.Activity;

        if (requestCode == 4949) {

            if (resultCode == androidAcivity.RESULT_OK) {

                let result = data.getParcelableExtra(com.braintreepayments.api.dropin.DropInResult.EXTRA_DROP_IN_RESULT);
                let paymentMethodNonce = result.getPaymentMethodNonce().getNonce();

                if (typeof result.paymentMethod == null) {

                    t.output.status = 'error';
                    t.output.msg = 'Nonce Value empty';

                    setTimeout(function () {
                        t.notify({
                            eventName: 'error',
                            object: t
                        })
                    })
                    return;
                }

                // send paymentMethodNonce to your server
                t.output.status = 'success';
                t.output.msg = 'Got Payment Nonce Value';
                t.output.nonce = paymentMethodNonce;
                t.output.deviceInfo = result.getDeviceData();
                t.output.paymentMethodType = result.getPaymentMethodType().getCanonicalName();

                setTimeout(function () {
                    t.notify({
                        eventName: 'success',
                        object: t
                    })
                })


            } else if (resultCode == androidAcivity.RESULT_CANCELED) {
                // canceled
                t.output.status = 'cancelled';
                t.output.msg = 'User has cancelled payment';

                setTimeout(function () {
                    t.notify({
                        eventName: 'cancel',
                        object: t
                    })
                })

            } else {
                // an error occurred, checked the returned exception
                let exception = data.getSerializableExtra(com.braintreepayments.api.dropin.DropInActivity.EXTRA_ERROR);
                t.output.msg = exception.getMessage();

                setTimeout(function () {
                    t.notify({
                        eventName: 'error',
                        object: t
                    })
                })
            }
        }

    }
}

export interface BrainTreeOptions {
    amount: string;
    collectDeviceData?: boolean;
    requestThreeDSecureVerification?: boolean;
}

