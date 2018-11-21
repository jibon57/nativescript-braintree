import * as application from 'tns-core-modules/application';
declare const BTAppSwitch;

/**
 * This file has been copied from nativescript-urlhandler
 * MIT License
 * Copyright (c) 2016 Martin Reinhardt
 * https://github.com/hypery2k/nativescript-urlhandler/blob/45fa7d83d59897db8f3b5077432a154ae542a69e/src/getappdelegate.ts
 */

/**
 * The following function is part of the NativeScript plugin: nativescript-plugin-firebase
 * It is licensed under the MIT license. The license can be found at the bottom of this file.
 * Copyright (c) EddyVerbruggen
 *
 * This function is an unmodified copy of the original function that can be found at:
 * https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/78f60f55be30b022690722006e1080b1685548fa/src/firebase.ios.ts#L469
 */

export function getAppDelegate() {
    // Play nice with other plugins by not completely ignoring anything already added to the appdelegate
    if (application.ios.delegate === undefined) {
        class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
            public static ObjCProtocols = [UIApplicationDelegate];

            static new(): UIApplicationDelegateImpl {
                return <UIApplicationDelegateImpl>super.new();
            }
        }

        application.ios.delegate = UIApplicationDelegateImpl;
    }

    return application.ios.delegate;
}

/**
 * This method has been copied from nativescript-urlhandler
 * MIT License
 * Copyright (c) 2016 Martin Reinhardt
 * https://github.com/hypery2k/nativescript-urlhandler/blob/45fa7d83d59897db8f3b5077432a154ae542a69e/src/urlhandler.ios.ts#L7
 */

export function enableMultipleOverridesFor(classRef, methodName, nextImplementation) {
    const currentImplementation = classRef.prototype[methodName];
    classRef.prototype[methodName] = function () {
        const result = currentImplementation && currentImplementation.apply(currentImplementation, Array.from(arguments));
        return nextImplementation.apply(nextImplementation, Array.from(arguments).concat([result]));
    };
}

export function setupAppDeligate(urlScheme) {

    let appDelegate = getAppDelegate();

    enableMultipleOverridesFor(appDelegate, 'applicationDidFinishLaunchingWithOptions', function (application, launchOptions) {
        try {
            BTAppSwitch.setReturnURLScheme(urlScheme);
            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    });

    enableMultipleOverridesFor(appDelegate, 'applicationOpenURLSourceApplicationAnnotation', function (application, url, sourceApplication, annotation) {
        try {
            if (url.scheme === urlScheme) {
                BTAppSwitch.handleOpenURLSourceApplication(url, sourceApplication);
                return true;
            }
        } catch (error) {
            console.log(error);
        }
        return false;
    });
}


/*
The MIT License (MIT)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
