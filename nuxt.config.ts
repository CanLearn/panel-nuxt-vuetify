// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ['vuetify/lib/styles/main.css'],
  build: {
    transpile: ['vuetify', 'vue-toastification'],
  }, 
  modules: ["nuxt-tiptap-editor"],
  tiptap: {
    prefix: "Tiptap", 
    lowlight: {
      theme: "github-dark",
    },
  },
  runtimeConfig : {
    public : {
      apiBase : 'http://127.0.0.1:8000'
    }
  }
})