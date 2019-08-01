<template>
  <div>
    <!-- <div class="vl1 vl"></div>
    <div class="vl2 vl"></div>
    <div class="vl3 vl"></div>-->
    <div class="a-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img class="hero-svg" src="~assets/svg/s.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>
    </div>

    <div class="nametag-container contain">
      <div class="h-name" data-aos="fade-up" data-aos-duration="900">
        <nuxt-link to="/about" style="text-decoration: none;">
          <span class="underline-magical">Saurabh Rai</span>
        </nuxt-link>
      </div>
      <div
        class="h-j-title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >UI/UX Designer | Photographer | Artist</div>
    </div>

    <div
      class="contain h-hero-title"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="400"
    >
      <h1>
        <span>Experience</span>
        <br />
        <span class="outlined">Designer</span> At
        <br />Feeding Trends
      </h1>
    </div>
    <div class="contain">
      <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="600">
        This website is my personal space where I'm trying to express my
        creativity through
        <span
          style="color:#fc3a52;"
        >
          design,
          <a
            href="https://github.com/SAURABHRAI110"
            target="_blank"
            rel="noopener"
            title="Github(new tab)"
          >
            <span class="underline-magical">code</span>
          </a> and writing.
        </span>
      </p>
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
          <img id="zoom-default" src="~assets/img/home/2.jpg?webp" type="image/webp" />
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
          <img id="zoom-default" src="~assets/img/home/4.jpg?webp" type="image/webp" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="600">
          <img id="zoom-default" src="~assets/img/home/5.jpg?webp" type="image/webp" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <img id="zoom-default" src="~assets/img/home/6.jpg?webp" type="image/webp" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <img id="zoom-default" src="~assets/img/home/7.jpg?webp" type="image/webp" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <img id="zoom-default" src="~assets/img/home/8.jpg?webp" type="image/webp" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="600">
          <img id="zoom-default" src="~assets/img/home/9.jpg?webp" type="image/webp" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <img id="zoom-default" src="~assets/img/home/10.jpg?webp" type="image/webp" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <img id="zoom-default" src="~assets/img/home/11.jpg?webp" type="image/webp" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <img id="zoom-default" src="~assets/img/home/12.jpg?webp" type="image/webp" />
        </div>
      </div>
    </section>

    <!-- get to know me -->

    <div class="more-about-me">
      <nuxt-link to="/about">
        <discovermore class="hover-target" button-text="get to know me" />
      </nuxt-link>
    </div>
    <!-- Showcase video and parallax -->
    <div class="h-showreel">
      <div class="showreel-bg">
        <img
          src="~/assets/img/showreel-bg.jpg"
          srcset="~/assets/img/showreel-bg.jpg?sqip"
          alt="elevito wireframe"
        />
      </div>
      <div class="showreel-overlay"></div>
      <div class="center-h-v">
        <h1
          class="showreel-heading"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >GET INSPIRED</h1>
        <p
          class="showreel-sub-heading"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >Watch Showreel</p>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >
          <span class="showreel-button">
            <svg
              id="play"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              height="70px"
              width="70px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
            >
              <path
                class="stroke-solid"
                fill="none"
                stroke="#fff"
                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
          C97.3,23.7,75.7,2.3,49.9,2.5"
              />
              <path
                class="stroke-dotted"
                fill="none"
                stroke="#fff"
                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
          C97.3,23.7,75.7,2.3,49.9,2.5"
              />
              <path
                class="icon"
                fill="#fff"
                d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <!-- Work Heading -->
    <div class="h-work_heading contain">
      <h1>
        A Small
        <br />Selection of my
        <br />
        <span class="outlined">Work</span>
        I Enjoy.
      </h1>
      <p>
        Some of my selceted work or I say case study so that you
        <br />can understand my process and how I work.
      </p>
    </div>

    <!-- <div class="contain h-work_heading">
      <h2>Featured Work</h2>
    </div>-->

    <!-- Work Thumbnails -->
    <!-- v-rellax="{ speed: 4, center: 0.5  }" -->

    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Filming Eye"
              thumbnailDescription="Web, Identity"
              thumbnail="/showcase1.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/dear-zindagi">
            <thumbnail
              thumbnailName="Dear Zindagi"
              thumbnailDescription="Brochure, Identity"
              thumbnail="/showcase2.webp"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/mr-irritating">
            <thumbnail
              thumbnailName="Mr. Irritating"
              thumbnailDescription="Print, Social Media"
              thumbnail="/showcase3.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/r3">
            <thumbnail
              thumbnailName="R3"
              thumbnailDescription="Social Media, logo"
              thumbnail="/showcase4a.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/awesome-inc">
            <thumbnail
              thumbnailName="Awesome Inc."
              thumbnailDescription="Identity, Print"
              thumbnail="/showcase5b.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/elevito">
            <thumbnail
              thumbnailName="Elevito"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/showcase6d.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- view more work -->

    <div class="more-about-me">
      <nuxt-link to="/projects">
        <discovermore button-text="view more work" />
      </nuxt-link>
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
      <p>I see myself as a kid who is both a hacker and designer. One of my main skills is to ablility to quickly learn new things if needed. I never stop learning and I always see a place for improvements. It drives everything I do.</p>
    </div>

    <!-- Blog Article -->

    <blogarticle
      articleCategory="Coding Stuff"
      articleDate="Jan 12, 2019"
      articleHeading="The Good, the bad, my 4 years of College Life. The things of lifetime"
      articlePara="The lessons and lesson learned- a journey for little things or let me rephrase it A journey of that me to this me for the better."
      articleLink="https://medium.com/p/400360751916/edit"
      articleThumbnail="/blog1.jpg"
    />
    <blogarticle
      articleCategory="Coding Stuff"
      articleDate="Jan 12, 2019"
      articleHeading="The Good, the bad, my 4 years of College Life. The things of lifetime"
      articlePara="The lessons and lesson learned- a journey for little things or let me rephrase it A journey of that me to this me for the better."
      articleLink="https://medium.com/p/400360751916/edit"
      articleThumbnail="/blog1.jpg"
    />

    <!-- view more article -->
    <div class="more-about-me">
      <nuxt-link to="/blog">
        <discovermore button-text="view all article" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Discovermore from '~/components/discovermore'
import Homepeople from '~/components/homepeople'
import Blogarticle from '~/components/blogarticle'

export default {
  components: {
    Thumbnail,
    Discovermore,
    Homepeople,
    Blogarticle
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
  white-space: nowrap;
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
  padding: 40px 0px 40px 0px;
  /* white-space: nowrap; */
}

/* showreel */

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

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.stroke-dotted {
  opacity: 0;
  stroke-dasharray: 4, 5;
  stroke-width: 1px;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: spin 4s infinite linear;
  animation: spin 4s infinite linear;
  transition: opacity 1s ease, stroke-width 1s ease;
}

.stroke-solid {
  stroke-dashoffset: 0;
  stroke-dasharray: 300;
  stroke-width: 2px;
  transition: stroke-dashoffset 1s ease, opacity 1s ease;
}

.icon {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  transition: -webkit-transform 200ms ease-out;
  transition: transform 200ms ease-out;
  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
}

#play:hover .stroke-dotted {
  stroke-width: 3px;
  opacity: 1;
}

#play:hover .stroke-solid {
  opacity: 0;
  stroke-dashoffset: 300;
}

#play:hover .icon {
  -webkit-transform: scale(1.05);
  transform: scale(1.2);
}

#play {
  cursor: pointer;
  /* position: absolute;
  top: 50%;
  left: 12%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%); */
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
