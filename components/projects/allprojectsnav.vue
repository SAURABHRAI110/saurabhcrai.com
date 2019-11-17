<template>
  <nuxt-link to="/projects">
    <div class="p-all-nav" title="to all projects">
      <div class="p-nav-icon">
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
  transition: border 1s cubic-bezier(0.19, 1, 0.22, 1);
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

.p-all-nav:hover {
  border: solid 1px white;
}
.p-all-nav:hover > .p-nav-icon > div {
  background-color: rgb(255, 255, 255);
}

@media screen and (max-width: 600px) {
  .p-all-nav {
    top: 51%;
  }

  .np_heading {
    font-size: 22px;
    margin-bottom: 6px;
  }
}
</style>
