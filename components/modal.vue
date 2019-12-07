
<template>
  <transition name="fade">
    <div class="modal" v-show="value">
      <div class="container">
        <div class="close" @click.prevent="close"></div>
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
  height: calc(100vh - 40px);
  width: calc(100% - 40px);
  position: fixed;
  z-index: 10000;
  top: 0px;
  left: 0px;
  margin: 20px;
  background-color: blueviolet;
}

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
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