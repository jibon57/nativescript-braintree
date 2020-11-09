import { setupBraintreeAppDeligate } from "nativescript-braintree";
import {Application, isIOS} from "@nativescript/core";

if (isIOS) {
    setupBraintreeAppDeligate("org.nativescript.demo.payments");
}

Application.run({ moduleName: "main-page" });
