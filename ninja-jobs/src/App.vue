<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>
  <!-- 
    router-link benefits
      1. fast load (no network request)
      2. automatic "active" state on clicked links (vue classes are automatically assigned)
      3. paths being assigned to "to" can be data-binded (centralized management of paths, no hard-coding)
  -->

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: crimson;
}
</style>
