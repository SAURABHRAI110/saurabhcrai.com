<template>
  <div>
    <!-- <Menu/> -->
    <Nav/>
    <nuxt/>

    <!-- <div class="footer">
      <Footer/>
    </div>-->
  </div>
</template>
<script>
import Nav from '~/components/nav'
// import Menu from '~/components/menu'
// import Footer from '~/components/footer'
export default {
  components: {
    Nav
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
</style>
