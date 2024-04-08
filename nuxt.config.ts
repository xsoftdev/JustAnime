export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 
  'shadcn-nuxt', 
  "@nuxt/image",
  'nuxt-lucide-icons', 
  '@nuxtjs/color-mode',
  'nuxt-windicss'
],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    publicRuntimeConfig: {
    },
    privateRuntimeConfig: {
      apiToken_: process.env.apiToken_,
      mongodb_url: process.env.MONGO_URI,
      secret_key: process.env.SECRET_KEY,
    }
  },
  nitro: {
    plugins: ["~/server/index.ts"]
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})
