<template>
  <div class="container">
    <button @click="fetchCars()">Fetch cars</button>
    <div v-for="car in cars" :key="car.uuid">
      {{ car.name }}
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import gql from 'graphql-tag'

export default {
  data() {
    return {
      cars: [],
    }
  },

  methods: {
    fetchCars() {
      const token = Cookies.get('XSRF-TOKEN')

      console.log(token) // 🟢 Token is shown in console

      this.$apollo.query({
        query: gql`
          query {
            cars {
              uuid
              name
            }
          }
        `,
        headers: {
          'X-XSRF-TOKEN': token, // ⭕ Fetch without Token
        },
      })
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
