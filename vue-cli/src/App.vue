// App.vue

<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        title: "hello vue.js",
        count: 1
      }
    }
  }
</script>
