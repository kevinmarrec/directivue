export default {
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover' }
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.pcss'
  },
  plugins: [
    '~/plugins/directives'
  ]
}
