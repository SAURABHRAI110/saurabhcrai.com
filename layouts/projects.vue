<template>
  <div>
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import Menu from '~/components/menu'
import mediumZoom from 'medium-zoom'
export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
.footer,
.menu {
  margin-left: -100px;
}

@media screen and (max-width: 999px) {
  .footer,
  .menu {
    margin-left: 0px;
  }
}

.page-enter-active {
  transition: all 0.25s ease-out;
}

.page-leave-active {
  transition: all 0.5s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
