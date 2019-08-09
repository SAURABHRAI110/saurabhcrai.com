<template>
  <section :key="$route.params.post">
    <div class="blog-post-hero">
      <div class="contain_blog">
        <div class="b-p-heading">
          <div class="back-to-blog">
            <nuxt-link to="/blog">← Back to Blog</nuxt-link>
          </div>

          <h1>{{ attributes.title }}</h1>
          <p>{{ attributes.description }}</p>
        </div>

        <div class="author-container">
          <div>
            <nuxt-link to="/about">
              <div class="author-avatar">
                <img src="~assets/blog/blog-avatar.jpg" alt="blog avatar" />
              </div>
            </nuxt-link>
          </div>
          <div class="entry-meta-author-box">
            <a class="entry-meta-author" href="https://later.com/blog/author/jill/">Saurabh Rai</a>
            <nuxt-link to="/about"></nuxt-link>
            <a
              class="entry-meta-instagram"
              href="https://www.instagram.com/saurabh.archives"
            >@saurabh.archives</a>
          </div>
          <div class="entry-meta">
            <p class="time-wrapper">
              Published on
              <time>{{require('moment')(attributes.ctime).format('Do MMM YYYY')}}</time>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- hero image -->
    <figure v-if="attributes.cover_image" class="image">
      <img
        :src="require(`~/assets/images/articles/${attributes.cover_image}`)"
        :alt="attributes.cover_image_cp"
        loading="lazy"
      />
    </figure>

    <div class="b-p-hero_image">
      <img src="~assets/blog/1.jpg" alt="blog hero image" />
      <p class="ps black50">Something Related to image</p>
    </div>
    <div class="contain">
      <article>
        <div v-html="content"></div>
      </article>
      <div class="level">
        <nuxt-link to="/blog/" class="level-left">&larr; Back to blog</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blog'
}
</script>

<style>
</style>
