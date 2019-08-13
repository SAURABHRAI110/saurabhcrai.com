<template>
  <div>
    <Menu />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from '~/components/menu'
import Footer from '~/components/footer'
export default {
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
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
