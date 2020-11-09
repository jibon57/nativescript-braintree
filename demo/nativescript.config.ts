import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.demo',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    requireModules: {
      0: 'nativescript-braintree',
    },
  },
  appPath: 'app',
} as NativeScriptConfig;
