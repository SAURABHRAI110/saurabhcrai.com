<template>
  <div class="error-container">
    <div class="contain">
      <img class="o" src="~assets/svg/o.svg" alt="o letter svg" />
      <div class="content">
        <h1 v-if="error.statusCode === 404">
          Oops!
          <br />Page not found
        </h1>

        <h1 v-else>
          Oops!
          <br />An error occurred
        </h1>
        <p v-if="error.statusCode === 404">You must have done something you should not have done</p>
        <p v-else>Man are you high</p>
      </div>

      <div class="to-home">
        <nuxt-link to="/">
          <discovermore class="hover-target" button-text="go to home page" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Discovermore from '~/components/discovermore'
import Menu from '~/components/menu'
export default {
  props: ['error'],
  layout: 'projects',
  components: { Discovermore, Menu } // you can set a custom layout for the error page
}
</script>

<style scoped>
.error-container {
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.contain {
  position: relative;
}
.to-home {
  position: relative;
  padding-top: 100px;
  left: 1%;
}

.error-container .o {
  position: absolute;
  right: 2%;
  top: 30px;
  height: 80vh;
  z-index: -1;
}

.content {
  padding-top: 150px;
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
