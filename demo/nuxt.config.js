export default {
  head: {
    title: 'Directivue - Demo',
    htmlAttrs: { lang: 'en' },
    meta: [
      { name: 'description', content: 'Demonstration of Vue directives by directivue' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.pcss'
  },
  plugins: [
    '~/plugins/directives'
  ]
}
