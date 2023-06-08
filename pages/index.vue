<template>
  <div>
    <div class="a-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img class="hero-svg" src="~assets/svg/s.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="nametag-container contain">
        <div class="h-name" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/about" style="text-decoration: none;">
            <span class="underline-magical">Saurabh Chandra Rai</span>
          </nuxt-link>
        </div>
        <div
          class="h-j-title"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >UX/UI Designer & Developer</div>
      </div>

      <div
        class="contain h-hero-title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="400"
      >
        <h1>
          <span>Sr. User Experience</span>
          <br />
          <span class="outlined">Designer</span> At
          <br />
          <a href="https://www.ranosys.com/" target="_blank" rel="noopener" title="ranosys.com">
            <span class="underline-magical-hero">Ranosys Technologies</span>
          </a>
        </h1>
      </div>
      <div class="contain">
        <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="600">
          Hi, I'm Saurabh, a multidisciplinary UI/UX Designer & Front-end Developer.
          I 
          <span>
            <nuxt-link to="/projects">
              <span class="underline-magical">Design</span>
            </nuxt-link>,
            <a
              href="https://github.com/SAURABHRAI110"
              target="_blank"
              rel="noopener"
              title="Github(new tab)"
            >
              <span class="underline-magical">Code</span>
            </a> and
            <nuxt-link to="/blog">
              <span class="underline-magical">Write.</span>
            </nuxt-link>
          </span>
        </p>
      </div>
    </div>

    <!-- home Grid pics section 2 -->

    <section class="h-sec2-container">
      <div class="h-sec2-grid">
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/1.jpg?webp" type="image/webp" />
        </div>
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1200"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/2.gif" type="image/webp" />
        </div>
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duratio="600"
          data-aos-delay="1300"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >
          <img id="zoom-default" src="~assets/img/home/3.jpg?webp" type="image/webp" />
        </div>
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1400"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/4.gif" type="image/webp" />
        </div>
        <div
          class="middle-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/5.jpg?webp" type="image/webp" />
        </div>
        <div
          class="middle-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/6.jpg?webp" type="image/webp" />
        </div>
        <div
          class="middle-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/7.jpg?webp" type="image/webp" />
        </div>
        <div
          class="middle-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/8.jpg?webp" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/9.jpg?webp" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/10.jpg?webp" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/11.jpg?webp" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/12b.jpg?webp" type="image/webp" />
        </div>
      </div>
    </section>

    <!-- get to know me -->

    <div class="more-about-me">
      <div class="center-h-v">
        <nuxt-link to="/about">
          <discovermore class="hover-target" button-text="get to know me" />
        </nuxt-link>
      </div>
    </div>
    <!-- Showcase video and parallax -->
    <div class="h-showreel">
      <div class="showreel-bg">
        <img v-parallax="0.2" src="~/assets/img/showreel-bg.jpg" alt="elevito wireframe" />
      </div>
      <div class="showreel-overlay"></div>
      <div class="center-h-v">
        <h1
          class="showreel-heading"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
          style="text-transform:uppercase"
        >Watch Showreel</h1>
        <p
          class="showreel-sub-heading"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >Get Inspired</p>
        <div
          @click="openModal"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >
          <playbutton />
        </div>
      </div>
    </div>

    <!-- Showreell Modal -->
    <videoShowcase class="video-showreel-modal" v-model="modalOpen"></videoShowcase>

    <!-- Work Heading -->
    <div class="h-work_heading contain">
      <h1>
        I pour
        my ❤️️ into
        <br />
        <span class="outlined">every</span>
        Design.
      </h1>
      <p>
        Here is a small selection of the case studies showcasing my work that I take great pleasure in.
        <nuxt-link to="/projects" class="underline-magical">Explore more projects👉</nuxt-link>
      </p>
    </div>

    <!-- Work Thumbnails -->

    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/cricbuzz-app-redesign">
            <thumbnail
              thumbnailName="CricBuzz"
              thumbnailDescription="App  Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/elevito">
            <thumbnail
              thumbnailName="Elevito"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/elevito-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/feeding-trends">
            <thumbnail
              thumbnailName="Feeding Trends"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/ft-thumbnail-2.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/bharatrohan">
            <thumbnail
              thumbnailName="BharatRohan"
              thumbnailDescription="Admin, App, Web"
              thumbnail="/bharatrohangif2.gif"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Filming Eye"
              thumbnailDescription="Web, Identity"
              thumbnail="/filming-eye-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/dreamz">
            <thumbnail
              thumbnailName="Dreamz"
              thumbnailDescription="App Design, HF Prototype"
              thumbnail="/dreamz-thumbnail-cyan.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/ft-events">
            <thumbnail
              thumbnailName="FT Events"
              thumbnailDescription="Web, Admin"
              thumbnail="/ft-event-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/thebbdtimes">
            <thumbnail
              thumbnailName="The BBD Times"
              thumbnailDescription="Branding"
              thumbnail="/tbt-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- view more work -->

    <div class="more-about-me">
      <div class="center-h-v">
        <nuxt-link to="/projects">
          <discovermore button-text="view more work" />
        </nuxt-link>
      </div>
    </div>

    <!-- people parallax slide section -->

    <homepeople />

    <!-- <div class="applause-button_container">
      <applause-button style="width: 58px; height: 58px;" color="red" multiclap="true"/>
    </div>-->

    <!-- blog Heading -->

    <div class="h-blog_heading contain">
      <h1 class="no-white-space">
        Hack Things,
        <br />
        <span class="outlined">Solve</span>
        Problems.
        <br />Be Curious.
      </h1>
      <p>I write on things I love. Here are some of my articles.</p>
    </div>

    <BlogSection :blogs="blogs" />

    <!-- <ArticleList :isPaginated="false" :postsPerPage="4" /> -->

    <!-- view more article -->
    <div class="more-about-me">
      <div class="center-h-v">
        <nuxt-link to="/blog">
          <discovermore button-text="view all article" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Parallax from 'vue-parallaxy'
import Discovermore from '~/components/discovermore'
import Homepeople from '~/components/homepeople'
import BlogSection from '~/components/Sections/BlogSection'
import blogsEn from '~/contents/en/blogsEn.js'
import VideoShowcase from '~/components/Modal'
import playbutton from '~/components/playbutton'
export default {
  components: {
    Thumbnail,
    Discovermore,
    Homepeople,
    BlogSection,
    Parallax,
    VideoShowcase,
    playbutton
  },

  async asyncData({ app }) {
    const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs

    async function asyncImport(blogName) {
      const wholeMD = await import(
        `~/contents/${app.i18n.locale}/blog/${blogName}.md`
      )
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res
      }
    })
  },

  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen
    }
  }
  // data() {
  //   return {
  //     card: [
  //       {
  //         thumbnailName: 'Filming Eye',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase9.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase7.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase8.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase9.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase1.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase10.jpg')
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
.h-hero-title {
  white-space: wrap;
  margin-top: 12%;
}

.nametag-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  font-family: circular-book;
  font-size: 16px;
  grid-gap: 10px;
  white-space: nowrap;
  padding-top: 30px;
  overflow: hidden;
  padding-bottom: 2px;
}

.h-sec2-container {
  display: flex;
  width: 70%;
  align-items: center;
  align-content: center;
  margin-left: calc(16% - 45px);
  position: relative;
  margin-top: 100px;
}

.h-sec2-grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  height: auto;
  width: 100%;
}

.h-sec2-grid > .bottom-fit {
  align-items: flex-end;
  font-size: 2em;
  color: #ffeead;
  display: flex;
}

.h-sec2-grid > .middle-fit {
  align-items: center;
  font-size: 2em;
  color: #ffeead;
  display: flex;
}

.h-sec2-grid > .up-fit {
  align-items: baseline;
  font-size: 2em;
  color: #ffeead;
  display: flex;
}

.h-sec2-grid > div > img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media screen and (max-width: 1200px) {
  .h-hero-title {
    margin-top: 15%;
  }

  .h-sec2-container {
    width: 70%;
  }

  .h-sec2-grid {
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media screen and (max-width: 999px) {
  .h-sec2-container {
    width: 77%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 800px) {
  .h-sec2-container {
    width: 83%;
    margin-left: 10%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 600px) {
  .h-sec2-container {
    width: 83%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
@media screen and (max-width: 500px) {
  .h-hero-title {
    margin-top: 100px;
  }

  .h-sec2-container {
    width: 88%;
    margin-left: 7%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
}
@media screen and (max-width: 350px) {
  .h-sec2-container {
    width: 86%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
}

.h-work_heading {
  padding: 120px 0px 40px 0px;
  /* white-space: nowrap; */
}

.h-work_heading p {
  padding: 0px 32% 0px 0px;
  /* white-space: nowrap; */
}

/* showreel */

.video-showreel-modal {
  position: fixed;
  z-index: 1000;
}

.h-showreel_container {
  width: 100%;
  height: 90vh;
}

.h-showreel_container > img {
  width: 100%;
  object-fit: cover;
}

.h-showreel {
  position: relative;
  width: 100%;
  height: 90vh;
  z-index: 2;
  overflow: hidden;
}

.showreel-overlay {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  position: absolute;
  top: 0%;
}

.showreel-button {
  position: relative;
  left: 42%;
}

.showreel-heading {
  position: relative;
  color: white;
  font-size: 90px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  letter-spacing: 4px;
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}

.showreel-sub-heading {
  font-size: 26px;
  position: relative;
  color: white;
  text-align: center;
}

.showreel-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

@media screen and (max-width: 999px) {
  .showreel-heading {
    font-size: 70px;
    line-height: 70px;
  }
}
@media screen and (max-width: 800px) {
  .showreel-heading {
    font-size: 60px;
    line-height: 60px;
  }

  .showreel-button {
    left: 39%;
  }
}
@media screen and (max-width: 500px) {
  .showreel-heading {
    font-size: 52px;
    line-height: 52px;
  }

  .showreel-button {
    left: 35%;
  }
}

/* applause-button_container */
/* https://www.cssscript.com/medium-claps-applause-button/ */

.applause-button_container {
  width: 100%;
  height: 30vh;
  position: relative;
}

/* blog */
.h-blog_heading {
  padding: 40px 0px 40px 0px;
}
</style>
