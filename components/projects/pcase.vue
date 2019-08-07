<template>
  <div class="contain">
    <div class="reveal-holder" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div
        :class="theme"
        class="reveal-block red right"
        data-aos="reveal-right"
        data-aos-once="true"
      ></div>
      <h2 class="p-para black50">{{heading}}</h2>
    </div>
    <!-- reveal-block red right" data-aos="reveal-right" data-aos-once="true" -->
    <p
      class="black90"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-once="true"
      v-html="para"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    para: String,
    theme: String
  }
}
</script>

<style scoped>
p {
  padding-bottom: 50px;
}

h2 {
  margin: 10px auto;
}

.contain {
  margin-top: 50px;
}

.p-para:before {
  content: '';
  border-bottom: 4px solid #919191;
  position: absolute;
  bottom: 5px;
  width: 50px;
  z-index: -1;
  opacity: 0.3;
}

@media screen and (max-width: 999px) {
  .p-para:before {
    border-bottom: 4px solid #919191;
    width: 30px;
    z-index: -1;
    opacity: 0.3;
  }
}
</style>


