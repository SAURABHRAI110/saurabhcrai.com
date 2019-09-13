<template>
  <section>
    <div class="p-hero-container">
      <img
        src="~assets/photography/p-1.jpg"
        alt="silhoutte, sunset, sunrise"
        column-width="#p-c-width"
      />
    </div>

    <div class="gallery-container">
      <div class="photo-grid">
        <img class="item" src="~assets/photography/p-2.jpg" alt />
        <img class="item" src="~assets/photography/p-3.jpg" alt />
        <img class="item" src="~assets/photography/p-4.jpg" alt />
        <img class="item" src="~assets/photography/p-5.jpg" alt />
        <img class="item" src="~assets/photography/p-6.jpg" alt />
        <img class="item" src="~assets/photography/p-7.jpg" alt />
        <img class="item" src="~assets/photography/p-8.jpg" alt />
        <img class="item" src="~assets/photography/p-9.jpg" alt />
        <img class="item" src="~assets/photography/p-10.jpg" alt />
        <img class="item" src="~assets/photography/p-11.jpg" alt />
        <img class="item" src="~assets/photography/p-12.jpg" alt />
        <img class="item" src="~assets/photography/p-13.jpg" alt />
        <img class="item" src="~assets/photography/p-14.jpg" alt />
        <img class="item" src="~assets/photography/p-15.jpg" alt />
        <img class="item" src="~assets/photography/p-16.jpg" alt />
        <img class="item" src="~assets/photography/p-17.jpg" alt />
        <img class="item" src="~assets/photography/p-18.jpg" alt />
        <img class="item" src="~assets/photography/p-19.jpg" alt />
        <img class="item" src="~assets/photography/p-20.jpg" alt />
        <img class="item" src="~assets/photography/p-21.jpg" alt />
        <img class="item" src="~assets/photography/p-22.jpg" alt />
        <img class="item" src="~assets/photography/p-23.jpg" alt />
        <img class="item" src="~assets/photography/p-24.jpg" alt />
        <img class="item" src="~assets/photography/p-25.jpg" alt />
        <img class="item" src="~assets/photography/p-26.jpg" alt />
        <img class="item" src="~assets/photography/p-27.jpg" alt />
        <img class="item" src="~assets/photography/p-28.jpg" alt />
        <img class="item" src="~assets/photography/p-29.jpg" alt />
        <img class="item" src="~assets/photography/p-30.jpg" alt />
        <img class="item" src="~assets/photography/p-31.jpg" alt />
        <img class="item" src="~assets/photography/p-32.jpg" alt />
        <img class="item" src="~assets/photography/p-33.jpg" alt />
        <img class="item" src="~assets/photography/p-34.jpg" alt />
        <img class="item" src="~assets/photography/p-35.jpg" alt />
        <img class="item" src="~assets/photography/p-36.jpg" alt />
        <img class="item" src="~assets/photography/p-37.jpg" alt />
        <img class="item" src="~assets/photography/p-38.jpg" alt />
        <img class="item" src="~assets/photography/p-39.jpg" alt />
        <img class="item" src="~assets/photography/p-40.jpg" alt />
        <img class="item" src="~assets/photography/p-41.jpg" alt />
        <img class="item" src="~assets/photography/p-42.jpg" alt />
        <img class="item" src="~assets/photography/p-43.jpg" alt />
        <img class="item" src="~assets/photography/p-44.jpg" alt />
        <img class="item" src="~assets/photography/p-45.jpg" alt />
        <img class="item" src="~assets/photography/p-46.jpg" alt />
        <img class="item" src="~assets/photography/p-47.jpg" alt />
        <img class="item" src="~assets/photography/p-48.jpg" alt />
        <img class="item" src="~assets/photography/p-49.jpg" alt />
        <img class="item" src="~assets/photography/p-50.jpg" alt />
        <img class="item" src="~assets/photography/p-51.jpg" alt />
        <img class="item" src="~assets/photography/p-52.jpg" alt />
        <img class="item" src="~assets/photography/p-53.jpg" alt />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.p-hero-container {
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
  background-color: black;
}

.photo-grid {
  column-count: 2;
  column-gap: 0px;
  line-height: 0;
}

.item {
  width: 100% !important;
  height: auto !important;
}

@media screen and (max-width: 600px) {
  .photo-grid {
    column-count: 1;
  }
}
</style>

