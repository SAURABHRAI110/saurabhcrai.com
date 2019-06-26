<template>
  <div>
    <!-- <Menu /> -->
    <Nav/>
    <nuxt/>

    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Nav from '~/components/nav'
// import Menu from '~/components/menu'
import Footer from '~/components/footer'
export default {
  components: {
    Footer,
    Nav
  }
}
</script>

<style>
.footer,
.menu {
  margin-left: -100px;
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
