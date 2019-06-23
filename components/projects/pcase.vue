<template>
  <div class="contain">
    <div class="reveal-holder" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
      <h2 class="p-para black50">{{heading}}</h2>
    </div>
    <p
      class="black90"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      data-aos-once="true"
      v-html="para"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    para: String
  }
}
</script>

<style scoped>
p {
  padding-bottom: 50px;
}
</style>
