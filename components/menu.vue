<template>
  <div class="nav-container">
    <Logo />
  </div>
</template>

<script>
import Logo from '~/components/logo'
export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
/* .nav-container:hover {
  width: 90%;
} */

@media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 65px;
  }
}
</style>
