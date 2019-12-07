
<template>
  <transition name="fade">
    <div class="modal" v-show="value">
      <div class="container">
        <div class="close" @click.prevent="close"></div>

        <iframe
          src="https://player.vimeo.com/video/315448246?title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>

        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  </transition>
</template>

    <script>
export default {
  name: 'Modal',
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('input', !this.value)
    }
  }
}
</script>


    <style lang="css" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.7);
}

.container {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 1200px) {
  .container {
    padding: 40px;
  }
}

.close {
  position: absolute;
  right: 49%;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  z-index: 2;
  background-color: black;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: rgb(255, 255, 255);
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

/* component animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>