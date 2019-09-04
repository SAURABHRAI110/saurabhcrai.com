<template>
  <div>
    <div class="w-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hero-svg" src="~assets/svg/w.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain w-h-container">
        <p class="pm w-h-subheading" data-aos="fade-up" data-aos-duration="1000">case studies</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Some of my
          <br />Finest
          <span class="outlined">Work</span>
        </h1>
        <p
          class="pm w-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >
          Here are some of my work from past years. Some were awesome some just good.
          But with time I learned more and more and got a hang of making good works.
          Currently I also code my design.
        </p>
      </div>
    </div>
    <!-- timeline 2019 -->
    <!-- <projecttimeline timeline="2019" /> -->

    <!-- project grid -->
    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/elevito">
            <thumbnail
              thumbnailName="Elevito"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/showcase6d.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="800"
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
              thumbnail="/ft-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="1000"
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
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Filming Eye"
              thumbnailDescription="Web, Identity"
              thumbnail="/showcase1.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
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
              data-aos-delay="0"
              data-aos-once="true"
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
              data-aos-delay="200"
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
              data-aos-delay="0"
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
              data-aos-delay="200"
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
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/awesome-inc">
            <thumbnail
              thumbnailName="Awesome Inc."
              thumbnailDescription="Identity, Print"
              thumbnail="/awesome-inc-thumnail-3.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
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
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/tbt-app">
            <thumbnail
              thumbnailName="TBT App"
              thumbnailDescription="App, Branding"
              thumbnail="/tbt-app-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/prepowl">
            <thumbnail
              thumbnailName="Prepowl"
              thumbnailDescription="Web, Logo"
              thumbnail="/prepowl-thumbnail-blue.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/news-app">
            <thumbnail
              thumbnailName="News App"
              thumbnailDescription="App, Logo"
              thumbnail="/news-app-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/bls">
            <thumbnail
              thumbnailName="Banaras Lit. Society"
              thumbnailDescription="Branding"
              thumbnail="/bls-thumbnail-2.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/hindigiri">
            <thumbnail
              thumbnailName="Hindigiri"
              thumbnailDescription="Branding, Marketing"
              thumbnail="/hindigiri-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/hello-color">
            <thumbnail
              thumbnailName="Hello Color"
              thumbnailDescription="Book Design"
              thumbnail="/hello-colors-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/logofolio">
            <thumbnail
              thumbnailName="Logo Collection"
              thumbnailDescription="logos so far"
              thumbnail="/logofolio-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/utkarsh">
            <thumbnail
              thumbnailName=" Utkarsh"
              thumbnailDescription="Web, Branding, Social"
              thumbnail="/utkarsh-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/my-portfolio-website">
            <thumbnail
              thumbnailName=" My Website "
              thumbnailDescription=" Web design and development"
              thumbnail="/my-website-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="0"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- thumbnail end here -->
    <!-- some more projects links  -->

    <!-- my quote -->

    <div class="my-project-quote">
      <p class="contain p-quote">
        This is no way the end, this is just a start.
        <br />The greatest Project is the one you work on yourself.
      </p>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Projecttimeline from '~/components/projects/projecttimeline'
export default {
  layout: 'projects',
  components: {
    Thumbnail,
    Projecttimeline
  }
}
</script>

<style>
.my-project-quote {
  width: 100%;
  height: 60vh;
  background-color: var(--primary-color);
  padding: 0px 0px 0px 0px;
  position: relative;
}

.my-project-quote p {
  color: white;
  position: relative;
  top: 50%;
}
</style>
