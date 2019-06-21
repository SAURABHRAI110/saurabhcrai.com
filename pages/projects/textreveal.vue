<template>
  <div class="reveal-holder" data-aos="fade-up" data-aos-duration="1000">
    <div class="reveal-block red right" data-aos="reveal-right"></div>
    <h2 class="info-block-heading black51">{{text}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style>
</style>
