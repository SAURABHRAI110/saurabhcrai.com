<template>
  <div class="blog-container">
    <div class="all-article-grid">
      <div class="single-article" v-for="(post,key) in bloglist" :key="key">
        <nuxt-link :to="`/blog/${post.slug}`">
          <div class="projects-wrapper-top hover-target">
            <div class="projects-wrapper item1">
              <div class="projects-card-wrapper">
                <div class="projects-card"></div>
                <div class="image-placeholder" v-if="post.cover_image">
                  <img
                    :src="require(`~/assets/blog/${post.thumbnail_image}`)"
                    :alt="post.cover_image_cp"
                    width="952"
                    height="509"
                    class="article-thumbnail"
                  />
                </div>
              </div>
              <div class="projects-content">
                <h3 class="type-sub2">{{ thumbnailName }}</h3>
                <p class="type-sub3">{{ thumbnailDescription }}</p>
              </div>
            </div>
          </div>
          <!-- <div class="image-placeholder" v-if="post.cover_image">
            <img
              :src="require(`~/assets/blog/${post.thumbnail_image}`)"
              :alt="post.cover_image_cp"
              width="952"
              height="509"
              class="article-thumbnail"
            />
          </div>-->
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
.projects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1000px;

  background-color: white;
}

.projects-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projects-card-wrapper {
  position: relative;

  border-radius: 0.1rem;
  overflow: hidden;
  cursor: url('/cnblack.svg'), auto;
}

.projects-image {
  width: 100%;
  height: 100%;
  transform: scale(1.09);
  transform-origin: center;
  transition: transform 1.25s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.projects-card-wrapper {
  position: relative;
  transition: transform 0.95s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.projects-content {
  position: absolute;
  right: -4%;
  text-align: right;
  bottom: 9%;
  display: inline-block;
  z-index: 10;
  overflow: hidden;
  white-space: nowrap;
  opacity: 1;
  transition: all 0.45s cubic-bezier(0.475, 0.425, 0, 0.995);
  color: rgb(31, 31, 31);
}

.projects-wrapper-top {
  transition: all 1s;
}
.projects-wrapper-top:hover .projects-content {
  right: -2%;
}

.projects-content:active {
  color: aquamarine;
}

.type-sub2 {
  font-weight: 700;
  font-size: 32px;
  /* line-height: 70px; */
  letter-spacing: 0.02em;
  margin-bottom: 0px;
}

.type-sub3 {
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.05em;
  margin-top: 1px;
}

/* animate */
.projects-wrapper-top:hover .projects-card-wrapper {
  transition-delay: 100ms;
  transform: scale(0.95) rotateY(-9deg);
}

.projects-wrapper-top:hover .projects-card-wrapper .projects-image {
  transition-delay: 200ms;
  transform: scale(1);
}
</style>