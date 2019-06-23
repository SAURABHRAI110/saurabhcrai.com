

<template>
  <div class="timeline">
    <h3>{{timeline}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    timeline: String
  }
}
</script>

<style scoped>
.timeline {
  width: 77%;
  position: relative;
  opacity: 0.7;
  margin: 70px 0px 40px calc(13% - 50px);
}
.timeline > h3 {
  left: 0%;
  font-size: 20px;
}

h3::after {
  content: '';
  width: 20%;
  border-bottom: solid 1px #000;
  position: absolute;
  margin-left: 50px;
  left: 0;
  top: 50%;
  z-index: 1;
}
</style>
