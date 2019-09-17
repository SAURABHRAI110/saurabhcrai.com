<template>
  <section>
    <div class="p-hero-container">
      <img src="~assets/photography/p-1.jpg" alt="silhoutte, sunset, sunrise" />
    </div>
    <div class="gallery-container">
      <div class="photo-grid">
        <img class="item" src="~assets/photography/p-2.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-3.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-4.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-5.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-6.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-7.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-8.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-9.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-10.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-11.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-12.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-13.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-14.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-15.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-16.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-17.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-18.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-19.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-20.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-21.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-22.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-23.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-24.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-25.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-26.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-27.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-28.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-29.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-30.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-31.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-32.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-33.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-34.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-35.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-36.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-37.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-38.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-39.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-40.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-41.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-42.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-43.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-44.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-45.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-46.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-47.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-48.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-49.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-50.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-51.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-52.jpg?webp" alt />
        <img class="item" src="~assets/photography/p-53.jpg?webp" alt />
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

