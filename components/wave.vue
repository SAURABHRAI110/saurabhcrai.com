<template>
  <div class="background-lines">
    <canvas id="canv"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    var c = document.getElementById('canv')
    var $ = c.getContext('2d')

    var w = (c.width = window.innerWidth)
    var h = (c.height = window.innerHeight)

    var intLines = 15
    var draw = function(a, b, t) {
      $.lineWidth = 0.2
      //background color
      $.fillStyle = 'white'
      $.fillRect(0, 0, w, h)
      //i sets the number of lines
      for (var i = 0; i < intLines; i++) {
        $.strokeStyle = '#B1B1B1'
        $.beginPath()
        $.moveTo(-0, h / 2)
        for (var j = 0; j < w; j += 10) {
          $.lineTo(
            60 * Math.sin(i / 7) + j + 0.008 * j * j,
            Math.floor(
              h / 1.7 +
                (j / 3) * Math.sin(j / 50 - t / 50 - i / 118) +
                i * 0.9 * Math.sin(j / 25 - (i + t) / 65)
            )
          )
        }
        $.stroke()
      }
    }

    var t = 0
    var run = function() {
      //note the self-calling function via callback window.requestAnimationFrame
      //window.requestAnimationFrame(run);
      t += 0.5
      draw(33, 52 * Math.sin(t / 2400), t)
      // txt();
    }
  }
}
</script>

<style>
</style>
