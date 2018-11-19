import { Observable } from 'tns-core-modules/data/observable';

export declare function setupBraintreeAppDeligate(urlScheme: any): void;

export declare class Braintree extends Observable {
  constructor();
  output: {
    'status': string;
    'msg': string;
    'nonce': string;
    'paymentMethodType': string;
    'deviceInfo': string;
  };
  startPayment(token: any, options: BrainTreeOptions): void;
  private callIntent(intent);
  private handleResults(requestCode, resultCode, data);
}

export interface BrainTreeOptions {
  amount: string;
  collectDeviceData?: boolean;
  requestThreeDSecureVerification?: boolean;
}
