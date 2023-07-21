import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/uwuntu/beoun_blog2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}