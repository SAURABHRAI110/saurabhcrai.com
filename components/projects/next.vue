<template>
  <div class="p-next" title="Next project">
    <img src="~assets/svg/next-icon.svg" alt="next-project" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.p-next {
  padding: 10px 17px 10px 17px;
  transition: border 0.2s cubic-bezier(0.6, 0.7, 0, 1);
  opacity: 0.77;
}

.p-next img {
  width: 100%;
}

.p-next:hover {
  border: solid 1px black;
  opacity: 1;
}
</style>
