<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link :to="{ name: 'About2' }">About with name</router-link>

    <router-link v-for="page in pages" :key="page" :to="{name: page}">
      {{ page }}
    </router-link>

    <router-link :to="{name: 'Jobs'}">Jobs</router-link>
  </div>

  <div>
    <button @click="redirectHome">Go home</button>
    <button @click="back">back</button>
    <button @click="forward">forward</button>
  </div>

  <!-- View -->
  <router-view/>

</template>

<script>
export default {
  data() {
    return {
      pages: [
        'Page1',
        'Page2'
      ]
    }
  },
  methods: {
    redirectHome() {
      this.$router.push({ name: 'Home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  background: teal;
  padding: 10px 5px;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: teal;
  background: white;
  border: 1px solid teal;
}
</style>
