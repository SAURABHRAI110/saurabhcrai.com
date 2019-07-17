<template>
  <div class="live-link">
    <a :href="link" target="_blank">
      {{text}}
      <span></span>
    </a>
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
.live-link {
  position: absolute;
  top: 40%;
  right: 15vw;
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
  -webkit-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(40%, -50%) scale(0.2, 0.2);
  -moz-transform: translate(40%, -50%) scale(0.2, 0.2);
  -webkit-transform: translate(40%, -50%) scale(0.2, 0.2);
  -o-transform: translate(40%, -50%) scale(0.2, 0.2);
  -ms-transform: translate(40%, -50%) scale(0.2, 0.2);
  top: 50%;
  right: 0;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-color);
  z-index: 1000;
}

.live-link a span {
  background-color: #232325;
  opacity: 0.25;
}

.live-link a span {
  top: 50%;
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(0%, -50%);
  -moz-transform: translate(0%, -50%);
  -webkit-transform: translate(0%, -50%);
  -o-transform: translate(0%, -50%);
  -ms-transform: translate(0%, -50%);
  right: 30px;
  display: block;
  position: absolute;
  width: 60px;
  height: 2px;
  background-color: rgba(45, 45, 48, 1);
}

.live-link a::after {
  background: url(~assets/projects/elevito/img-arrow.svg) no-repeat;
  background-size: 70% 70%;
  background-position: center center;
}

.live-link a:after {
  content: '';
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(0%, -50%) scale(0.01, 0.01);
  -moz-transform: translate(0%, -50%) scale(0.01, 0.01);
  -webkit-transform: translate(0%, -50%) scale(0.01, 0.01);
  -o-transform: translate(0%, -50%) scale(0.01, 0.01);
  -ms-transform: translate(0%, -50%) scale(0.01, 0.01);
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
}

.live-link a:hover span {
  transform: translate(-50%, -50%) scale(0.01, 1);
  -moz-transform: translate(-50%, -50%) scale(0.01, 1);
  -webkit-transform: translate(-50%, -50%) scale(0.01, 1);
  -o-transform: translate(-50%, -50%) scale(0.01, 1);
  -ms-transform: translate(-50%, -50%) scale(0.01, 1);
}
.live-link a:hover:before {
  transform: translate(-100%, -50%) scale(1, 1);
  -moz-transform: translate(-100%, -50%) scale(1, 1);
  -webkit-transform: translate(-100%, -50%) scale(1, 1);
  -o-transform: translate(-100%, -50%) scale(1, 1);
  -ms-transform: translate(-100%, -50%) scale(1, 1);
}

.live-link a:hover:after {
  transform: translate(-100%, -50%) scale(0.5, 0.5);
  -moz-transform: translate(-100%, -50%) scale(0.5, 0.5);
  -webkit-transform: translate(-100%, -50%) scale(0.5, 0.5);
  -o-transform: translate(-100%, -50%) scale(0.5, 0.5);
  -ms-transform: translate(-100%, -50%) scale(0.5, 0.5);
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
