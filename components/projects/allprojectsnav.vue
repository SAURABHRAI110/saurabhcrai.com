<template>
  <nuxt-link to="/projects">
    <div class="p-all-nav">
      <div class="p-nav-icon" title="All projects">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style scoped>
.p-all-nav {
  top: 26%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.p-nav-icon {
  width: 35px;
  height: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;
  transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
  margin: 26px;
}

.p-nav-icon > div {
  background-color: rgb(133, 133, 133);
}

.p-all-nav:hover > .p-nav-icon {
  width: 45px;
  height: 45px;
  grid-gap: 7px;
}

.p-all-nav:hover > .p-nav-icon > div {
  background-color: rgb(255, 255, 255);
}
</style>
