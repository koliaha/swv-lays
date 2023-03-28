import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "authorization-rtl" | "authorization" | "registration-rtl" | "registration" | "reset-password-rtl" | "reset-password"
declare module "/Users/koliaha/Documents/swv-lays/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}