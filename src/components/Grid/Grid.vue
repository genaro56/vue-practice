<template>
  <div>
    <h1>Projects</h1>
    <div class="col-sm-12">
      <div class="row top">
        click me ☞
        <img
          src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_format_list_bulleted_48px-512.png"
          alt="an icon"
          @click="changeArrangement('flex')"
        />
        <img
          src="https://www.iconfinder.com/data/icons/faticons/32/grid-2-01-512.png"
          alt="an icon"
          @click="changeArrangement('grid')"
        />
      </div>
      <div class="row bottom" :style="{ display: imageArrangement }">
        <div class="card item" v-for="(image, i) in images" :key="i">
          <img :src="image" />
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
const images = [
  'https://as.com/tikitakas/imagenes/2017/10/05/portada/1507190787_986328_1507190908_noticia_normal.jpg',
  'https://images.indianexpress.com/2020/09/PS5.jpg',
  'https://as.com/meristation/imagenes/2020/04/08/noticias/1586356519_741025_1586356650_noticia_normal.jpg',
];
export default {
  name: 'Grid',
  data() {
    return {
      images,
      imageArrangement: 'flex',
    };
  },
  methods: {
    changeArrangement(event) {
      this.$set(
        this.$data,
        'imageArrangement',
        event,
      );
    },
  },
};
</script>
<style>
.top {
  display: inline-flex;
  justify-content: flex-end;
}
.top > img {
  width: 30px;
  /* height: 25px; */
}

.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: repeat(2, 50%);
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item > img {
  width: 250px;
}
</style>
