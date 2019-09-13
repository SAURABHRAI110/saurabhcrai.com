<template>
  <section>
    <div class="p-hero-container">
      <img id="zoom-default" src="~assets/photography/p-1.jpg" alt="silhoutte, sunset, sunrise" />
    </div>

    <no-ssr>
      <div v-masonry transition-duration="3s" item-selector=".item" class="masonry-container">
        <div v-masonry-tile class="item" :key="index" v-for="(item, index) in blocks">
          <p>{{item.title}} - {{index}}</p>
        </div>
      </div>
    </no-ssr>
  </section>
</template>

<script>
import NoSSR from 'vue-no-ssr'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      blocks: [
        {
          title: 'nice block'
        },
        {
          title: 'another shiny block'
        },
        {
          title: 'the last block'
        }
      ]
    }
  },

  components: {
    'no-ssr': NoSSR
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style scoped>
.p-hero-container {
  height: 85vh;
  width: 100%;
  position: relative;
  background-color: black;
}

.p-hero-container img {
  object-fit: cover;
  width: 100%;
}
</style>

