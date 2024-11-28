// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: "Brighter Shores Tools",
     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true }
})