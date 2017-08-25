import { Common } from './braintree.common';
export declare class Braintree extends Common {
    output: {
        'status': string;
        'msg': string;
        'nonce': string;
    };
    startPayment(token: any): Promise<{}>;
}
