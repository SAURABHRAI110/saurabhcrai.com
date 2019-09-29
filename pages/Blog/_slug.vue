<template>
  <div class="blogSelected">
    <div class="blog-post-hero">
      <div class="contain_blog">
        <div class="b-p-heading">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
            <div class="back-to-blog">
              <nuxt-link to="/blog">← Back to Blog</nuxt-link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <h1>{{ title }}</h1>
          </div>
          <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">{{ description }}</p>
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
          <span>{{ year }}</span>
        </div>
      </div>
    </div>

    <!-- hero image -->

    <div class="b-p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_blog_post" data-aos="reveal-right"></div>
        <ImageResponsive
          :imageURL="'blog/' + id + '/_main.jpg'"
          width="100%"
          class="blog-hero-image"
          :alt="'Blog picture'"
        />
      </div>
      <p class="ps black50">{{heroimagedes}}</p>
      <div class="section-divider">
        <hr class="section-divider" />
      </div>
    </div>

    <div class="contain_blog blog_post_style dynamic-markdown">
      <no-ssr>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          :extra-component="extraComponent"
        />
      </no-ssr>
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

    <!-- github edit -->

    <div class="contain_blog github-edit">
      <p class="ps">
        Caught a mistake or want to contribute to the blog?
        <span class="red">
          <a
            :href="`https://github.com/SAURABHRAI110/saurabhcrai.com/blob/master/articles/${github_doclink}`"
            target="_blank"
            rel="noopener"
          >Edit this page on GitHub!</a>
        </span>
      </p>
    </div>
    <div class="b-p-hl"></div>

    <!-- <div class="container small">
      <no-ssr>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          :extra-component="extraComponent"
        />
      </no-ssr>
    </div>-->

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
  </div>
</template>

<script lang="js">
  
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"
import Comment from '~/components/blog/comment.vue'
import moment from 'moment'
import axios from 'axios'

  export default {
    layout: 'blog',

       components: { DynamicMarkdown, Comment},

    async asyncData ({params, app}) {
      const fileContent = await import(`~/contents/${app.i18n.locale}/blog/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        owner: attr.owner,
        colors: attr.colors,
        heroimagedes:attr.heroimagedes,
        role: attr.role,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        related: attr.related,
        extraComponent: attr.extraComponent,
        github_doclink:attr.github_doclink,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    },

    nuxtI18n: {
      seo: false
    },

 

    head () {
      return {
        title: this.pageTitle,
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Marina Aisa" },
          { name: "description", property: "og:description", content: this.description, hid: "description" },
          { property: "og:title", content: this.pageTitle },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.description },
          { name: "twitter:image", content: this.ogImage }
        ],
        link: [
          this.hreflang
        ]
      };
    },

    transition: {
      name: 'slide-fade'
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
            }&comment=${userComment.comment}&blogid=${this.$route.params.slug}`
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
              this.$route.params.slug
            }`
          )
          .then(comments => {
            this.comments = JSON.parse(comments.data.data)
          })
      }
    },
    mounted() {
      this.getComments()
    },

    computed: {
      ogImage () {
        return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
      },
      pageTitle () {
        return this.title + ' – Saurabh Rai';
      },
      showLocales () {
        return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      },
      hreflang () {
        if (!this.trans) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.showLocales[0].iso,
          rel: 'alternate',
          href: `${process.env.baseUrl + (this.showLocales[0].code === 'en' ? '' : '/es')}/blog/${this.trans}`,
          hreflang: this.showLocales[0].code
        }
      },

      extraComponentLoader () {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/blog/${this.extraComponent}.vue`)
      }
    }
  }
</script>

<style lang="scss">
.overflowhidden {
  overflow: hidden;
}
.blogSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy='loading'] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  &[lazy='loaded'] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  .intro {
    display: flex;
  }
}

// .dynamicMarkdown {
//   padding: 3.2rem 0;
//   font-size: 16px;
//   line-height: 1.7;
//   color: $secondary;

//   > *:not(.datagrid):not(.image-placeholder) {
//     max-width: 700px;
//     margin-left: auto;
//     margin-right: auto;
//     display: block;
//   }

//   @media (min-width: $screen-sm) {
//     padding: 7.2rem 0;
//     font-size: 19px;
//   }

//   h2 {
//     padding-bottom: 3.2rem;
//     padding-bottom: 2rem;

//     @media (max-width: $screen-sm) {
//       font-size: 2rem;
//     }
//   }

//   h3 {
//     font-size: 2.2rem;
//     padding-bottom: 2rem;
//   }

//   li {
//     list-style-type: initial;
//   }

//   pre {
//     box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
//     padding: 2.4rem;
//     border-radius: 4px;
//     background-color: #f6f8fa;
//     overflow-x: scroll;
//     display: block;
//     margin-bottom: 5rem;

//     code {
//       background-color: #f6f8fa;
//     }
//   }

//   code {
//     background: #f3f4f4;
//     border-radius: 4px;
//     display: inline;
//     color: $secondary;
//     font-size: 14px;
//     padding: 0.2em 0.4em;

//     @media (min-width: $screen-sm) {
//       font-size: 16px;
//     }
//   }
// }
</style>
