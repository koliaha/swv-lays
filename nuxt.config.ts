// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: "preload",
        href: "/fonts/Inter-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "",
      },
      {
        rel: "preload",
        href: "/fonts/Inter-Regular.woff",
        as: "font",
        type: "font/woff",
        crossorigin: "",
      },
      {
        rel: "preload",
        href: "/fonts/Inter-Bold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "",
      },
      {
        rel: "preload",
        href: "/fonts/Inter-Bold.woff",
        as: "font",
        type: "font/woff",
        crossorigin: "",
      },
    ],
  },
  telemetry: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/ui.scss";',
        },
      },
    },
  },
});
