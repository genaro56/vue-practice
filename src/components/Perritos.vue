<template>
  <div class="hello">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="https://vuejs.org/">Vue is awesome</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="https://www.ikea.com/">
              Go to a random page
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/genaro56/vue-practice">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <h1>¡Perritos!</h1>
    <div class="container">
      <div class="row"></div>
      <div class="col-md-12">
        <span v-bind:title="hoverMessage">
          Hover your mouse over me for a few seconds
          to see my dynamically bound title!
        </span>
        <Button @click="showImage">Mostrar perrito</Button>
        <Button @click="changeImage">Cambiar imagen de perrito</Button>
      </div>
      <div class="col-md-12">
        <div class="card">
          <img :src="getImgUrl(selectedImage)" v-if="show" />
        </div>
      </div>
      <ol>
        <h1>To-do list</h1>
        <li v-for="todo in todos" :key="todo.text">
          <div class="card">{{ todo.text }}</div>
        </li>
      </ol>
      <textarea v-model="inputMessage" placeholder="Escribe un mensaje (2 way binded)"></textarea>
      <p>Mensaje: {{ inputMessage }}</p>
    </div>
  </div>
</template>

<script>
const dogs = ['', 'perro1.jpeg', 'perro2.jpg', 'perro3.jpg', 'perro4.jpg'];
export default {
  name: 'Perritos',
  data() {
    return {
      selectedImage: dogs[1],
      hoverMessage: `Abriste esta imagen el ${new Date().toLocaleString()}`,
      inputMessage: '',
      show: false,
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: '¡Construir algo!' },
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
    getImgUrl(pet) {
      const images = require.context('../assets/', false, /\.*$/);
      return images(`./${pet}`);
    },
    changeImage(event) {
      event.preventDefault();
      if (event) {
        this.$set(
          this.$data,
          'selectedImage',
          dogs[Math.ceil(Math.random() * (4 + 1 - 1))],
        );
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
