// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],
  css: ['~/assets/global.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  }
})
