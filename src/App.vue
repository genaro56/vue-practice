<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="https://vuejs.org/">Vue is awesome</a>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
            <router-link to="/projects" class="nav-link" >Projects</router-link>
            <router-link to="/services" class="nav-link" >Services</router-link>
        </ul>
      </div>
    </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
