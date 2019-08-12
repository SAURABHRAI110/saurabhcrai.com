<template>
  <section :key="$route.params.post">
    <div class="blog-post-hero">
      <div class="contain_blog">
        <div class="b-p-heading">
          <div class="back-to-blog" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
            <nuxt-link to="/blog">← Back to Blog</nuxt-link>
          </div>

          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <h1>{{ attributes.title }}</h1>
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
          >{{ attributes.description }}</p>
        </div>

        <div class="author-section">
          <div class="author-container">
            <div>
              <nuxt-link to="/about">
                <div
                  class="author-avatar"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <img
                    src="~assets/blog/blog-avatar-2.jpg"
                    alt="blog avatar, profile pic, dp, author"
                    title="Know more"
                  />
                </div>
              </nuxt-link>
            </div>
            <div
              class="name-and-link"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <span>
                <nuxt-link to="/about">Saurabh Rai</nuxt-link>
              </span>
              <span>
                <a
                  class="entry-meta-instagram"
                  href="https://www.instagram.com/saurabh.archives"
                  target="_blank"
                  rel="noopener"
                  title="Personal Insta Account"
                >@saurabh.archives</a>
              </span>
            </div>
          </div>
        </div>
        <div class="published-time" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          <span>Published on</span>
          <span>
            <time>{{require('moment')(attributes.ctime).format('Do MMM YYYY')}}</time>
          </span>
        </div>
      </div>
    </div>

    <!-- hero image -->
    <div v-if="attributes.cover_image" class="b-p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_blog_post" data-aos="reveal-right"></div>
        <img
          :src="require(`~/assets/blog/${attributes.cover_image}`)"
          :alt="attributes.cover_image_cp"
        />
      </div>
      <p class="ps black50">{{attributes.cover_image_description}}</p>
      <div class="section-divider">
        <hr class="section-divider" />
      </div>
    </div>

    <div class="contain_blog dynamic-markdown">
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

h3 {
  padding: 0px 0px 0px 0px;
  font-size: 10px;
}
</style>

