/**
 * @Author: jibon
 * @Date:   2017-08-25T12:29:38+08:00
 * @Last modified by:   jibon
 * @Last modified time: 2017-08-25T14:43:01+08:00
 */

import { Common } from './braintree.common';
export declare class Braintree extends Common {
  output: {
      'status': string;
      'msg': string;
      'nonce': string;
      'paymentMethodType': string;
      'deviceInfo': string;
  };
  startPayment(token: any, options: BrainTreeOptions): Promise<{}>;
}
export interface BrainTreeOptions {
  amount: string;
  collectDeviceData?: boolean;
  requestThreeDSecureVerification?: boolean;
}
