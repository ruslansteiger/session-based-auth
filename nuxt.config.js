export default {
  mode: 'universal',

  plugins: ['~/plugins/csrf.js'],

  modules: ['@nuxtjs/apollo'],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://127.0.0.1:8000/graphql',

        httpLinkOptions: {
          credentials: 'include',
        },
      },
    },
  },
}
