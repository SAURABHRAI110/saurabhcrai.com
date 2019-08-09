<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-10-tablet is-9-desktop">
          <header class="title has-text-centered">
            <div class="nirebu-title has-background-gradient">Latest blog posts</div>
          </header>
          <article v-for="(post,key) in bloglist" :key="key" class="columns is-centered">
            <div v-if="post.cover_image" class="column is-3-desktop">
              <nuxt-link :to="`/blog/${post.slug}`">
                <figure class="image">
                  <img
                    :src="require(`~/assets/blog/${post.thumbnail_image}`)"
                    :alt="post.cover_image_cp"
                    loading="lazy"
                  />
                </figure>
              </nuxt-link>
            </div>
            <div class="column">
              <p class="title">
                <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
              </p>
              <p class="subtitle">{{ post.description }}</p>
              <div class="level">
                <p class="small level-left">Published on {{ post.ctime }}</p>
                <p class="subtitle level-right">
                  <nuxt-link :to="`/blog/${post.slug}`">Keep reading &rarr;</nuxt-link>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
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
.preview-image {
  width: 12vw;
}

.nirebu-title {
  padding: 0.25em 0 0.25em;
}
</style>