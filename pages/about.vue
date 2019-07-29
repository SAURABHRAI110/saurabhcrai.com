<template>
  <div>
    <!-- <div class="vl1 vl"></div>
    <div class="vl2 vl"></div>
    <div class="vl3 vl"></div>-->

    <!-- about hero -->

    <div class="a-hero_container">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <img src="~assets/svg/circle.svg" alt="circle" />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img src="~assets/svg/a.svg" alt="A" v-rellax="{ speed: -2, center: 0.5 }" />
      </div>

      <div class="contain a-h-container">
        <p
          class="pm a-h-subheading"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >who i am</p>
        <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          Nimble,
          <span class="outlined">Passionate</span>
          UX
          <span class="outlined">Designer</span>
        </h1>
        <p
          class="pm a-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >and I am always learning. Like past few months I have been learnig how to code. Now I can bring design into a pixel perfect reality.</p>
      </div>
    </div>

    <div class="about-section2">
      <div class="me-images">
        <div v-rellax="{ speed: -1.2, center: 0.4 }" class="me-image1">
          <img src="~/assets/img/about/about-me-1.png" />
        </div>
        <div v-rellax="{ speed: 1, center: 0.3 }" class="me-image2">
          <img src="~/assets/img/about/about-me-2.png" />
        </div>
        <div v-rellax="{ speed: -2, center: 0.7 }" class="me-image4">
          <img src="~/assets/img/about/about-me-4.png" />
        </div>
        <div v-rellax="{ speed: 3, center: 0.5 }" class="me-image3">
          <img src="~/assets/img/about/about-me-3.png" />
        </div>
      </div>
    </div>

    <div class="about-section3">
      <div class="about-me-text contain">
        <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
          <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
          <h2 class="a-hello primary-color">Hello there!</h2>
        </div>
        <p class="para hero-para black70">
          Yo! I'm Saurabh Rai and I am currently a User experience designer at
          Feeding Trends and Elevito in Lucknow, India. I consider myself a
          multi-disciplinary designer as I love making anything, but have
          recently found a passion in creating thoughtful and enjoyable user
          experiences through product design.
        </p>
        <p class="para hero-para black70">
          I moved on to study Engineering at Babu Banarasi Das Universiy,
          Lucknow, and began to grow myskills. Making flyers for college
          community and friends. Doing logos and branding work for friends and
          word of mouth clients. Going to college during the day and cranking
          on design work at night. Engieering led me to development and my
          passion for design led me to what I am today. I am basically a self
          taught.
        </p>

        <p class="para hero-para black70">
          I love what I do. The combination of business goals, mixed with
          human necessity, mixed with solid design is what gets me going every
          day. Don't hesitate to reach out if you'd like to chat about design,
          life, or just have a good ol' fashioned conversation.
        </p>
      </div>
    </div>

    <section class="a-c-section">
      <div class="contain">
        <div class="a-c_heading">
          <h1>Capabilities</h1>
        </div>

        <div class="a-c_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Capabilities</span>
        </div>

        <div class="a-c-design">
          <p class="a-c_subheading red">+Design</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Concepting</span>
              <span>Wireframing</span>
              <span>Interactive Experiences</span>
              <span>User Experience Design</span>
              <span>User Interface Design</span>
              <span>Interactive Prototyping</span>
              <span>2D & 3D Illustration</span>
              <span>Motion Graphics</span>
              <span>Brand Identity</span>
              <span>Print Design</span>
              <span>Digital, Social Campaigns</span>
              <span>& whatever needed to for the job</span>
            </div>
          </div>
        </div>

        <div class="a-c-code">
          <p class="a-c_subheading red">+Code</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>HTML</span>
              <span>CSS</span>
              <span>Vue Framework</span>
              <span>Nuxt Framework</span>
              <span>Green shock animation platform (GSAP)</span>
              <span>Bootstrap</span>
              <span>Github</span>
              <span>Codepen</span>
              <span>Saas</span>
              <span>Staring Code Screen</span>
            </div>
          </div>
        </div>
        <div class="a-c_photography">
          <p class="a-c_subheading red">+Photography ↗</p>
        </div>
        <div class="a-c_photography">
          <p class="a-c_subheading red">+Drawing and Arts ↗</p>
        </div>
        <div class="a-c_photography">
          <p class="a-c_subheading red">+Blogging ↗</p>
        </div>
        <div class="a-c_photography">
          <p class="a-c_subheading red">+Ariving on time</p>
        </div>
      </div>
    </section>

    <!-- <div class="a-c-section panel" data-color="capability">
      <span class="a-c-bg-text outlined" v-rellax="{ speed: -3, center: 0.4 }">Capabilities</span>
      <div class="contain">
        <div></div>
      </div>
    </div>-->
  </div>

  <!-- Be Crazy -->
  <!-- 
  <div class="be-crazy">
    <div class="me-crazy">
      <img class="me-crazy-1" src="~assets/img/about/me-face1.png" alt="  Crazzy Myself" />
      <img class="me-crazy-2" src="~assets/img/about/me-face-2.png" alt="  Crazzy Myself" />
    </div>
    <img class="me-crazy-pattern" src="~assets/svg/crazy-bg.svg" alt="  Crazzy Myself" />
    <div class="be-crazy-grid">
      <div></div>
      <div></div>
    </div>

    <span class="be-crazy-text">
      <h1>
        Be
        <br />Crazy
      </h1>
      <p>
        Be crazy, be stupid, be silly, be weird. Be whatever,
        <br />because life is too short to be anything but happy.
      </p>
    </span>
  </div>-->
  <!-- 
  <!-- My core standards-->
  <!-- <div class="a-process">
    <div class="contain">
      <p>Make it Better</p>
      <p>Quality Over Quantity</p>
      <p>Keep it Real</p>
      <p>Work to Live</p>
      <p>People Over Profits</p>
      <p>Ask More Questions</p>
      <p>Keep it Simple</p>
      <p>Never Stop Learning</p>

      <p>I design with purpose. I am obsessive with how and why a design works not on how it looks.</p>
    </div>
  </div>-->

  <!-- Project List -->

  <!-- <div class="c-list_content">
    <div class="c-list_item">
      <div class="o-line -noMargin"></div>
      <a class="c-list_header -link" href="https://discover.candiac.ca" target="_blank">
        <span class="o-layout">
          <span class="o-layout_item u-1/6">
            <span class="c-list_heading -hover">2019</span>
          </span>
          <span class="o-layout_item u-3/6">
            <span class="c-list_heading -name">Discover Candiac</span>
          </span>
          <span class="o-layout_item u-2/6">
            <span class="c-list_icon-wrap -small-mobile">
              <span class="c-list_heading">Digital</span>
              <svg role="img">
                <use xlink:href="assets/images/sprite.svg#arrow-up" />
              </svg>
            </span>
          </span>
        </span>
      </a>
    </div>
  </div>-->
</template>

<script>
export default {}
</script>

<style scoped>
</style>
