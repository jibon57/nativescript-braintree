import { Common } from './braintree.common';
import * as app from 'tns-core-modules/application';
declare var com, android, java, cn;

export class Braintree extends Common {

    public output = {
        'status': 'fail',
        'msg': 'unknown',
        'nonce': ''
    }

    public startPayment(token){

        console.log("Start payment");
        let t = this;
        let activity = app.android.foregroundActivity || app.android.startActivity;

        let dropInRequest =  new com.braintreepayments.api.dropin.DropInRequest();
        
        let clientTokenMethod = dropInRequest.getClass().getMethod("clientToken", [java.lang.String.class]); 
        let getIntentMethod = dropInRequest.getClass().getMethod("getIntent", [android.content.Context.class]);

        clientTokenMethod.invoke(dropInRequest, [token]);

        let dIRIntent = getIntentMethod.invoke(dropInRequest, [activity]);

        app.android.foregroundActivity.startActivityForResult(dIRIntent, 4949);
        
        return new Promise(function(resolve, reject){
            activity.onActivityResult = function(requestCode, resultCode, data){
                let androidAcivity = android.app.Activity;
                if (requestCode == 4949) {
                    if (resultCode == androidAcivity.RESULT_OK) {
                        let result = data.getParcelableExtra(com.braintreepayments.api.dropin.DropInResult.EXTRA_DROP_IN_RESULT);
                        let paymentMethodNonce = result.getPaymentMethodNonce().getNonce();
                        // send paymentMethodNonce to your server
                        t.output.status = 'success';
                        t.output.msg = 'Got Payment Nonce Value';
                        t.output.nonce = paymentMethodNonce;

                        setTimeout(function(){ 
                            resolve();
                        }, 500);
                       
                    } else if (resultCode == androidAcivity.RESULT_CANCELED) {
                        // canceled
                        t.output.status = 'canceled';
                        t.output.msg = 'User has canceled payment';
                        setTimeout(function(){ 
                            reject();
                        }, 500);
                    } else {
                        // an error occurred, checked the returned exception
                        let exception =  data.getSerializableExtra(com.braintreepayments.api.dropin.DropInActivity.EXTRA_ERROR);
                        t.output.msg = exception.getMessage();
                        setTimeout(function(){ 
                            reject();
                        }, 500);
                    }
                }
                
            }
        })
    }

    public greet(){
        return "Yes";
    }
}
