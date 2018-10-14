[![npm](https://img.shields.io/npm/v/nativescript-braintree.svg)](https://www.npmjs.com/package/nativescript-braintree)
[![npm](https://img.shields.io/npm/dt/nativescript-braintree.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-braintree)

# nativescript-braintree

Braintree Payment NativeScript plugin for Android & iOS (9+). 

Detail information here: 

https://developers.braintreepayments.com/start/hello-client/android/v2

https://developers.braintreepayments.com/guides/paypal/client-side/ios/v4

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

```
tns plugin add nativescript-braintree
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
This scheme must start with your app's Bundle ID and be dedicated to Braintree app switch returns. For example, if the app bundle ID is `com.yourcompany.yourapp`, then your URL scheme could be `com.yourcompany.yourapp.payments` or `com.yourcompany.yourapp.anything`. Above I used `org.nativescript.demo.payments` because app's bundle ID is `org.nativescript.demo` & we will need this value bellow.

Now open your `app.ts` or `main.ts` (for Angular) file under `app` directory. If you are using webpack for angular then it will be `main.aot.ts`. Add following lines before `application.start({ moduleName: "main-page" });` or `platformNativeScriptDynamic().bootstrapModule(AppModule);` or `platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);`

```
import * as app from "application";
declare var UIResponder, UIApplicationDelegate, BTAppSwitch;

if (app.ios) {

    class MyDelegate extends UIResponder {

        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application, launchOptions): boolean {

            try {
                BTAppSwitch.setReturnURLScheme("org.nativescript.demo.payments"); // should be same as CFBundleURLSchemes value.
                return true;
            } catch (error) {
                console.log(error);
            }
            return false;
        }

        applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {

            try {
                if (url.scheme == "org.nativescript.demo.payments") {
                    BTAppSwitch.handleOpenURLSourceApplication(url, sourceApplication);
                    return true;
                }
            } catch (error) {
                console.log(error);
            }
            return false;
        }
    }
    
    app.ios.delegate = MyDelegate;
}
```
Example: 

https://github.com/jibon57/nativescript-braintree/blob/master/demo/app/app.ts

https://github.com/jibon57/nativescript-braintree/blob/master/demo/app/App_Resources/iOS/Info.plist


ref: https://developers.braintreepayments.com/guides/paypal/client-side/ios/v4

## Credits

Special thanks to @Pip3r4o

## License

Apache License Version 2.0, January 2004
