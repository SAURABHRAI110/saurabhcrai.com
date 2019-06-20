<template>
  <div>
    <!-- Work Thumbnails -->
    <!-- v-rellax="{ speed: 4, center: 0.5  }" -->

    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase7.jpg"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="0"
          />
        </nuxt-link>
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase11.jpg"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          />
        </nuxt-link>
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase8.jpg"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="0"
          />
        </nuxt-link>
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase9.jpg"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          />
        </nuxt-link>
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase1.jpg"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="0"
          />
        </nuxt-link>
        <nuxt-link to="/projects/filmingeye">
          <thumbnail
            thumbnailName="Filming Eye"
            thumbnailDescription="Web, Identity"
            thumbnail="/showcase11.jpg"
            data-aos="fade-up"
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
