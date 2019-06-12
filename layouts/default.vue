<template>
  <div>
    <Nav />
    <nuxt />
    <div class="margin-neg">
      <Footer />
    </div>
  </div>
</template>
<script>
import Nav from '~/components/nav'
import Footer from '~/components/footer'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
.margin-neg {
  margin-left: -100px;
}
</style>
