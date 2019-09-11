<template>
  <div class="scroll-line" :style="bgcolor">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    bgcolor: String
  }
}
</script>

<style >
.scroll-line {
  position: absolute;
  height: 90px;
  bottom: 5%;
  right: 5%;
  z-index: 10;
  background-color: var(--primary-color);
}

.scroll-line span:first-child {
  position: absolute;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  animation: scrollLine 2s infinite;
  -moz-animation: scrollLine 2s infinite;
  -webkit-animation: scrollLine 2s infinite;
  -o-animation: scrollLine 2s infinite;
  bottom: 20%;
  left: 18%;
  display: block;
  width: 2px;
  height: 90px;
  background-color: inherit;
}

.scroll-line span:nth-of-type(2) {
  position: absolute;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  animation: scrollLine-2 2s infinite;
  -moz-animation: scrollLine-2 2s infinite;
  -webkit-animation: scrollLine-2 2s infinite;
  -o-animation: scrollLine-2 2s infinite;
  bottom: 20%;
  left: 18%;
  display: block;
  width: 2px;
  height: 90px;
  background-color: inherit;
}

@keyframes scrollLine {
  0% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }

  20% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  20.1% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  60% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}

@keyframes scrollLine-2 {
  0% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }

  40% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  80% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  80.1% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
  100% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
  }
}
</style>
