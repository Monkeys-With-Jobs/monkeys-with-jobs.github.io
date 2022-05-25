export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Monkeys With Jobs e. U.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Game studio based in Austria' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Monkeys With Jobs' },
      { property: 'og:title', content: 'Monkeys With Jobs' },
      { property: 'og:url', content: 'https://monkeyswithjobs.com' },
      { property: 'og:description', content: 'Game studio based in Austria' },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:image', content: 'https://monkeyswithjobs.com/logo.png' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
