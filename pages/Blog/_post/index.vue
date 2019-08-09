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

        <div class="author-section">
          <div class="author-container">
            <div>
              <nuxt-link to="/about">
                <div class="author-avatar">
                  <img src="~assets/blog/blog-avatar-2.jpg" alt="blog avatar" />
                </div>
              </nuxt-link>
            </div>
            <div class="name-and-link">
              <span>
                <nuxt-link to="/about">Saurabh Rai</nuxt-link>
              </span>
              <span>
                <a
                  class="entry-meta-instagram"
                  href="https://www.instagram.com/saurabh.archives"
                >@saurabh.archives</a>
              </span>
            </div>
          </div>
        </div>
        <div class="published-time">
          <span>Published on</span>
          <span>
            <time>{{require('moment')(attributes.ctime).format('Do MMM YYYY')}}</time>
          </span>
        </div>
      </div>
    </div>

    <!-- hero image -->
    <div v-if="attributes.cover_image" class="b-p-hero_image">
      <img
        :src="require(`~/assets/blog/${attributes.cover_image}`)"
        :alt="attributes.cover_image_cp"
      />
      <p class="ps black50">{{attributes.cover_image_description}}</p>
    </div>

    <div class="contain_blog">
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
const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  typographer: true
}).use(require('markdown-it-highlightjs'), { auto: true })

export default {
  layout: 'blog',

  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`)
    let res = fm(fileContent.default)
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    }
  },
  head() {
    return {
      title: this.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.attributes.description
        }
      ]
    }
  }
}
</script>

<style scoped>
blockquote {
  margin-bottom: 1em;
}
</style>

