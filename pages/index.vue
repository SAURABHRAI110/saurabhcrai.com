<template>
  <div>
    <div class="vl1 vl"></div>
    <div class="vl2 vl"></div>
    <div class="vl3 vl"></div>

    <div class="nametag-container contain">
      <div class="h-name" data-aos="fade-up" data-aos-duration="1000">
        Saurabh Rai
      </div>
      <div class="h-j-title" data-aos="fade-up" data-aos-duration="1400">
        UI/UX Designer | Photographer | Artist
      </div>
    </div>

    <div
      class="contain h-hero-title"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <h1>
        <span>Experience</span>
        <br />
        <span class="outlined">Designer</span> At <br />Feeding Trends
      </h1>
    </div>
    <div class="contain">
      <p data-aos="fade-up" data-aos-duration="2500" data-aos-delay="1000">
        This website is my personal space where I'm trying to express my
        creativity through
        <span style="color:#fc3a52;">design, code and writing.</span>
      </p>
    </div>

    <!-- home Grid pics section 2 -->

    <section class="h-sec2-container">
      <div class="h-sec2-grid">
        <div class="bottom-fit">
          <img src="~assets/img/home/1.jpg" />
        </div>
        <div class="bottom-fit">
          <img src="~assets/img/home/2.jpg" />
        </div>
        <div class="bottom-fit">
          <img src="~assets/img/home/3.jpg" />
        </div>
        <div class="bottom-fit">
          <img src="~assets/img/home/4.jpg" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="1600">
          <img src="~assets/img/home/5.jpg" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="1700">
          <img src="~assets/img/home/6.jpg" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="1800">
          <img src="~assets/img/home/7.jpg" />
        </div>
        <div class="middle-fit" data-aos="fade-up" data-aos-duration="1900">
          <img src="~assets/img/home/8.jpg" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="2000">
          <img src="~assets/img/home/9.jpg" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="2100">
          <img src="~assets/img/home/10.jpg" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="2200">
          <img src="~assets/img/home/11.jpg" />
        </div>
        <div class="up-fit" data-aos="fade-up" data-aos-duration="2300">
          <img src="~assets/img/home/12.jpg" />
        </div>
      </div>
    </section>

    <!-- get to know me -->

    <div class="more-about-me">
      <discovermore button-text="get to know me" />
    </div>

    <!-- Work Thumbnails -->

    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <thumbnail
          class="item"
          thumbnail-name="Filming Eye"
          thumbnail-description="Web, Identity"
        />

        <thumbnail
          class="item"
          thumbnail-name="Feeding Trends"
          thumbnail-description="Branding, Identity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Discovermore from '~/components/discovermore'
export default {
  components: {
    Thumbnail,
    Discovermore
  }
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
}

.h-sec2-grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  height: auto;
  width: 100%;
  z-index: 1;
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
</style>
