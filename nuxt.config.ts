// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
  nitro: {
    prerender: {
      routes: ['/', '/blue', '/pro', '/apple', '/esim'],
      crawlLinks: true
    }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/connect/',
    cdnURL: process.env.NUXT_APP_BASE_URL || '/connect/',
  }
})
