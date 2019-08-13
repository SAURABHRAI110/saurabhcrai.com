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
          >People</span>,
          <span class="underline-magical">Psychology</span>,
          <span class="underline-magical">UX</span> and
          <span class="underline-magical">Development.</span>
        </p>
      </div>
    </div>

    <ArticleList :isPaginated="true" :postsPerPage="10" />
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList'
export default {
  layout: 'blog',
  components: {
    ArticleList
  }
}
</script>

<style scoped>
.preview-image {
  width: 12vw;
}

.article-grid-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.projects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 2000px;

  background-color: white;
}

.projects-image > img {
  width: 600px;
  height: 100%;
  object-fit: cover;
}

.projects-card-wrapper {
  position: relative;

  border-radius: 0.1rem;
  overflow: hidden;
  cursor: url('/cnblack.svg'), auto;
}

.projects-image {
  width: 100%;
  height: 100%;
  transform: scale(1.09);
  transform-origin: center;
  transition: transform 1.25s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.projects-card-wrapper {
  position: relative;
  transition: transform 0.95s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.projects-content {
  position: absolute;
  right: -4%;
  text-align: right;
  bottom: 9%;
  display: inline-block;
  z-index: 10;
  overflow: hidden;
  white-space: nowrap;
  opacity: 1;
  transition: all 0.45s cubic-bezier(0.475, 0.425, 0, 0.995);
  color: rgb(31, 31, 31);
}

.projects-wrapper-top {
  transition: all 1s;
}
.projects-wrapper-top:hover .projects-content {
  right: -2%;
}

.projects-content:active {
  color: aquamarine;
}

.type-sub2 {
  font-weight: 700;
  font-size: 32px;
  /* line-height: 70px; */
  letter-spacing: 0.02em;
  margin-bottom: 0px;
}

.type-sub3 {
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.05em;
  margin-top: 1px;
}

/* animate */
.projects-wrapper-top:hover .projects-card-wrapper {
  transition-delay: 100ms;
  transform: scale(0.95) rotateY(-9deg);
}

.projects-wrapper-top:hover .projects-card-wrapper .projects-image {
  transition-delay: 200ms;
  transform: scale(1);
}
</style>