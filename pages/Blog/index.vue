<template>
  <div class="blog-page">
    <div class="b-hero-container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hero-svg" src="~assets/svg/b.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain b-heading-container">
        <p class="pm b-h-subheading" data-aos="fade-up" data-aos-duration="1000">My Blog</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Hack Things
          <br />Solve Problems
          <br />
          <span class="outlined">Be Curious.</span>
        </h1>
        <p
          class="pm b-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >
          When I am not designing or coding, I read. I read a lot and write them on medium and some of them make it here
          on my website blog. I write about
          <span
            class="underline-magical"
          >People, Psychology, UX and Development.</span>
        </p>
      </div>
    </div>
    <div class="article-grid-container">
      <div class="article-grid">
        <ArticleList :isPaginated="true" :postsPerPage="10" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList'
export default {
  components: {
    ArticleList
  }
}
</script>

<style>
.preview-image {
  width: 12vw;
}
</style>