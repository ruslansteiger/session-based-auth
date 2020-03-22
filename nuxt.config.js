export default {
  mode: 'universal',

  plugins: ['~/plugins/csrf.js'],

  modules: ['@nuxtjs/apollo'],

  apollo: {
    clientConfigs: {
      default: '~/plugins/my-alternative-apollo-config.js',
    },
  },
}
