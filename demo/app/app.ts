import * as application from 'tns-core-modules/application';
import { setupBraintreeAppDeligate } from "nativescript-braintree"

if (application.ios) {
    setupBraintreeAppDeligate("org.nativescript.demo.payments");
}

application.start({ moduleName: "main-page" });
