// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/home/hbpopos/beoun_blog2/app.config";
import type { default as appConfig1 } from "/home/hbpopos/beoun_blog2/node_modules/@nuxt-themes/alpine/app.config";
import type { default as appConfig2 } from "/home/hbpopos/beoun_blog2/node_modules/@nuxt-themes/typography/app.config";
import type { default as appConfig3 } from "/home/hbpopos/beoun_blog2/node_modules/@nuxt-themes/elements/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0, typeof appConfig1, typeof appConfig2, typeof appConfig3]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}