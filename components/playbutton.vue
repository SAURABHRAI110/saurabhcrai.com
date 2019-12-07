<template>
  <span class="showreel-button">
    <svg
      id="play"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height="70px"
      width="70px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <path
        class="stroke-solid"
        fill="none"
        stroke="#fff"
        d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
          C97.3,23.7,75.7,2.3,49.9,2.5"
      />
      <path
        class="stroke-dotted"
        fill="none"
        stroke="#fff"
        d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
          C97.3,23.7,75.7,2.3,49.9,2.5"
      />
      <path
        class="icon"
        fill="#fff"
        d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
      />
    </svg>
  </span>
</template>

<script>
export default {}
</script>

<style>
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.stroke-dotted {
  opacity: 0;
  stroke-dasharray: 4, 5;
  stroke-width: 1px;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: spin 4s infinite linear;
  animation: spin 4s infinite linear;
  transition: opacity 1s ease, stroke-width 1s ease;
}

.stroke-solid {
  stroke-dashoffset: 0;
  stroke-dasharray: 300;
  stroke-width: 2px;
  transition: stroke-dashoffset 1s ease, opacity 1s ease;
}

.icon {
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  transition: -webkit-transform 200ms ease-out;
  transition: transform 200ms ease-out;
  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
}

#play:hover .stroke-dotted {
  stroke-width: 3px;
  opacity: 1;
}

#play:hover .stroke-solid {
  opacity: 0;
  stroke-dashoffset: 300;
}

#play:hover .icon {
  -webkit-transform: scale(1.05);
  transform: scale(1.2);
}

#play {
  cursor: pointer;
  /* position: absolute;
  top: 50%;
  left: 12%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%); */
}
</style>