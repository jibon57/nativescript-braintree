# nativescript-braintree

Braintree Payment NativeScript plugin for Android. Detail information here: https://developers.braintreepayments.com/start/hello-client/android/v2

You will need a Server to Generate a client token. You can follow here:
https://developers.braintreepayments.com/start/hello-server/php 

Note: Your app's package ID should be lowercase letters. If your package contains underscores, the underscores should be removed. Detail: https://developers.braintreepayments.com/guides/client-sdk/setup/android/v2#browser-switch-setup

For iOS (Important)
===================
For Paypal must need to follow: https://developers.braintreepayments.com/guides/client-sdk/setup/ios/v4#register-a-url-type

## Platforms
Android

iOS ( iOS 9+)

## Installation

```javascript
tns plugin add nativescript-braintree
```

## Usage 
	
```javascript
    import { Braintree } from 'nativescript-braintree';
    private braintree: Braintree;

    this.braintree = new Braintree();
     let token = token; //Get the token from server. https://developers.braintreepayments.com/start/hello-server/php

     this.braintree.startPayment(token).then(()=>{
       console.dir(this.braintree.output);
       alert(this.braintree.output.msg);
       // Now you have nonce. So you can push it to server :)
     }).catch(()=>{
       console.dir(this.braintree.output);
       alert(this.braintree.output.msg);
     })
```
    
## License

Apache License Version 2.0, January 2004
