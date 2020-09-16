<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{count}}</p>
    <button @click="count++">add + 1</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "hello vue.js",
        count: 1
      }
    }
  }
</script>
