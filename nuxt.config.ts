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
      routes: ['/', '/blue', '/pro', '/apple'],
      crawlLinks: true
    }
  },
  app: {
    baseURL: '/',
  }
})
