<template>
  <div>
    <div class="menu">
      <Menu />
    </div>
    <nuxt />

    <div class="footer">
      <Footer />
    </div>
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

<style scoped>
.menu {
  position: fixed;
  top: 0px;
  left: 0px;
}

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
