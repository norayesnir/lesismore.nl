// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt", "nuxt-icon", "@nuxtjs/apollo"],

  css: ["@/assets/styles/main.scss"],

  apollo: {
    clients: {
      default: {
        connectToDevTools: true,
        httpEndpoint: process.env.PREPR_API_URL as string,
      },
    },
  },
});
