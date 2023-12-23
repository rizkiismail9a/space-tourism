// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: [
    "@pinia/nuxt", // needed
    "@pinia-plugin-persistedstate/nuxt",
  ],
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Do you wanna travel to space? Travel the space with us to various destinations, expertise crews, and newest tehnologies! 🚀",
        },
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
});
