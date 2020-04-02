<template>
  <div>
    <div class="w-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img class="hero-svg" src="~assets/svg/w.svg" alt="w" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain w-h-container">
        <p class="pm w-h-subheading" data-aos="fade-up" data-aos-duration="1000">case studies</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Some of my
          <br />Finest
          <span class="outlined">Work</span>
        </h1>
        <p
          class="pm w-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >
          I pour my ❤️️ into every design. I do what i do because I love it and
          I am dedicated to creating meaningful work.
        </p>
      </div>
    </div>
    <!-- timeline 2019 -->
    <!-- <projecttimeline timeline="2019" /> -->

    <!-- project grid -->
    <div class="showcase-container-home">
      <div class="showcase-container-grid">
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/cricbuzz-app-redesign">
            <thumbnail
              thumbnailName="CricBuzz"
              thumbnailDescription="App  Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/elevito">
            <thumbnail
              thumbnailName="Elevito"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/elevito-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/feeding-trends">
            <thumbnail
              thumbnailName="Feeding Trends"
              thumbnailDescription="Web, Branding, Print"
              thumbnail="/ft-thumbnail-2.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/bharatrohan">
            <thumbnail
              thumbnailName="BharatRohan"
              thumbnailDescription="Admin, App, Web"
              thumbnail="/bharatrohangif2.gif"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/filmingeye">
            <thumbnail
              thumbnailName="Filming Eye"
              thumbnailDescription="Web, Identity"
              thumbnail="/filming-eye-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/dreamz">
            <thumbnail
              thumbnailName="Dreamz"
              thumbnailDescription="App Design, HF Prototype"
              thumbnail="/dreamz-thumbnail-cyan.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/ft-events">
            <thumbnail
              thumbnailName="FT Events"
              thumbnailDescription="Web, Admin"
              thumbnail="/ft-event-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/thebbdtimes">
            <thumbnail
              thumbnailName="The BBD Times"
              thumbnailDescription="Branding"
              thumbnail="/tbt-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/mr-irritating">
            <thumbnail
              thumbnailName="Mr. Irritating"
              thumbnailDescription="Print, Social Media"
              thumbnail="/mr-irritating-thumbnail.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/dear-zindagi">
            <thumbnail
              thumbnailName="Dear Zindagi"
              thumbnailDescription="Brochure, Identity"
              thumbnail="/dear-zindagi-thumbnail.webp"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/awesome-inc">
            <thumbnail
              thumbnailName="Awesome Inc."
              thumbnailDescription="Identity, Print"
              thumbnail="/awesome-inc-thumnail-3.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/tbt-app">
            <thumbnail
              thumbnailName="TBT App"
              thumbnailDescription="App, Branding"
              thumbnail="/tbt-app-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/prepowl">
            <thumbnail
              thumbnailName="Prepowl"
              thumbnailDescription="Web Design and Development"
              thumbnail="/prepowl-thumbnail-blue.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/salesfactory">
            <thumbnail
              thumbnailName="Salesfactory"
              thumbnailDescription="Web Design + Development"
              thumbnail="/salesfactory-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/r3">
            <thumbnail
              thumbnailName="R3"
              thumbnailDescription="Social Media, logo"
              thumbnail="/r3-thumbnail.webp"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <!-- <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/news-app">
            <thumbnail
              thumbnailName="News App"
              thumbnailDescription="App, Logo"
              thumbnail="/news-app-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>-->

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/bls">
            <thumbnail
              thumbnailName="Banaras Lit. Society"
              thumbnailDescription="Branding"
              thumbnail="/bls-thumbnail-3.jpg"
              color="var(--primary-color)"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/hindigiri">
            <thumbnail
              thumbnailName="Hindigiri"
              thumbnailDescription="Branding, Marketing"
              thumbnail="/hindigiri-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/hello-color">
            <thumbnail
              thumbnailName="Hello Color"
              thumbnailDescription="Book Design"
              thumbnail="/hello-colors-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/logofolio">
            <thumbnail
              thumbnailName="Logo Collection"
              thumbnailDescription="logos so far"
              thumbnail="/logofolio-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
        <!-- 
        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/utkarsh">
            <thumbnail
              thumbnailName=" Utkarsh"
              thumbnailDescription="Web, Branding, Social"
              thumbnail="/utkarsh-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>-->

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/my-portfolio-website">
            <thumbnail
              thumbnailName=" My Website "
              thumbnailDescription=" Web design and development"
              thumbnail="/my-website-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- thumbnail end here -->
    <!-- some more projects links  -->

    <!-- my quote -->
    <hr class="section-divider p-section-divider" />

    <div class="p-footer-container">
      <div>
        <img
          src="~assets/projects/projects-footer-img.png"
          alt="Saurabh Chandra Rai black and white png"
        />
      </div>
    </div>

    <div class="p-project-footer">
      <div class="p-h-footer-container">
        <div class="p-f-p-container">
          <nuxt-link to="/blog">
            <div class="p-h-previous">
              <div class="overlay"></div>
              <span class="p-h-text">
                <h3>Go to Blog</h3>
              </span>
            </div>
          </nuxt-link>
        </div>
        <div class="p-home-icon">
          <nuxt-link to="/">
            <img src="~assets/projects/home-icon.svg" alt="home button svg icon" title="To home" />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/about">
            <div class="p-h-next">
              <div class="overlay"></div>
              <span class="p-h-text">
                <h3>About Me</h3>
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- See my Photography -->
    <div class="w-photography-container"></div>
    <div class="w-arts-container"></div>
  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Projecttimeline from '~/components/projects/projecttimeline'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
export default {
  layout: 'projects',
  components: {
    Thumbnail,
    Projecttimeline,
    Pfooterp,
    Pfootern
  }
}
</script>

<style>
.p-footer-container {
  width: 100%;
  height: 60vh;
  background-color: white;
  padding: 0px 0px 0px 0px;
  position: relative;
}

.p-section-divider {
  padding: 60px 0px 30px 0px;
}

.p-footer-container img {
  height: 83%;
  position: absolute;
  right: 7%;
  bottom: 0px;
  z-index: 1;
}

.p-h-quote-contain {
  position: relative;
  margin: 63px 32.4% 0px calc(20% - 83px);
  top: 21%;
  padding: 28px 0px 0px 0px;
  z-index: 3;
}

@media screen and (max-width: 1200px) {
  .p-h-quote-contain {
    padding: 27px 92px 0px 0px;
  }
}
@media screen and (max-width: 800px) {
  .p-h-quote-contain {
    /* margin-left: 20%; */
    margin-right: 18.4%;
    margin-left: 10%;
  }
}

@media screen and (max-width: 500px) {
  .p-h-quote-contain {
    /* margin-left: 20%; */
    /* margin-right: 9%; */
    margin-right: 4%;
    margin-left: 7%;
  }
}

.p-quote-container p {
  color: black;
  font-size: 30px;
}

/* p footer links */

.p-h-footer-links {
  width: 100%;
  height: 30vh;
  background-color: black;
  position: relative;
}

.p-h-footer-links::before {
  content: '';
  height: 1px;
  top: 0px;
  position: absolute;
  width: 100%;
  background-color: var(--primary-color);
  transition: height 0.65s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.p-h-footer-container:hover .p-h-footer-links:before {
  height: 100%;
}

.p-h-footer-links span {
  z-index: 10;
  position: relative;
  font-size: 1.4em;
  color: white;
}

.p-h-footer-container:hover .p-h-footer-links span {
  color: black;
}

/*  */

.p-project-footer {
  width: 100%;
  position: relative;
}
.p-home-icon img {
  position: absolute;
  z-index: 3;
  left: 50%;
  width: 76px;
  top: 39%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  padding: 18px;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.p-home-icon img:hover {
  width: 85px;
  border: solid 1px white;
}

.p-h-footer-container {
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  height: 30vh;
  display: grid;
  grid-template-areas:
    'a b'
    'a b';
  background-color: var(--primary-color);
  transition: height 0.95s cubic-bezier(0.475, 0.425, 0, 0.995);
  position: relative;
}

.p-h-footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 2;
  background-color: var(--primary-color);
  display: block;
  will-change: transform;
  -webkit-transition: -webkit-transform 0.65s;
  transition: -webkit-transform 0.65s;
  transition: transform 0.65s;
  transition: transform 0.65s, -webkit-transform 0.65s;
  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.p-h-footer-container:hover:before {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.p-h-previous {
  /* cursor: url('/cursor-previous.png'), auto; */
  cursor: url('/cp.svg'), auto;
  position: relative;
}

.p-h-next {
  cursor: url('/cn.svg'), auto;
  position: relative;
}

.p-text > h3 {
  color: white;
}

.p-h-previous > img {
  width: 100%;
  object-fit: cover;
  height: 80vh;
}

.p-h-next > img {
  width: 100%;
  object-fit: cover;
  height: 80vh;
}

.overlay {
  background-color: black;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
}

.p-h-text {
  position: absolute;
  width: 100%;
  align-items: center;
  top: 15%;
  color: white;
  text-align: center;
  transition: all 0.85s cubic-bezier(0.19, 1, 0.22, 1);
  padding: 30px 0px 0px 0px;
}

.p-h-previous:hover .p-h-text {
  letter-spacing: 3px;
}

.p-h-next:hover .p-h-text {
  letter-spacing: 3px;
}
</style>
