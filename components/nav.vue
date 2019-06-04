<template>
  <div class="nav-container">
    <logo />
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="showcase">Showcase</nuxt-link>
      </li>
      <li>
        <nuxt-link to="people">People</nuxt-link>
      </li>
      <li>
        <nuxt-link to="blog">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="about">About</nuxt-link>
      </li>
    </ul>
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

<style>
.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding-left: 10px;
  padding-top: 200px;
}
</style>
