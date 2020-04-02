<template>
  <footer class="footer-wrapper">
    <img class="footer-hand" src="~assets/footer/footer-hand.png?webp" alt="hand gesture" />
    <div class="footer-type1">
      <div class="footer-left"></div>
      <div class="footer-right">
        <div class="text-slide-in">
          <span class="link-effect2 hover-link2">
            <a href="#" target="_blank">
              <span data-hover=" & take over the world! ">Yey! let's grab a coffee</span>
            </a>
          </span>
        </div>
        <div style="position:relative;     top: 14%;">
          <span class="footer-m-heading">
            Yey! let's grab a coffee
            <br />& take over the world!
          </span>
        </div>

        <div class="sayhi-container">
          <span class="sayhi2 para black61">or just say hi!</span>
          <span class="link-effect2 hover-link2">
            <a href="mailto:hello@saurabhcrai.com">
              <span
                class="sayhi3 black"
                data-hover="hello@saurabhcrai.com ↗"
              >hello@saurabhcrai.com ↗</span>
            </a>
          </span>
        </div>

        <div class="social-icon_container">
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
      <div class="footer-bottom-left"></div>
      <div class="footer-bottom-right">
        <p
          class="footer-dev-text"
        >©2019 — Web app designed and coded by Saurabh Chandra Rai using Vue.js + Nuxt.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style >
.footer-wrapper {
  height: 90vh;
  width: 100%;
  position: relative;
}

.footer-type1 {
  height: 100%;
  width: 100%;
  background-color: var(--primary-color);
  position: relative;
  display: grid;
  grid-template-columns: 51.5fr 48.5fr;
  grid-template-rows: 9fr 1fr;
  grid-area: 'a b' 'c d';
}

.footer-left {
  background-color: #d9d9d9;
  grid-template-areas: a;
}

.footer-right {
  background-color: #f6ecdd;
  grid-template-areas: b;
  position: relative;
}

.footer-bottom-left {
  background-color: #eaeaea;
  grid-template-areas: c;
  position: relative;
}

.footer-bottom-right {
  background-color: #eaeaea;
  position: relative;
  grid-template-areas: d;
}

.footer-hand {
  height: 78%;
  position: absolute;
  bottom: 0%;
  z-index: 4;
  left: 20%;
}

.footer-dev-text {
  color: rgb(46, 46, 46);
  font-size: 12px;
  text-align: center;
  top: 20%;
  position: relative;
}

.footer-dev-text:hover {
  color: var(--primary-color);
}

.text-slide-in {
  font-size: 50px;
  color: var(--primary-color);
  padding-top: 1%;
  position: relative;
  text-align: center;
  top: 25%;
}

.hover-link2 a {
  position: relative;
  display: inline-block;
  outline: none;
  color: var(--primary-color);
  text-decoration: none;
}

.link-effect2 a {
  overflow: hidden;
}

.link-effect2 a span {
  position: relative;
  display: inline-block;
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0, 1);
}

.link-effect2 a span::before {
  content: attr(data-hover);
  position: absolute;
  top: 100%;
  color: var(--primary-color);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.link-effect2 a:hover span {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  transform: translateY(-100%);
}

.sayhi-container {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%);
  font-size: 22px;
  text-align: center;
}

.sayhi2 {
  margin-bottom: 5px;
  color: #656565;
}

.sayhi3 {
  padding-top: 6px;
}

/* social icons */

.social-icon_container {
  position: absolute;
  top: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.social-one {
  position: relative;
  display: block;
  font-size: 12px;
  /* float: right; */
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.social-two {
  pointer-events: all;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.social-three {
  background-color: #ffffff00;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  pointer-events: none;
  /* border: 0.5px solid #c2c2c2; */

  transform: matrix(1, 0, 0, 1, 0, 0);
  transition: 0.2s cubic-bezier(0.4, 0, 0, 1);
}

.social-four {
  position: absolute;
  pointer-events: none;
  transform: matrix(1, 0, 0, 1, -48, 0);
  height: 100%;
  transition: 0.3s cubic-bezier(0.4, 0, 0, 1);
}

.social-two:hover .social-four {
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.social-two:hover .social-three {
  transform: scale(1.08, 1.08);
}

.social-three > img {
  border-style: none;
}

.footer-m-heading {
  display: none;
}

/* footer media queries */

@media screen and (max-width: 1200px) {
  .text-slide-in {
    font-size: 40px;
  }

  .sayhi-container {
    /* top: 31%; */
    font-size: 20px;
  }
}

@media screen and (max-width: 999px) {
  .footer-hand {
    left: 12%;
  }

  .footer-type1 {
    grid-template-columns: 50fr 50fr;
  }

  .text-slide-in {
    font-size: 37px;
  }

  .sayhi-container {
    /* top: 31%; */
    font-size: 17px;
  }
}

@media screen and (max-width: 800px) {
  .footer-wrapper {
    height: 95vh;
  }

  .footer-left {
    background-color: #f6ecdd;
  }

  .footer-type1 {
    grid-template-rows: 0.1fr 10fr 0.1fr 0.7fr;
    grid-template-columns: auto;
  }

  .text-slide-in {
    display: none;
  }

  .footer-m-heading {
    font-size: 30px;
    color: var(--primary-color);
    padding-top: 3%;
    position: relative;
    text-align: center;
    top: 25%;
    display: block;
  }

  .text-slide-in {
    top: 10%;
    font-size: 30px;
  }

  .sayhi-container {
    top: 37%;
    font-size: 18px;
  }

  .sayhi3 {
    padding-top: 6px;
  }
  .sayhi2 {
    padding-top: 6px;
    padding: 35px;
  }

  .social-icon_container {
    top: 51%;
  }

  .footer-hand {
    height: 34%;
    bottom: 7.4%;
    z-index: 1;
    left: 50%;
    transform: translate(-50%);
  }

  .footer-dev-text {
    font-size: 11px;
    top: 7%;
  }
}

@media screen and (max-width: 500px) {
  .footer-wrapper {
    height: 95vh;
  }

  .text-slide-in {
    top: 10%;
    font-size: 30px;
  }

  .sayhi-container {
    top: 35%;
    font-size: 18px;
  }

  .social-one {
    width: 40px;
    height: 40px;
  }
}
@media screen and (max-width: 400px) {
  .footer-m-heading {
    font-size: 26px;
  }
}
</style>
