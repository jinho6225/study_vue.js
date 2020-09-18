<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{count}}</p>
    <button @click="count++">add + 1</button>
    <HomeComponent></HomeComponent>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
  import HomeComponent from './Home'

  export default {
    components: {
      HomeComponent
    },
    data() {
      return {
        title: "hello vue.js",
        count: 1
      }
    }
  }
</script>
