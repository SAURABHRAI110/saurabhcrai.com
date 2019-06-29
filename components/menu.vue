<template>
  <div>
    <div class="nav">
      <div class="nav__content">
        <ul class="nav__list">
          <li class="nav__list-item active-nav">
            <a href="#" class="hover-target">home</a>
          </li>
          <li class="nav__list-item">
            <a href="#" class="hover-target">studio</a>
          </li>
          <li class="nav__list-item">
            <a href="#" class="hover-target">news</a>
          </li>
          <li class="nav__list-item">
            <a href="#" class="hover-target">contact</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="section full-height over-hide">
      <div class="switch-wrap">
        <h1>overlay menu</h1>
        <div id="switch" class="hover-target">
          <div id="circle"></div>
        </div>
        <p>
          <span>dark</span> -
          <span>light</span>
        </p>
      </div>
    </div>

    <div class="cursor" id="cursor"></div>
    <div class="cursor2" id="cursor2"></div>
    <div class="cursor3" id="cursor3"></div>
  </div>
</template>

<script>
import Logo from '~/components/logo'
export default {
  components: {
    Logo
  }
  // head() {
  //   return {
  //     script: [{ src: '/main.js', defer:  true  }]
  //   }
  // }
}
</script>
<style scoped>
/* .nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
} */

/* .nav-container:hover {
  width: 90%;
} */

/* @media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 65px;
  }
} */

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
  background-color: #1f2029;
  overflow-x: hidden;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
a {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}

/* #Cursor
================================================== */

.cursor,
.cursor2,
.cursor3 {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.cursor {
  background-color: rgba(255, 255, 255, 0.062);
  height: 0;
  width: 0;
  z-index: 99999;
}
.cursor2,
.cursor3 {
  height: 36px;
  width: 36px;
  z-index: 99998;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.cursor2.hover,
.cursor3.hover {
  -webkit-transform: scale(2) translateX(-25%) translateY(-25%);
  transform: scale(2) translateX(-25%) translateY(-25%);
  border: none;
}
.cursor2 {
  border: 2px solid #fc3a52;
  box-shadow: 0 0 22px rgba(0, 0, 0, 0.082);
}
.cursor2.hover {
  background: #fc3a52;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 1200px) {
  .cursor,
  .cursor2,
  .cursor3 {
    display: none;
  }
}

/* #Primary style
================================================== */

.section {
  position: relative;
  width: 100%;
  display: block;
}
.over-hide {
  overflow: hidden;
}
.full-height {
  height: 100vh;
}

/* #Navigation
================================================== */

.cd-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
.header-wrapper {
  position: relative;
  width: calc(100% - 100px);
  margin-left: 50px;
}
.logo-wrap {
  position: absolute;
  display: block;
  left: 0;
  top: 40px;
  cursor: pointer;
}
.logo-wrap a {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  transition: all 0.3s ease-out;
}
.logo-wrap a span {
  color: #8167a9;
}
.logo-wrap a:hover {
  opacity: 0.9;
}
.nav-but-wrap {
  position: relative;
  display: inline-block;
  float: right;
  padding-left: 15px;
  padding-top: 15px;
  margin-top: 26px;
  transition: all 0.3s ease-out;
}
.menu-icon {
  height: 30px;
  width: 30px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  display: block;
}
.menu-icon__line {
  height: 2px;
  width: 30px;
  display: block;
  background-color: #fff;
  margin-bottom: 7px;
  cursor: pointer;
  -webkit-transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: background-color 0.5s ease, -webkit-transform 0.2s ease;
  transition: transform 0.2s ease, background-color 0.5s ease;
  transition: transform 0.2s ease, background-color 0.5s ease,
    -webkit-transform 0.2s ease;
}
.menu-icon__line-left {
  width: 16.5px;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.menu-icon__line-right {
  width: 16.5px;
  float: right;
  -webkit-transition: all 200ms linear;
  -moz-transition: all 200ms linear;
  -o-transition: all 200ms linear;
  -ms-transition: all 200ms linear;
  transition: all 200ms linear;
}
.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
  width: 30px;
}
.nav {
  position: fixed;
  z-index: 98;
}
.nav:before,
.nav:after {
  content: '';
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(20, 21, 26, 0.6);
  border-bottom-left-radius: 200%;
  z-index: -1;
  -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    border-radius linear 0.8s;
  transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    border-radius linear 0.8s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    border-radius linear 0.8s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
    border-radius linear 0.8s;
  -webkit-transform: translateX(100%) translateY(-100%);
  transform: translateX(100%) translateY(-100%);
}
.nav:after {
  background: rgba(9, 9, 12, 1);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
.nav:before {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.nav__content {
  position: fixed;
  visibility: hidden;
  top: 50%;
  margin-top: 20px;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;
}
.nav__list {
  position: relative;
  padding: 0;
  margin: 0;
  z-index: 2;
}
.nav__list-item {
  position: relative;
  display: block;
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  opacity: 0;
  text-align: center;
  color: #fff;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-size: 8vh;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: 3px;
  -webkit-transform: translate(100px, 0%);
  transform: translate(100px, 0%);
  -webkit-transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.2s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.2s ease, transform 0.3s ease;
  transition: opacity 0.2s ease, transform 0.3s ease,
    -webkit-transform 0.3s ease;
  margin-top: 0;
  margin-bottom: 0;
}
.nav__list-item a {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 900;
  z-index: 2;
  display: inline-block;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.nav__list-item a:after {
  position: absolute;
  content: '';
  top: 50%;
  margin-top: -2px;
  left: 50%;
  width: 0;
  height: 0;
  opacity: 0;
  background-color: #8167a9;
  z-index: 1;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.nav__list-item a:hover:after {
  height: 4px;
  opacity: 1;
  left: 0;
  width: 100%;
}
.nav__list-item a:hover {
  color: rgba(255, 255, 255, 1);
}
.nav__list-item.active-nav a {
  color: rgba(255, 255, 255, 1);
}
.nav__list-item.active-nav a:after {
  height: 4px;
  opacity: 1;
  left: 0;
  width: 100%;
}
body.nav-active .nav__content {
  visibility: visible;
}
body.nav-active .menu-icon__line {
  background-color: #fff;
  -webkit-transform: translate(0px, 0px) rotate(-45deg);
  transform: translate(0px, 0px) rotate(-45deg);
}
body.nav-active .menu-icon__line-left {
  width: 15px;
  -webkit-transform: translate(2px, 4px) rotate(45deg);
  transform: translate(2px, 4px) rotate(45deg);
}
body.nav-active .menu-icon__line-right {
  width: 15px;
  float: right;
  -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
  transform: translate(-3px, -3.5px) rotate(45deg);
}
body.nav-active .menu-icon:hover .menu-icon__line-left,
body.nav-active .menu-icon:hover .menu-icon__line-right {
  width: 15px;
}
body.nav-active .nav {
  visibility: visible;
}
body.nav-active .nav:before,
body.nav-active .nav:after {
  -webkit-transform: translateX(0%) translateY(0%);
  transform: translateX(0%) translateY(0%);
  border-radius: 0;
}
body.nav-active .nav:after {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
body.nav-active .nav:before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
body.nav-active .nav__list-item {
  opacity: 1;
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  -webkit-transition: opacity 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, color 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease,
    -webkit-transform 0.3s ease;
}
body.nav-active .nav__list-item:nth-child(0) {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}
body.nav-active .nav__list-item:nth-child(1) {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}
body.nav-active .nav__list-item:nth-child(2) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}
body.nav-active .nav__list-item:nth-child(3) {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}
body.nav-active .nav__list-item:nth-child(4) {
  -webkit-transition-delay: 1.1s;
  transition-delay: 1.1s;
}
body.nav-active .nav__list-item:nth-child(5) {
  -webkit-transition-delay: 1.2s;
  transition-delay: 1.2s;
}
body.nav-active .nav__list-item:nth-child(6) {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
}
body.nav-active .nav__list-item:nth-child(7) {
  -webkit-transition-delay: 1.4s;
  transition-delay: 1.4s;
}
body.nav-active .nav__list-item:nth-child(8) {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
}
body.nav-active .nav__list-item:nth-child(9) {
  -webkit-transition-delay: 1.6s;
  transition-delay: 1.6s;
}
body.nav-active .nav__list-item:nth-child(10) {
  -webkit-transition-delay: 1.7s;
  transition-delay: 1.7s;
}

.switch-wrap {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 10;
  transform: translateY(-50%);
  width: 100%;
  -webkit-transition: all 500ms linear;
  transition: all 500ms linear;
  margin: 0 auto;
  text-align: center;
}
.switch-wrap h1 {
  font-weight: 900;
  font-size: 46px;
  line-height: 1;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
@media screen and (max-width: 580px) {
  .switch-wrap h1 {
    font-size: 32px;
  }
}
.switch-wrap p {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1;
  color: #8167a9;
  text-align: center;
  margin-top: 15px;
}
.switch-wrap p span {
  position: relative;
}
.switch-wrap p span:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background-color: #fff;
  left: 0;
  bottom: -4px;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.switch-wrap p span:nth-child(2):before {
  opacity: 0;
}
#switch,
#circle {
  cursor: pointer;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
#switch {
  width: 60px;
  height: 8px;
  margin: 0 auto;
  text-align: center;
  border: 2px solid #000;
  border-radius: 27px;
  background: #8167a9;
  position: relative;
  display: inline-block;
}
#circle {
  position: absolute;
  top: -11px;
  left: -13px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
  background: #fff;
}
.switched {
  border-color: #8167a9 !important;
  background: #000 !important;
}
.switched #circle {
  left: 43px;
  background: #000;
}

/* #Light
================================================== */

body.light {
  background-color: #fff;
}
body.light .cursor,
body.light .cursor2,
body.light .cursor3 {
  mix-blend-mode: normal;
}
body.light .cursor2 {
  border: 2px solid #1f2029;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
body.light .cursor2.hover {
  background: rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}
body.light .logo-wrap a {
  color: #1f2029;
}
body.light .menu-icon__line {
  background-color: #1f2029;
}
body.light .nav:before {
  background: rgba(235, 235, 235, 0.6);
}
body.light .nav:after {
  background: rgba(250, 250, 250, 1);
}
body.light .nav__list-item a {
  color: rgba(0, 0, 0, 0.6);
}
body.light .nav__list-item a:hover {
  color: #1f2029;
}
body.light .nav__list-item.active-nav a {
  color: #1f2029;
}
body.light .switch-wrap h1 {
  color: #000;
}
body.light .switch-wrap p span:nth-child(2):before {
  opacity: 1;
  background-color: #000;
}
body.light .switch-wrap p span:nth-child(1):before {
  opacity: 0;
}

/* #Link to page
================================================== */

.link-to-portfolio {
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 200;
  cursor: pointer;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 3px;
  background-position: center center;
  background-size: cover;
  background-image: url('https://ivang-design.com/ig-logo.jpg');
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  transition: opacity 0.2s, border-radius 0.2s, box-shadow 0.2s;
  transition-timing-function: ease-out;
}
.link-to-portfolio:hover {
  opacity: 0.8;
  border-radius: 50%;
  box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1);
}
</style>
