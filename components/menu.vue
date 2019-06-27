<template>
  <nav class="c-nav js-nav">
    <a class="c-nav_wordmark" href="index.html">
      <img class="nav-logo" src="assets/logo.svg">
    </a>
    <!-- <a href="index.html" class="c-nav_logo_mobile">

      <img class="nav-logo" src="assets/logo.svg">

    </a>-->
    <div data-module="NavButton">
      <button class="c-nav_burger js-navButton-toggle" type="button">
        <span class="c-nav_burger_lines"></span>
      </button>
    </div>
    <p class="c-nav_text -big">Unknown Battleground and me.</p>
    <!-- <p class="c-nav_text -small">
      <a class="o-link -underline" href="blog.html#mycodelearning">
        <img class="c-nav-codelove" src="menu-assets/codewithlove.svg">

    </p>-->
    <div class="c-nav_main">
      <div class="c-nav_main_infos">
        <div>
          <p class="c-nav_main_infos_text -big">Unknown Battleground and me.</p>
          <div class="o-layout">
            <div class="o-layout_item u-1/2">
              <p class="c-nav_main_infos_text -small">
                <a class="o-link -underline" href="en/brands.html">Coded with</a>
                love and coffee.
              </p>
            </div>
            <div class="o-layout_item u-1/2">
              <p class="c-nav_main_infos_text -small">
                <a class="o-link" href="en/brands">Coded with</a>
                love and cofee.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="c-nav_main_layout o-layout">
        <div class="c-nav_main_item o-layout_item u-1/3@from-medium u-1/2@to-medium -big">
          <a class="c-nav_main_link" href="showcase.html">
            <span class="c-nav_main_wrap">
              <span class="c-nav_main_background">
                <span
                  class="o-background -overlay -dark"
                  style="background-image: url(menu-assets/me1.jpg) "
                ></span>
              </span>
              <span class="c-nav_main_content">
                <span class="c-nav_main_text">All I ever wanter was to edit my friend photo.</span>
                <span class="c-nav_main_heading -large">Showcase</span>
              </span>
            </span>
          </a>
        </div>
        <div class="c-nav_main_item o-layout_item u-1/3@from-medium u-1/2@to-medium -big">
          <a class="c-nav_main_link" href="en/culture.html">
            <span class="c-nav_main_wrap">
              <span class="c-nav_main_background">
                <span
                  class="o-background -overlay -dark"
                  style="background-image: url(menu-assets/me5-red.jpg);"
                ></span>
              </span>
              <span class="c-nav_main_content">
                <span class="c-nav_main_text">Bunch of them who bring the best in me.</span>
                <span class="c-nav_main_heading -large">People</span>
              </span>
            </span>
          </a>
        </div>

        <div class="c-nav_main_item o-layout_item u-1/3@from-medium">
          <div class="o-layout c-nav_main_item_secondary">
            <a class="o-layout_item c-nav_main_link -half -dark" href="blog.html">
              <span class="c-nav_main_wrap">
                <span class="c-nav_main_content">
                  <span class="c-nav_main_text">
                    Oo! I write the things I learn. People and
                    Design.
                  </span>
                  <span class="c-nav_main_heading -small">Blog</span>
                </span>
              </span>
            </a>
            <a class="o-layout_item c-nav_main_link -half -dark" href="about.html">
              <span class="c-nav_main_wrap">
                <span class="c-nav_main_content">
                  <span class="c-nav_main_text">Me and more me.</span>
                  <span class="c-nav_main_heading -small">About</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// {
//   import TimelineMax from 'gsap/TimelineMax'
//   export default {
//   mounted(){
//     var tl = new TimelineMax({ paused: true })
//   tl.to('.overlay', 1.6, {
//     top: 0,
//     ease: Expo.easeInOut
//   })
//   }
// }
</script>

<style>
.wrapper {
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100vh;
  background: url(~assets/img/menubg.jpg) no-repeat 50% 50%;
  background-size: cover;
  color: #fff;
}

/* .overlay {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.9;
} */

.overlay::before {
  /* animation: grain 1s steps(10) infinite; */
  background-image: url(~assets/img/home-people-9.jpg) no-repeat;
  content: '';
  height: 300%;
  left: -50%;
  opacity: 0.48;
  position: fixed;
  top: -110%;
  width: 300%;
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10%,
  100% {
    transform: translate(-5%, -10%);
  }
  20%,
  100% {
    transform: translate(-15%, 5%);
  }
  30%,
  100% {
    transform: translate(7%, -25%);
  }
  40%,
  100% {
    transform: translate(-5%, 25%);
  }
  50%,
  100% {
    transform: translate(-15%, 10%);
  }
  60%,
  100% {
    transform: translate(15%, 0%);
  }
  70%,
  100% {
    transform: translate(0%, 15%);
  }
  80%,
  100% {
    transform: translate(3%, 35%);
  }
  90%,
  100% {
    transform: translate(-10%, 10%);
  }
}

.menu-btn {
  position: fixed;
  margin: 1.2em;
  right: 0;
  z-index: 1;
}

button {
  border: none;
  background: none;
}

button:focus {
  outline: none;
}

.row,
.col-lg {
  margin: 0%;
  padding: 0%;
}
.col-lg {
  height: 100vh;
}

.overlay {
  background: #000;
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100vh;
}

ul {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  margin: 0%;
  padding: 0%;
}

.li {
  display: inline-block;
}

.li:not(:last-child) {
  margin-right: 120px;
}

.li:first-child:hover::before {
  content: '';
  z-index: -1;
  width: 300px;
  height: 400px;
  display: block;
  position: absolute;
  top: -180px;
  left: -30px;
  background: url(~assets/img/home-people-10.jpg) no-repeat;
  transition: 1s;
  animation: fade-in 2s ease-in-out;
}
.li:nth-child(2):hover::before {
  content: '';
  z-index: -1;
  width: 300px;
  height: 400px;
  display: block;
  position: absolute;
  top: -180px;
  left: -30px;
  background: url(~assets/img/home-people-11.jpg) no-repeat;
  transition: 1s;
  animation: fade-in 2s ease-in-out;
}
.li:nth-child(3):hover::before {
  content: '';
  z-index: -1;
  width: 300px;
  height: 400px;
  display: block;
  position: absolute;
  top: -180px;
  left: -30px;
  background: url(~assets/img/home-people-12.jpg) no-repeat;
  transition: 1s;
  animation: fade-in 2s ease-in-out;
}
.li:nth-child(4):hover::before {
  content: '';
  z-index: -1;
  width: 300px;
  height: 400px;
  display: block;
  position: absolute;
  top: -180px;
  left: -30px;
  background: url(~assets/img/home-people-13.jpg) no-repeat;
  transition: 1s;
  animation: fade-in 2s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    top: -160px;
  }

  50% {
    opacity: 1;
    top: -180px;
  }

  100% {
    opacity: 1;
    top: -180px;
  }
}

@media (max-width: 900px) {
  .li {
    text-align: center;
    display: block;
    margin: 0%;
    padding: 20px;
  }

  .li:hover::before {
    width: 0 !important;
  }
}
</style>