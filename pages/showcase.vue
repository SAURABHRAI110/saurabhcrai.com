<template>
  <div>
    <!-- Work Thumbnails -->
    <!-- v-rellax="{ speed: 4, center: 0.5  }" -->
    <div class="w-hero_container">
      <img src="~assets/svg/circle.svg" alt="circle">
      <img src="~assets/svg/w.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }">>
      <div class="contain p-h-container">
        <p class="pm p-h-subheading">case studies</p>
        <h1>
          Some of My
          <br>Finest
          <span class="outlined">Work</span>
        </h1>
      </div>
    </div>
    <!-- timeline 2019 -->
    <projecttimeline timeline="2019"/>

    <!-- project grid -->
    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Filming Eye"
              thumbnailDescription="Web, Identity"
              thumbnail="/showcase1.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
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
              thumbnail="/showcase2.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Mr. Irritating"
              thumbnailDescription="Print, Social Media"
              thumbnail="/showcase3.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
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
              thumbnail="/showcase4a.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/awesome-inc">
            <thumbnail
              thumbnailName="Awesome Inc."
              thumbnailDescription="Branding"
              thumbnail="/showcase5a.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
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
              thumbnail="/showcase6d.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
    <projecttimeline timeline="2019"/>
    <!-- project grid -->
    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/feeding-trends">
            <thumbnail
              thumbnailName="Feeding Trends"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/showcase7a.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
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
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Mr. Irritating"
              thumbnailDescription="Print, Social Media"
              thumbnail="/showcase3.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
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
              thumbnail="/showcase4.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/awesome-inc">
            <thumbnail
              thumbnailName="Awesome Inc."
              thumbnailDescription="Branding"
              thumbnail="/showcase5.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
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
              thumbnail="/showcase6.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Projecttimeline from '~/components/projects/projecttimeline'
export default {
  components: {
    Thumbnail,
    Projecttimeline
  }
}
</script>

<style></style>
