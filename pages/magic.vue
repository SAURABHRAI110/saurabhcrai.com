<template>
  <div class="contain">
    <div class="magic">
      <div class="square" id="pin1"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    // wait for document ready
    // build scene
    var controller = new ScrollMagic.Controller()
    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger1',
      duration: 300
    })
      .setPin('#pin1')
      .addIndicators({ name: '1 (duration: 300)' }) // add indicators (requires plugin)
      .addTo(controller)
  }
}
</script>

<style>
</style>
