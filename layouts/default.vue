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
</style>
