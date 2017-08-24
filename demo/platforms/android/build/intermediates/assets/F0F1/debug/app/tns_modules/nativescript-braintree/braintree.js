"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var braintree_common_1 = require("./braintree.common");
var app = require("tns-core-modules/application");
var Braintree = (function (_super) {
    __extends(Braintree, _super);
    function Braintree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.output = {
            'status': 'fail',
            'msg': 'unknown',
            'nonce': ''
        };
        return _this;
    }
    Braintree.prototype.startPayment = function (token) {
        console.log("Start payment");
        var t = this;
        var activity = app.android.foregroundActivity || app.android.startActivity;
        var dropInRequest = new com.braintreepayments.api.dropin.DropInRequest();
        var clientTokenMethod = dropInRequest.getClass().getMethod("clientToken", [java.lang.String.class]);
        var getIntentMethod = dropInRequest.getClass().getMethod("getIntent", [android.content.Context.class]);
        clientTokenMethod.invoke(dropInRequest, [token]);
        var dIRIntent = getIntentMethod.invoke(dropInRequest, [activity]);
        app.android.foregroundActivity.startActivityForResult(dIRIntent, 4949);
        return new Promise(function (resolve, reject) {
            activity.onActivityResult = function (requestCode, resultCode, data) {
                var androidAcivity = android.app.Activity;
                if (requestCode == 4949) {
                    if (resultCode == androidAcivity.RESULT_OK) {
                        var result = data.getParcelableExtra(com.braintreepayments.api.dropin.DropInResult.EXTRA_DROP_IN_RESULT);
                        var paymentMethodNonce = result.getPaymentMethodNonce().getNonce();
                        t.output.status = 'success';
                        t.output.msg = 'Got Payment Nonce Value';
                        t.output.nonce = paymentMethodNonce;
                        setTimeout(function () {
                            resolve();
                        }, 500);
                    }
                    else if (resultCode == androidAcivity.RESULT_CANCELED) {
                        t.output.status = 'canceled';
                        t.output.msg = 'User has canceled payment';
                        setTimeout(function () {
                            reject();
                        }, 500);
                    }
                    else {
                        var exception_1 = data.getSerializableExtra(com.braintreepayments.api.dropin.DropInActivity.EXTRA_ERROR);
                        t.output.msg = exception_1.getMessage();
                        setTimeout(function () {
                            reject();
                        }, 500);
                    }
                }
            };
        });
    };
    Braintree.prototype.greet = function () {
        return "Yes";
    };
    return Braintree;
}(braintree_common_1.Common));
exports.Braintree = Braintree;
//# sourceMappingURL=braintree.js.map