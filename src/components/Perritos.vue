<template>
  <div class="hello">
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
    <Button @click="showImage">Show image</Button>
    <img src="../assets/logo.png" v-if="show" />
     <ol>
      <li v-for="todo in todos" :key="todo.text">
      {{ todo.text }}
    </li>
  </ol>
  </div>
</template>

<script>

export default {
  name: 'Perritos',
  data() {
    return {
      message: `You loaded this page on ${new Date().toLocaleString()}`,
      show: false,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
  methods: {
    showImage(event) {
      event.preventDefault();
      if (event) {
        this.$set(this.$data, 'show', !this.show);
      }
    },
    changeImage(event) {
      event.preventDefault();
      if (event) {
        this.$set(this.$data, 'image', !this.show);
      }
    },
  },
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
</style>
