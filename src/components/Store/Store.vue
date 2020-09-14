<template>
  <div class="projects">
    <div id="check-list">
      <custom-header></custom-header>
      <custom-main></custom-main>
      <custom-footer></custom-footer>
    </div>
  </div>
</template>
<script src="components.js"></script>
<script>
import List from "./components";

export default {
  name: "Store",
  components: { List },
  data() {
    return {
      todos: [
        { text: "Aprender JavaScript" },
        { text: "Aprender Vue" },
        { text: "¡Construir algo!" },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#check-list {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #f8f9fa;
}
</style>
<style src="./styles/svg-styles.css"></style>
<style src="./styles/component-styles.css"></style>