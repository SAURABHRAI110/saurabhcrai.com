<template>
  <div class="p-previous" title="Previous project">
    <img src="~assets/svg/previous-icon.svg" alt="previous-project" />
  </div>
</template>

<script>
export default {
  props: {
    previousproject: String
  }
}
</script>

<style scoped>
.p-previous {
  padding: 10px 17px 10px 17px;
  transition: border 0.2s cubic-bezier(0.6, 0.7, 0, 1);
  opacity: 0.77;
}

.p-previous img {
  width: 100%;
}

.p-previous:hover {
  border: solid 1px black;
  opacity: 1;
}
</style>
