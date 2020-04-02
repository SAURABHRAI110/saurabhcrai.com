<template>
  <animation name="fade">
    <div v-if="show" class="preloader">
      <div class="logo"></div>
      <p>Saurabh Chandra Rai</p>
    </div>
  </animation>
</template>

<script>
export default {
  name: 'preloader',
  data() {
    return {
      show: true
    }
  },
  mounted() {
    this.showToggle()
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.preloader {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0px;
  left: 0px;
  background-color: var(--primary-color);
}

.preloader .logo {
  width: 12.5rem;
  height: 12.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-active,
.fade-leave-active .logo {
  animation-name: scaleOut;
  animation-duration: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: scale(1);
  animation-duration: 1s;
}
</style>
