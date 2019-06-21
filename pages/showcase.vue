<template>
  <div>
    <!-- Work Thumbnails -->
    <!-- v-rellax="{ speed: 4, center: 0.5  }" -->
    <div class="w-hero_container"></div>

    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase1.jpg"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
            data-aos-delay="0"
          />
        </nuxt-link>
        <nuxt-link to="/projects/dear-zindagi">
          <thumbnail
            thumbnailName="Dear Zindagi"
            thumbnailDescription="Brochure, Identity"
            thumbnail="/showcase2.jpg"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          />
        </nuxt-link>
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
        <nuxt-link to="/projects/awesome-inc">
          <thumbnail
            thumbnailName="Awesome Inc."
            thumbnailDescription="Branding"
            thumbnail="/showcase5.jpg"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
            data-aos-delay="0"
          />
        </nuxt-link>
        <nuxt-link to="/projects/elevito">
          <thumbnail
            thumbnailName="Elevito"
            thumbnailDescription="Web, Branding, Print"
            thumbnail="/showcase6.jpg"
            data-aos="zoom-out-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
export default {
  components: {
    Thumbnail
  }
}
</script>

<style></style>
