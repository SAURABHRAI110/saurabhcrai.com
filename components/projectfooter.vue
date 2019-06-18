<template>
  <div class="projects-footer-container">
    <div class="project-previous">
      <div class="overlay"></div>
      <span class="p-text center-h-v">
        <h2>Previous Project</h2>
      </span>
      <img src="/showcase1.jpg" alt>
    </div>
    <div class="project-next">
      <div class="overlay"></div>
      <span class="p-text center-h-v">
        <h2>Next Project</h2>
      </span>
      <img src="/showcase8.jpg" alt>
    </div>
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
  background-color: #fff;
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

h2 {
  color: white;
}

.p-text {
  position: absolute;
  top: 20%;
  transition: all 0.85s cubic-bezier(0.19, 1, 0.22, 1);
}

.p-text:hover {
  letter-spacing: 3px;
}

img {
  width: 100%;
  object-fit: cover;
  height: auto;
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
