<template>
  <h1>{{ title }}</h1>
</template>
<!--
  Gets rendered to the "app" div
   (not directly coding inside the div, in order to utilize the concept of multiple components).
-->

<script>

export default {
  name: 'App',
  data(){
    return {
      title: 'My First Vue App :)'
    }
  }
}
/*
  All dynamic development methods that was used in widget-size project
   can also be used in SPA-size projects (Such as the data function above).
*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
/* 
  Every style written inside here is placed into the <head>,
   being a global style for any components by default.
*/
</style>