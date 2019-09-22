<template>
  <div class="live-link_container">
    <div class="live-link">
      <a :href="link" target="_blank">{{text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    text: String
  }
}
</script>

<style>
/* live link  */

.live-link_container {
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: var(--secondary-color);
}

.live-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2555;
  cursor: pointer;
}

.live-link a {
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  padding-right: 110px;
  display: block;
  position: relative;
}

.live-link a::before {
  content: '';
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  top: 50%;
  right: 0;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-color);
  z-index: 1000;
  transform: translate(-100%, -50%) scale(1, 1);
}

.live-link a::after {
  background: url(~assets/projects/elevito/img-arrow.svg) no-repeat;
  background-size: 70% 70%;
  background-position: center center;
}

.live-link a:after {
  content: '';
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  background: url(~assets/projects/elevito/img-arrow.svg) no-repeat;
  background-size: 70% 70%;
  background-position: center center;
  top: 50%;
  right: 0;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  z-index: 1500;
  transform: translate(-100%, -50%) scale(0.5, 0.5);
}

.live-link a:hover:before {
  transform: translate(-64%, -50%) scale(1.2, 1.2);
}

.live-link a:hover:after {
  transform: translate(-62.2%, -50%) scale(0.8, -0.8);
}

a:active,
a:focus,
a:hover {
  outline: 0;
}

a {
  text-decoration: none;
}
</style>
