<template>
  <div class="blog-container">
    <div class="all-article-grid">
      <div class="single-article" v-for="(post,key) in bloglist" :key="key">
        <nuxt-link :to="`/blog/${post.slug}`">
          <div class="image-placeholder" v-if="post.cover_image">
            <img
              :src="require(`~/assets/blog/${post.thumbnail_image}`)"
              :alt="post.cover_image_cp"
              width="952"
              height="509"
              class="article-thumbnail"
            />
          </div>
          <h3 class="article-title">{{ post.title }}</h3>
          <p class="article-description">{{ post.description }}</p>
          <!-- <p class="article-date">Published on {{ post.ctime }}</p>
        <div class="article-read-more">
          <span class="link-effect hover-link">
            <nuxt-link :to="`/blog/${post.slug}`">
              <span data-hover="Keep reading &rarr;">Keep reading &rarr;</span>
            </nuxt-link>
          </span>
          </div>-->
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bloglist() {
      if (!this.isPaginated) {
        return this.$store.state.bloglist.slice(0, this.postsPerPage)
      } else {
        return this.$store.state.bloglist
      }
    },
    totalPages() {
      return this.isPaginated
        ? Math.ceil(this.$store.state.bloglist.length / this.postsPerPage)
        : 1
    }
  },
  props: {
    isPaginated: Boolean,
    postsPerPage: Number
  }
}
</script>

<style scoped>
</style>