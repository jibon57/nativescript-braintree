[![npm](https://img.shields.io/npm/v/nativescript-braintree.svg)](https://www.npmjs.com/package/nativescript-braintree)
[![npm](https://img.shields.io/npm/dt/nativescript-braintree.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-braintree)

# nativescript-braintree

Braintree Payment NativeScript plugin for Android & iOS (9+). Works with NS 6+

Detail information here: 

https://developers.braintreepayments.com/start/hello-client/android/v2

https://developers.braintreepayments.com/guides/drop-in/overview/ios/v4

You will need a Server to Generate a client token. You can follow here:
https://developers.braintreepayments.com/start/hello-server/php 

Note: Your app's package ID should be lowercase letters. If your package contains underscores, the underscores should be removed. Detail: https://developers.braintreepayments.com/guides/client-sdk/setup/android/v2#browser-switch-setup

For iOS (Important)
===================
For Paypal & Venmo setup, must need to follow bellow [setup-ios-paypal--venmo](#setup-ios-paypal--venmo)

## Platforms
Android

iOS (9+)

## Installation

NativeScript 5.X+
```
tns plugin add nativescript-braintree
```

NativeScript 4.X
```
tns plugin add nativescript-braintree@2.0.1
```

## Usage 
	
``` typescript
import { Braintree, BrainTreeOptions } from 'nativescript-braintree';

let opts :BrainTreeOptions = {
  amount: "10.0",
  collectDeviceData: true,
  requestThreeDSecureVerification: false,
}

let token = token; //Get the token from server. https://developers.braintreepayments.com/start/hello-server/php

let braintree = new Braintree();

braintree.startPayment(token, opt);

braintree.on("success", function (res) {
    let output = res.object.get("output");
    console.dir(output);
})

braintree.on("cancel", function (res) {
    let output = res.object.get("output");
    console.dir(output);
})

braintree.on("error", function (res) {
    let output = res.object.get("output");
    console.dir(output);
})
```

## Set up Apple Pay

If you want to use Apple Pay there are a few steps you __must__ complete.

1. Set up your Apple Pay Certificate in Braintree and in the Apple Developer Portal
    Follow the configuration steps here: https://developers.braintreepayments.com/guides/apple-pay/configuration/ios/v4
    
2. To prevent compiler errors and to provide intellisense when working with native iOS classes add `tns-platform-declarations` to your project. Here is a video guide showing how to do that: https://www.youtube.com/watch?v=vz7qfpeghFs

__Note:__ It was implemented this way so that the developer has more customization capabilities rather than putting some of this logic inside the plugin which might be harder for authors to modify if needed.

3. Populate `applePayPaymentRequest` property on the `BrainTreeOptions` class depending on how you want the Apple Pay prompt to look.

__Note:__ The apple pay prompt will make the last item in the `paymentSummaryItems` show like a total. Therefore you can just add the summary/total item manually or put a summary/total item at the end of the `applePayLineItems` array.

### Itemized Apple Pay
![Itemized Apple Pay screenshot](/readme-images/itemized-apple-pay.png)

If you want an itemized prompt like above, do the following:

```typescript
import { ApplePayLineItem } from '../../src';

let applePayPaymentRequestObj = PKPaymentRequest.alloc().init();

// If you want to show an itemized Apple Pay prompt.
let applePayLineItems = [
            {
                label: "Service",
                amount: 0.02
            },
            {
                label: "Delivery",
                amount: 0.03
            },
	    {
	    	label: "Company Name",
		amount: 0.05
	    }
        ];

let lineItemsArray = [];

applePayLineItems.map((lineItem: ApplePayLineItem) => {

let pkSummaryItem = PKPaymentSummaryItem.summaryItemWithLabelAmount(lineItem.label, NSDecimalNumber.decimalNumberWithString(lineItem.amount.toString()));

lineItemsArray.push(pkSummaryItem);
});


let paymentSummaryArray = NSArray.alloc().initWithArray(lineItemsArray);

applePayPaymentRequestObj.paymentSummaryItems = paymentSummaryArray as NSArray<PKPaymentSummaryItem>;
applePayPaymentRequestObj.countryCode = "US";
applePayPaymentRequestObj.currencyCode = "USD";
applePayPaymentRequestObj.merchantIdentifier = "YOUR_MERCHANT_IDENTIFIER";
applePayPaymentRequestObj.merchantCapabilities = PKMerchantCapability.Capability3DS;

// Configure your allowed networks
let networksArray = NSArray.alloc().initWithArray([
    "AmEx",
    "Discover",
    "MasterCard",
    "Visa",
]);

applePayPaymentRequestObj.supportedNetworks = networksArray as NSArray<string>;

let opt: BrainTreeOptions = {
    amount: "0.01", // This is ignored if Apple Pay is the selected payment method
    collectDeviceData: false,
    requestThreeDSecureVerification: true,
    // Apple Pay payment request
    applePayPaymentRequest: applePayPaymentRequestObj,
};
```


### Summary Apple Pay
![Summary Apple Pay screenshot](/readme-images/summary-apple-pay.png)

If you want a summary prompt like above, do the following:

```typescript
import { ApplePayLineItem } from '../../src';

let applePayPaymentRequestObj = PKPaymentRequest.alloc().init();

// If you want to show a summary Apple Pay prompt.
let applePayLineItems = [
	    {
	    	label: "Company Name",
		amount: 0.02
	    }
        ];

let lineItemsArray = [];

applePayLineItems.map((lineItem: ApplePayLineItem) => {

let pkSummaryItem = PKPaymentSummaryItem.summaryItemWithLabelAmount(lineItem.label, NSDecimalNumber.decimalNumberWithString(lineItem.amount.toString()));

lineItemsArray.push(pkSummaryItem);
});


let paymentSummaryArray = NSArray.alloc().initWithArray(lineItemsArray);

applePayPaymentRequestObj.paymentSummaryItems = paymentSummaryArray as NSArray<PKPaymentSummaryItem>;
applePayPaymentRequestObj.countryCode = "US";
applePayPaymentRequestObj.currencyCode = "USD";
applePayPaymentRequestObj.merchantIdentifier = "YOUR_MERCHANT_IDENTIFIER";
applePayPaymentRequestObj.merchantCapabilities = PKMerchantCapability.Capability3DS;

// Configure your allowed networks
let networksArray = NSArray.alloc().initWithArray([
    "AmEx",
    "Discover",
    "MasterCard",
    "Visa",
]);

applePayPaymentRequestObj.supportedNetworks = networksArray as NSArray<string>;

let opt: BrainTreeOptions = {
    amount: "0.01", // This is ignored if Apple Pay is the selected payment method
    collectDeviceData: false,
    requestThreeDSecureVerification: true,
    // Apple Pay payment request
    applePayPaymentRequest: applePayPaymentRequestObj,
};
```


## Setup Google Pay
In order to utilize the Google Pay services you must ensure you have set up the required meta tag in your AndroidManifest.xml detailed here: https://developers.braintreepayments.com/guides/google-pay/client-side/android/v3

Also be sure to provide the a currency code in the BrainTreeOptions, as this is required.

``` typescript    
let opts: BrainTreeOptions = {
            amount: "0.01",
            collectDeviceData: false,
            requestThreeDSecureVerification: true,
            currencyCode: "USD"
        };
```

## Setup iOS paypal & Venmo.

If you want to use Paypal & Venmo then you will need to edit your app `Info.plist` file which is located `app/App_Resources/iOS/Info.plist` to add `URL scheme` like this:

```
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>org.nativescript.demo.payments</string>
		</array>
	</dict>
</array>

```
This scheme must start with your app's Bundle ID and be dedicated to Braintree app switch returns. For example, if the app bundle ID is `com.yourcompany.yourapp`, then your URL scheme could be `com.yourcompany.yourapp.payments` or `com.yourcompany.yourapp.anything`. Above I used `org.nativescript.demo.payments` because app's bundle ID is `org.nativescript.demo` & we will need this value below.

Now open your `app.ts` or `main.ts` (for Angular) file. Add following lines before `application.start({ moduleName: "main-page" });` or `platformNativeScriptDynamic().bootstrapModule(AppModule);` (Angular).

```
import * as app from "application";
import { setupBraintreeAppDeligate } from "nativescript-braintree"

if (app.ios) {
    setupBraintreeAppDeligate("org.nativescript.demo.payments");
}
```
Example: 

https://github.com/jibon57/nativescript-braintree/blob/master/demo/app/app.ts

https://github.com/jibon57/nativescript-braintree/blob/master/demo/app/App_Resources/iOS/Info.plist


ref: https://developers.braintreepayments.com/guides/paypal/client-side/ios/v4

## Credits

Special thanks to @Pip3r4o, @TylerBlakeLOU, @SamGosman


## License

Apache License Version 2.0, January 2004
