import { Observable } from "@nativescript/core";

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
  /**
    * Amount is ignored when using Apple Pay
    */
  amount: string;
  collectDeviceData?: boolean;
  requestThreeDSecureVerification?: boolean;
  applePayPaymentRequest?: PKPaymentRequest;
  /**
    * currencyCode is required for Google Pay
    */
  enableGooglePay?: boolean;
  currencyCode?: string;
  vaultManager?: boolean;
}

export interface ApplePayLineItem {
  label: string;
  amount: number;
}
