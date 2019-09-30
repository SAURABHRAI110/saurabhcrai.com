<template>
  <div class="projects-wrapper-top hover-target">
    <div class="projects-wrapper item1">
      <div class="projects-card-wrapper">
        <div class="projects-card"></div>
        <div class="projects-image">
          <img :src="thumbnail" />
        </div>
      </div>
      <div class="projects-content" :style="{ 'color': (color)}">
        <h3 class="type-sub2">{{ thumbnailName }}</h3>
        <p class="type-sub3">{{ thumbnailDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnailName: String,
    thumbnailDescription: String,
    thumbnail: String,
    color: String
  }
}
</script>

<style scoped >
.projects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  background-color: white;
  cursor: url('/cnblack.svg'), auto;
}

.projects-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projects-card-wrapper {
  position: relative;

  border-radius: 0.1rem;
  overflow: hidden;
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
  bottom: 3%;
  display: inline-block;
  z-index: 10;
  overflow: hidden;
  white-space: nowrap;
  opacity: 1;
  transition: all 0.45s cubic-bezier(0.475, 0.425, 0, 0.995);
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

@media screen and (max-width: 800px) {
  .type-sub2[data-v-5e3ebf7e] {
    font-size: 27px;
  }
  .type-sub3[data-v-5e3ebf7e] {
    font-size: 14px;
    line-height: 32px;
  }
}
</style>
