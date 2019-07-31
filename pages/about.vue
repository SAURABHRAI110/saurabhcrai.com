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
          <img
            src="~/assets/img/about/about-me-1.jpg?webp"
            alt="saurabh rai, saurabhcrai.com, photo indian boy"
          />
        </div>
        <div v-rellax="{ speed: 1, center: 0.3 }" class="me-image2">
          <img src="~/assets/img/about/about-me-2.jpg?webp" alt="saurabh rai, indian boy" />
        </div>
        <div v-rellax="{ speed: -2, center: 0.7 }" class="me-image4">
          <img src="~/assets/img/about/about-me-4.jpg?webp" alt="saurabh rai, indian boy" />
        </div>
        <div v-rellax="{ speed: 3, center: 0.5 }" class="me-image3">
          <img src="~/assets/img/about/about-me-3.jpg?webp" alt="saurabh rai, indian boy" />
        </div>
      </div>
    </div>
    <a href></a>

    <div class="about-section3">
      <div class="about-me-text a-hello_container contain">
        <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
          <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
          <h2 class="a-hello primary-color maegin_reveal">Hello there!</h2>
        </div>
        <p class="para hero-para black70">
          Yo! I'm Saurabh Rai and I am currently a User experience designer at
          <a
            href="https://feedingtrends.com/"
            target="_blank"
            rel="noopener"
            title="feedingtrends.com"
          >
            <span class="underline-magical">Feeding Trends</span>
          </a> and Elevito in Lucknow, India. I consider myself a
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

    <!-- capability -->
    <section class="a-c-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Capabilities</h1>
          </div>
        </div>

        <div class="a-c_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Capabilities</span>
        </div>

        <div class="a-c-design">
          <p class="a-c_subheading red">+Design</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>Creative/ Art Direction</span>
              <span>User Experience Design</span>
              <span>Interface & Interaction Design</span>
              <span>Interactive Experiences</span>
              <span>Digital Product Design</span>
              <span>Interactive Prototyping</span>
              <span>2D & 3D Illustration</span>
              <span>Motion Graphics</span>
              <span>Brand Identity</span>
              <span>Print Design</span>
              <span>Coffee Drinking</span>
              <span>Digital, Social Campaigns</span>
              <span>Graphic Design</span>
              <span>Creative Writing</span>
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
              <span>Staring at others code</span>
            </div>
          </div>
        </div>
        <div class="a-c_photography">
          <p class="a-c_subheading red">+Photography</p>
        </div>
        <div class="a-hl"></div>

        <div class="a-c_photography">
          <p class="a-c_subheading red">+Drawing and Arts</p>
        </div>
        <div class="a-hl"></div>

        <div class="a-c_photography">
          <p class="a-c_subheading red">+Blogging</p>
        </div>
        <div class="a-hl"></div>

        <div class="a-c_photography">
          <p class="a-c_subheading red">+Ariving on time</p>
        </div>
        <div class="a-hl"></div>
      </div>
    </section>

    <!-- tools -->

    <section class="a-t-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Tools</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Tools</span>
        </div>

        <div class="pm black70">
          <div class="a-t_layout">
            <span>
              <img src="~assets/img/about/a-tools-1.svg" alt="adobe xd svg icon" /> Adobe XD
            </span>
            <span>
              <img src="~assets/img/about/a-tools-8.svg" alt="Sketch svg icon" />Sketch
            </span>
            <span>
              <img src="~assets/img/about/a-tools-9.png" alt="Framer X svg icon" />Framer X
            </span>
            <span>
              <img src="~assets/img/about/a-tools-2.svg" alt="Invision svg icon" />Invision Studio
            </span>
            <span>
              <img src="~assets/img/about/a-tools-10.svg" alt="Adobe Illustrator svg icon" />Adobe Illustrator
            </span>
            <span>
              <img src="~assets/img/about/a-tools-11.svg" alt="Adobe Photoshop svg icon" />Adobe Photoshop
            </span>
            <span>
              <img src="~assets/img/about/a-tools-3.svg" alt="Adobe After Effects svg icon" />Adobe After Effects
            </span>
            <span>
              <img src="~assets/img/about/a-tools-12.svg" alt="Adobe Premiere Pro svg icon" />Adobe Premiere Pro
            </span>
            <span>
              <img src="~assets/img/about/a-tools-13.svg" alt="Adobe Indesign svg icon" />Adobe Indesign
            </span>
            <span>
              <img src="~assets/img/about/a-tools-4.svg" alt="Adobe Lightroom svg icon" />Adobe Lightroom
            </span>
            <span>
              <img src="~assets/img/about/a-tools-15.png" alt="Figma svg icon" />Cinema 4D
            </span>
            <span>
              <img src="~assets/img/about/a-tools-5.svg" alt="Zeplin svg icon" />Zeplin
            </span>
            <span>
              <img src="~assets/img/about/a-tools-16.png" alt="UXPin svg icon" />UXPin
            </span>
            <span>
              <img src="~assets/img/about/a-tools-14.svg" alt="UXPin svg icon" />Figma
            </span>
            <span>
              <img src="~assets/img/about/a-tools-17.png" alt="Balsamiq svg icon" />Balsamiq
            </span>
            <span>
              <img src="~assets/img/about/a-tools-6.svg" alt="Visual Studio Code svg icon" />Visual Studio Code
            </span>
            <span>
              <img src="~assets/img/about/a-tools-18.svg" alt="Atom svg icon" />Atom
            </span>
            <span>
              <img src="~assets/img/about/a-tools-19.svg" alt="GitHub svg icon" />GitHub
            </span>
            <span>
              <img src="~assets/img/about/a-tools-7.svg" alt="Slack svg icon" />Slack
            </span>
            <span>
              <img src="~assets/img/about/a-tools-21.svg" alt="Pen & Paper svg icon" />Pen & Paper
            </span>
            <span>
              <img src="~assets/img/about/a-tools-20.svg" alt="New Stuff svg icon" />+New Stuff
            </span>
          </div>
        </div>
      </div>
    </section>\
    <!-- projects section -->

    <section class="a-p-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Projects</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Projects</span>
        </div>

        <div class="pm black70">
          <div class="a-p_layout_column">
            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>

            <nuxt-link to="/projects">
              <div class="a-p_layout_row black70">
                <span>2019</span>
                <span>Filming Eye</span>
                <span>Web, Branding</span>
                <span>↗</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- showreel -->

    <section class="a-s-section">
      <div class="showreel-heading">
        <div class="contain">
          <h2>
            Enough reading.
            <br />Just watch my
            <span class="red">showreel.</span>
          </h2>
          <div class="a-s_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
            <span>Showreel</span>
          </div>
        </div>
        <div class="a-s-bg-container">
          <img src="~assets/img/about/showreel-bg.jpg" alt="showreel" />
        </div>
      </div>
    </section>

    <!-- crazy me -->

    <section class="a-crazy-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Be Crazy</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -3, center: 0.5 }">
          <span>Be Crazy</span>
        </div>
      </div>
      <div class="p-quote contain red">
        <blockquote>
          Be crazy, be stupid, be silly, be weird. Be whatever,
          because life is too short to be anything but happy.
        </blockquote>
      </div>

      <div class="a-crazy-layout">
        <div class="a-crazy-bg">
          <img src="~assets/img/about/crazy-bg-red.svg" alt="backgrounds red" />
          <img src="~assets/img/about/crazy-bg-light-grey.svg" alt="backgrounds red" />
        </div>
        <div class="me-crazy">
          <img class="me-crazy-1" src="~assets/img/about/me-face1.png" alt="  Crazzy Myself" />
          <img class="me-crazy-2" src="~assets/img/about/me-face-2.png" alt="  Crazzy Myself" />
        </div>
      </div>
    </section>
    <!-- process section -->

    <section class="a-process-section"></section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
