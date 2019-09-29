<template>
  <section class="blog-container">
    <div class="all-article-grid">
        <!-- <LangSwitcher /> -->
      </div>
      <ul class="blogs">
        <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
      </ul>
    </div>
  </section>
</template>
<script>
import BlogCard from '~/components/BlogCard.vue'
// import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: { BlogCard },
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>
<style scoped>
.blog-container {
  position: relative;
  width: 80%;
  height: auto;
  margin: auto;
  padding-right: 2.4rem;
}

.all-article-grid {
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  display: grid;
}
.all-article-grid > div:nth-child(2n) {
  padding-top: 50px;
}

@media screen and (max-width: 999px) {
  .all-article-grid {
    display: flex;
    flex-direction: column;
  }

  .all-article-grid > div:nth-child(2n) {
    padding-top: 0px;
  }

  .blog-container {
    width: 80%;

    padding-right: 0rem;
  }
}

@media screen and (max-width: 600px) {
  .blog-container {
    width: 91%;
  }
}
</style>

