<template>
  <div class="projects-footer-container">
    <nuxt-link to="/projects/elevito">
      <div class="project-previous">
        <div class="overlay"></div>
        <span class="p-text">
          <h3>Previous Project</h3>
        </span>
        <span class="np_details">
          <p class="np_heading">Feeding Trends</p>
          <p class="np_sub-heading">Branding, Web Design</p>
        </span>
        <img src="/showcase1.jpg" alt />
      </div>
    </nuxt-link>
    <nuxt-link to>
      <div class="project-next">
        <div class="overlay"></div>
        <span class="p-text">
          <h3>Next Project</h3>
        </span>

        <span class="np_details">
          <p class="np_heading">Feeding Trends</p>
          <p class="np_sub-heading">Branding, Web Design</p>
        </span>
        <img src="/showcase8.jpg" alt />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.projects-footer-container {
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: aqua;
  transition: height 0.95s cubic-bezier(0.475, 0.425, 0, 0.995);
  position: relative;
}

.projects-footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 2;
  background-color: #f6ecdd;
  display: block;
  will-change: transform;
  -webkit-transition: -webkit-transform 0.65s;
  transition: -webkit-transform 0.65s;
  transition: transform 0.65s;
  transition: transform 0.65s, -webkit-transform 0.65s;
  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.projects-footer-container:hover:before {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.project-previous {
  /* cursor: url('/cursor-previous.png'), auto; */
  cursor: url('/cp.svg'), auto;
  position: relative;
}

.project-next {
  /* background-color: rgb(61, 61, 61); */
  /* cursor: url('/cursor-next.png'), auto; */
  cursor: url('/cn.svg'), auto;
  position: relative;
}

h3 {
  color: white;
}

img {
  width: 100%;
  object-fit: cover;
  height: auto;
  height: 80vh;
}

.overlay {
  background-color: black;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
}
</style>
