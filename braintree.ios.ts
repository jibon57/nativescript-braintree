/**
 * @Author: jibon
 * @Date:   2017-08-25T12:29:38+08:00
 * @Last modified by:   jibon
 * @Last modified time: 2017-08-25T14:43:01+08:00
 */

import { Common } from './braintree.common';
import * as utils from "tns-core-modules/utils/utils";

declare var BTDropInRequest, BTDropInController, UIApplication;

export class Braintree extends Common {

  public output = {
    'status': 'fail',
    'msg': 'unknown',
    'nonce': ''
  }
  public startPayment(token) {

    let t = this;

    return new Promise(function(resolve, reject) {
 
      let request = BTDropInRequest.alloc().init();
      let dropIn = BTDropInController.alloc().initWithAuthorizationRequestHandler(token, request, function(controller, result, error) {
        if (error !== null) {

          setTimeout(function() {
            reject();
          }, 500);

        } else if (result.cancelled) {
          t.output.status = 'cancelled';
          t.output.msg = 'User has cancelled payment';
          setTimeout(function() {
            reject();
          }, 500);

        } else {
          t.output.status = 'success';
          t.output.msg = 'Got Payment Nonce Value';
          t.output.nonce = result.paymentMethod.nonce;
          setTimeout(function() {
            resolve();
          }, 500);
        }
        controller.dismissViewControllerAnimatedCompletion(true, null);
      });

      let app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
      app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(dropIn, true, null);
    })
  }

}
