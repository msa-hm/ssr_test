<template>
  <div class="about">
    <h1>This is an about page</h1>
    Result: {{ff}}
    <button @click="ff2">Push me</button>
  </div>
</template>

<script>
  import BlogService from "../services/BlogService";

  export default {
    name: 'About',
    data() {
      return {
        ff: null
      }
    },
    methods: {
      async ff2 () {
        console.log('BTN pushed')
        this.ff = await BlogService.getBlog()
        console.log(this.ff )
      }
    }

  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
