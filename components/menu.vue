 <template>
  <div class="nav-container">
    <nuxt-link to="/">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74.707"
          height="71.707"
          viewBox="0 0 74.707 71.707"
        >
          <g transform="translate(-23.146 -36.146)">
            <line
              x1="53"
              y2="53"
              transform="translate(23.5 36.5)"
              fill="none"
              stroke="#f6ecdd"
              stroke-width="1"
            />
            <path
              d="M53,0,43.891,9.109,0,53"
              transform="translate(34.5 45.5)"
              fill="none"
              stroke="#f6ecdd"
              stroke-width="1"
            />
            <path
              d="M53,0,43.891,9.109,0,53"
              transform="translate(44.5 54.5)"
              fill="none"
              stroke="#f6ecdd"
              stroke-width="1"
            />
            <path
              d="M19.53-18.9c-.56-2.8-2.87-6.44-8.89-6.44C5.95-25.34,2-21.98,2-17.57c0,3.745,2.555,6.3,6.51,7.105l3.465.7c1.925.385,3.01,1.505,3.01,2.94,0,1.75-1.435,3.045-4.025,3.045-3.5,0-5.215-2.2-5.425-4.655L1.05-7.245C1.435-3.71,4.34.525,10.92.525c5.775,0,8.96-3.85,8.96-7.665,0-3.5-2.415-6.44-6.93-7.315L9.485-15.12c-1.82-.35-2.7-1.435-2.7-2.8,0-1.645,1.54-3.15,3.885-3.15a4.237,4.237,0,0,1,4.515,3.5ZM23.17-2.94A3.2,3.2,0,0,0,26.355.245a3.2,3.2,0,0,0,3.22-3.185,3.2,3.2,0,0,0-3.22-3.185A3.2,3.2,0,0,0,23.17-2.94Z"
              transform="translate(44 82)"
              fill="#fc3a52"
            />
          </g>
        </svg>
      </div>
    </nuxt-link>

    <!-- <div class="menu-button-container">AAAAAA
      <button v-on:click="show = !show" class="menu-button">Toggle</button>
      <transition name="slide">
        <div v-if="show" class="test1">hello</div>
      </transition>
    </div>-->

    <div class="menu-slide1" :class="{ active: changed }"></div>
    <div class="menu-icon" @click="show = !show">
      <!-- <button @click="changed = !changed">Change</button> -->

      <svg
        @click="changed = !changed"
        :class="{ active: changed }"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <transition-group name="layout" tag="g">
          <rect class="items line1" ref="rect" key="rect1" width="15" height="2" />
          <rect class="items line2" ref="rect" key="rect2" x="0" y="6" width="30" height="2" />
          <rect class="items line3" ref="rect" key="rect3" x="15" y="12" width="15" height="2" />
        </transition-group>
      </svg>
    </div>
    <transition name="slide-in">
      <div v-if="show">
        <div class="nav">
          <span class="nav__content">
            <span class="nav__list-item">
              <nuxt-link to="/">Home</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/projects">Projects</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/blog">Blog</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/about">About</nuxt-link>
            </span>
            <!-- <span class="nav__list-item">
              <nuxt-link to="/photography">Photography</nuxt-link>
            </span>-->
          </span>

          <div class="nav-social-icon">
            <div class="menu-social-icon_container">
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.facebook.com/saurabhchandrarai"
                    target="_blank"
                    rel="noopener"
                    title="Facebook (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/facebook-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.instagram.com/saurabh.c.rai/"
                    target="_blank"
                    rel="noopener"
                    title="Instagram (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/instagram-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.linkedin.com/in/saurabhchandrarai/"
                    target="_blank"
                    rel="noopener"
                    title="Linkdin (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/linkdin-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://medium.com/@saurabhcrai"
                    target="_blank"
                    rel="noopener"
                    title="Medium (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/medium-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.behance.net/saurabhcrai"
                    target="_blank"
                    rel="noopener"
                    title="Behance (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/behance-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://github.com/SAURABHRAI110"
                    target="_blank"
                    rel="noopener"
                    title="Github(new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/github-social.png" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <span class="h-fullscreen-container">
      <button class="full-screen" onclick="openFullscreen();">
        <p>Go fullscreen</p>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      changed: false
    }
  }
}
</script>
<style scoped>
.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

@media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 80px;
  }
}

.nav-container input,
button {
  border: none;
}

.logo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  position: absolute;
  overflow: hidden;
  left: 15%;
  padding-top: 30px;
  transform: translate(-50%);
  z-index: 10;
}

@media screen and (max-width: 999px) {
  .logo {
    left: 8%;
    padding-top: 6px;
  }

  .logo > svg {
    width: 60px;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}

/* menu */
/* menu icon */

/* testing */
svg {
  fill: var(--primary-color);
}

/* .active .circ {
  transform: translate3d(30px, 0, 0) scale(0.5);
}
.active .text {
  transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
} */

.items {
  transition: all 0.4s ease;
}

#text {
  transform-origin: 50% 50%;
}

/* testing end */

.menu-icon {
  position: fixed;
  z-index: 10;
  left: 34px;
  /* border-radius: 50%; */
  /* background-color: #edeaea; */
  top: 50%;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
}

.menu-icon:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 999px) {
  .menu-icon {
    left: auto;
    right: 40px;
    top: 33px;
  }
}

.active {
  fill: black;
}
.active .rect {
  transform: translate3d(0, 30px, 0);
}

.active .line1 {
  transform: translateX(1px) rotate(45deg);
}
.active .line2 {
  transform: translate3d(-4px, 18px, 0px) rotate(-45deg);
}
.active .line3 {
  transform: translate3d(10px, -7px, 0px) rotate(45deg);
}
/* .menu-icon__line {
  background-color: #000;
  transform: translateX(0px) rotate(-45deg);
}
.menu-icon__line-left {
  transform: translateX(1px) rotate(45deg);
}
.menu-icon__line-right {
  transform: translateX(-2px) rotate(45deg);
} */

.nav {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--secondary-color);
  z-index: 8;
}

.menu-slide1 {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: -1;
  transform: translateX(-100vw);
  transition-delay: 0s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
}
/* .menu-slide2 {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: 12;
  transform: translateX(-100vw);
  transition-delay: 0.1s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
} */

.active.menu-slide1 {
  transform: translateX(0vw);
  transition-delay: 0s;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-100vw) translateY(0%);
}

/* .nav:after {
  background: #c21818;
  transition-delay: 0s;
} */
/* .nav:before {
  transition-delay: 0.1s;
} */
.slide-in-enter-to,
.slide-in-leave {
  transform: translateX(0%) translateY(0%);
}

.slide-in-enter-active {
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition-delay: 0.1s;
}

.slide-in-leave-active {
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s;
  transition-delay: 0 s;
}

.nav__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.6em;
}

.nav__list-item {
  margin: 10px 24px;
  display: inline-block;
  position: relative;
}

/* .nav__content {
  position: relative;
  top: 75%;
  left: 71%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.6em;
  font-weight: 200;
} */

/* .nav__list {
  display: flex;
}
.nav__list-item {
  position: relative;
  display: inline-block;
  transition-delay: 0.8s;
  opacity: 1;
  transform: translate(100%, 100%);
  transition: opacity 0.2s ease, transform 0.3s ease;

  margin-right: 5%;
} */

.nav__list-item:before {
  content: '';
  position: absolute;
  background: var(--primary-color);
  width: 20px;
  height: 3px;
  top: 100%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}
.nav__list-item:hover:before {
  width: 100%;
}

.menu-link-active .nav__list-item {
  width: 100%;
}

/* .slide-in-enter-to .nav__list-item {
  opacity: 1;
  transform: translateX(0%);
} */

/* .slide-in-enter-active .nav__list-item {
  transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
}
.slide-in-enter-active .nav__list-item:nth-child(0) {
  transition-delay: 0.5s;
}
.slide-in-enter-active .nav__list-item:nth-child(1) {
  transition-delay: 0.6s;
}
.slide-in-enter-active .nav__list-item:nth-child(2) {
  transition-delay: 0.7s;
}
.slide-in-enter-active .nav__list-item:nth-child(3) {
  transition-delay: 0.8s;
}
.slide-in-enter-active .nav__list-item:nth-child(4) {
  transition-delay: 0.9s;
} */

.h-fullscreen-container {
  position: absolute;
  bottom: 44px;
  left: 39%;
  z-index: 8;
}

.h-fullscreen-container p {
  font-size: 12px;
  position: absolute;
  white-space: nowrap;
  color: black;
  opacity: 0.5;
  padding: 0px 1px 0px 0px;
  margin: 20px 1px 0px -31px;
}

button.full-screen {
  background: white;
}
@media screen and (max-width: 999px) {
  .h-fullscreen-container {
    bottom: 33px;
    left: 50%;
  }

  .h-fullscreen-container p {
    margin: 15px 1px 0px -31px;
  }
}

.full-screen {
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
  border: 0.1em solid var(--primary-color);
  width: 23px;
  height: 23px;
  position: relative;
  font-size: 23px;
  cursor: pointer;
}
.full-screen:before,
.full-screen:after {
  content: '';
  background: white;
  position: absolute;
}
.full-screen:before {
  width: 0.333em;
  height: 1em;
  left: 0.233em;
  top: -0.1em;
}
.full-screen:after {
  width: 1em;
  height: 0.333em;
  top: 0.233em;
  left: -0.1em;
}

.menu-social-icon_container {
  position: absolute;
  top: 82%;
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 800px) {
  .menu-social-icon_container {
    top: 82%;
  }
}
</style>
