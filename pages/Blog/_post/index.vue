<template>
  <section :key="$route.params.post">
    <div class="blog-post-hero">
      <div class="contain_blog">
        <div class="b-p-heading">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
            <div class="back-to-blog">
              <nuxt-link to="/blog">← Back to Blog</nuxt-link>
            </div>
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

    <div class="contain_blog blog_post_style dynamic-markdown">
      <article>
        <div v-html="content"></div>
      </article>
    </div>

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <div class="post-applause-container">
      <span class="applause">
        <applause-button style="width: 70px; height: 70px;" color="#fc3a52" multiclap="true" />
      </span>
    </div>
    <div class="contain_blog">
      <div class="b-p-hl"></div>
      <div class="back-to-blog_2">
        <nuxt-link to="/blog">← Back to Blog</nuxt-link>
      </div>

      <div class="b-p-hl"></div>
    </div>
    <!-- Blog Post Footer -->
    <div class="contain_blog github-edit">
      <p class="ps">
        Caught a mistake or want to contribute to the blog?
        <span class="red">
          <a
            :href="`https://github.com/SAURABHRAI110/saurabhcrai.com/blob/master/articles/${attributes.github_doclink}`"
            target="_blank"
            rel="noopener"
          >Edit this page on GitHub!</a>
        </span>
      </p>
    </div>
    <div class="b-p-hl"></div>
    <!-- Blog comment form -->

    <comment @comment-submitted="addComment" />

    <!-- Blog previous comment -->
    <div class="number-of-comments-container">
      <div class="number-of-comments contain">{{ comments.length }} comments</div>
    </div>

    <div>
      <div class="users-old-comments">
        <div class="contain">
          <p v-if="!comments.length">Be the first to comment.</p>
          <div v-for="comment in comments" v-bind:key="comment.id">
            <div class="name">{{ comment.name }}</div>
            <div class="date">{{ formatDate(comment.time) }}</div>
            <div class="text">{{ comment.comment }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Comment from '~/components/blog/comment.vue'
import moment from 'moment'
import axios from 'axios'

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
  components: {
    Comment
  },

  head() {
    return {
      title: this.$t('indexPageHead.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Marina Aisa' },
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('indexPageHead.description'),
          hid: 'description'
        },
        { property: 'og:title', content: this.$t('indexPageHead.title') },
        { property: 'og:image', content: this.ogImage },
        {
          name: 'twitter:description',
          content: this.$t('indexPageHead.description')
        },
        { name: 'twitter:image', content: this.ogImage }
      ]
    }
  },

  computed: {
    ogImage: function() {
      return
    }
  },

  data() {
    return {
      comments: []
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).fromNow()
    },
    addComment(userComment) {
      // add comment to firebase
      axios
        .get(
          `https://us-central1-saurabhcrai-4484e.cloudfunctions.net/postComment?name=${
            userComment.name
          }&comment=${userComment.comment}&blogid=${this.$route.params.post}`
        )
        .then(() => {
          console.log('comment added')
          this.getComments()
        })
        .catch(() => {
          console.log('failed to add comment')
        })
      // this.comments.push(userComment)
    },
    getComments() {
      axios
        .get(
          `https://us-central1-saurabhcrai-4484e.cloudfunctions.net/getComments?blogid=${
            this.$route.params.post
          }`
        )
        .then(comments => {
          this.comments = JSON.parse(comments.data.data)
        })
    }
  },
  mounted() {
    this.getComments()
  }
}
</script>

<style scoped>
blockquote {
  margin-bottom: 1em;
}

#footer {
  display: none;
}

.post-applause-container {
  width: 100;
  position: relative;
  height: 100px;
}

.disqus-container {
  padding: 0px 24px 43px 30px;
  opacity: 1;
}

.applause {
  padding: 40px;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
</style>

