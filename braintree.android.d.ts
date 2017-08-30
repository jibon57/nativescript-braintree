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
