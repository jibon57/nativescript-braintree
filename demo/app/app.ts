import * as application from 'tns-core-modules/application';

declare var UIResponder, UIApplicationDelegate, BTAppSwitch;

if (application.ios) {

    class MyDelegate extends UIResponder {

        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application, launchOptions): boolean {

            try {

                BTAppSwitch.setReturnURLScheme("org.nativescript.demo.payments");
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

    application.ios.delegate = MyDelegate;
}

application.start({ moduleName: "main-page" });
