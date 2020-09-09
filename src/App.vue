<template>
  <div id="app">
    <Perritos/>
  </div>
</template>

<script>
import Perritos from './components/Perritos';

export default {
  name: 'App',
  components: {
    Perritos,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
