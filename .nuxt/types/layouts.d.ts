import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "article" | "default" | "page"
declare module "/home/uwuntu/beoun_blog2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}