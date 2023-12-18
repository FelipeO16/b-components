// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Poppins: [100, 300, 400, 500, 600, 700, 800, 900],
    },
  },
});