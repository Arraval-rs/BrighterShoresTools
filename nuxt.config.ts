// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: "Brighter Shores Tools",
     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', 'nuxt-vuefire'],
  vuefire: {
    auth:{
      enabled: true
    },
    config: {
      apiKey: process.env.FB_API_KEY,
      authDomain: process.env.FB_AUTH_DOMAIN,
      databaseURL: process.env.FB_DATABASE_URL,
      projectId: process.env.FB_PROJECT_ID,
      storageBucket: process.env.FB_STORAGE_BUCKET,
      messagingSenderId: process.env.FB_SENDER_ID,
      appId: process.env.FB_APP_ID
    }
  },
  devtools: { enabled: true }
})