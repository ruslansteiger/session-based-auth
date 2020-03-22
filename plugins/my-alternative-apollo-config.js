import { createHttpLink } from 'apollo-link-http'
import Cookies from 'js-cookie'

export default function() {
  return {
    defaultHttpLink: false,

    link: createHttpLink({
      credentials: 'include',

      uri: 'http://127.0.0.1:8000/graphql',

      fetch: (uri, options) => {
        options.headers['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')

        return fetch(uri, options)
      },
    }),
  }
}
