<template>
  <section>
    <div class="p-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <img class="circle" src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <!-- <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hero-svg" src="~assets/svg/w.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div> -->

      <div class="contain p-h-container">
        <p class="pm w-h-subheading" data-aos="fade-up" data-aos-duration="1000">Photography & Arts</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Sometime <br> I just pick up my <span class="outlined">Camera or Brush</span>
          and Let It Flow
          
        </h1>
        <p
          class="pm w-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >
        Designing with a mouse, capturing with a lens.
        A UI/UX designer by day, an artist and photographer when inspiration strikes.
        </p>
      </div>
      <div class="p-hero-grid-container">
        <div class="p-hero-grid">
          <img src="~assets/photography/p-hero-images.png" alt=""></div>
      </div>
    </div>
    <div class="gallery-container">
      <div class="photo-grid">
        <img class="item" src="~assets/photography/p-2.jpg" />
        <img class="item" src="~assets/photography/p-3.jpg" />
        <img class="item" src="~assets/photography/p-4.jpg" />
        <img class="item" src="~assets/photography/p-5.jpg" />
        <img class="item" src="~assets/photography/p-6.jpg" />
        <img class="item" src="~assets/photography/p-7.jpg" />
        <img class="item" src="~assets/photography/p-8.jpg" />
        <img class="item" src="~assets/photography/p-9.jpg" />
        <img class="item" src="~assets/photography/p-10.jpg" />
        <img class="item" src="~assets/photography/p-11.jpg" />
        <img class="item" src="~assets/photography/p-12.jpg" />
        <img class="item" src="~assets/photography/p-13.jpg" />
        <img class="item" src="~assets/photography/p-14.jpg" />
        <img class="item" src="~assets/photography/p-15.jpg" />
        <img class="item" src="~assets/photography/p-16.jpg" />
        <img class="item" src="~assets/photography/p-17.jpg" />
        <img class="item" src="~assets/photography/p-18.jpg" />
        <img class="item" src="~assets/photography/p-19.jpg" />
        <img class="item" src="~assets/photography/p-20.jpg" />
        <img class="item" src="~assets/photography/p-22.jpg" />
        <img class="item" src="~assets/photography/p-23.jpg" />
        <img class="item" src="~assets/photography/p-24.jpg" />
        <img class="item" src="~assets/photography/p-25.jpg" />
        <img class="item" src="~assets/photography/p-26.jpg" />
        <img class="item" src="~assets/photography/p-27.jpg" />
        <img class="item" src="~assets/photography/p-28.jpg" />
        <img class="item" src="~assets/photography/p-29.jpg" />
        <img class="item" src="~assets/photography/p-30.jpg" />
        <img class="item" src="~assets/photography/p-31.jpg" />
        <img class="item" src="~assets/photography/p-32.jpg" />
        <img class="item" src="~assets/photography/p-33.jpg" />
        <img class="item" src="~assets/photography/p-34.jpg" />
        <img class="item" src="~assets/photography/p-35.jpg" />
        <img class="item" src="~assets/photography/p-36.jpg" />
        <img class="item" src="~assets/photography/p-37.jpg" />
        <img class="item" src="~assets/photography/p-38.jpg" />
        <img class="item" src="~assets/photography/p-39.jpg" />
        <img class="item" src="~assets/photography/p-40.jpg" />
        <img class="item" src="~assets/photography/p-41.jpg" />
        <img class="item" src="~assets/photography/p-42.jpg" />
        <img class="item" src="~assets/photography/p-43.jpg" />
        <img class="item" src="~assets/photography/p-44.jpg" />
        <img class="item" src="~assets/photography/p-45.jpg" />
        <img class="item" src="~assets/photography/p-46.jpg" />
        <img class="item" src="~assets/photography/p-47.jpg" />
        <img class="item" src="~assets/photography/p-48.jpg" />
        <img class="item" src="~assets/photography/p-49.jpg" />
        <img class="item" src="~assets/photography/p-50.jpg" />
        <img class="item" src="~assets/photography/p-51.jpg" />
        <img class="item" src="~assets/photography/p-52.jpg" />
        <img class="item" src="~assets/photography/p-53.jpg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.w-hero-container {
  width: 100%;
  position: relative;
  height: 85vh;
}

.p-hero-container img {
  object-fit: cover;
  width: 100%;
  height: 85vh;
  position: relative;
  background-color: rgb(209, 209, 209);
  object-position: 50% 50%;
  z-index: -1;
}

section {
  position: relative;
}
.gallery-container {
  /* background-color:white; */
}

.photo-grid {
  column-count: 3;
  line-height: 0;
  padding: 10%;
  column-gap: 20px;

}

.item {
  width: 100% !important;
  height: auto !important;
  padding-top: 20px;
  
}

@media screen and (max-width: 600px) {
  .photo-grid {
    column-count: 2;
  }
}
</style>

