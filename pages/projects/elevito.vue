<template>
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/cricbuzz-app-redesign">
        <previous />
      </nuxt-link>

      <nuxt-link to="/projects/feeding-trends">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:#FD3E5B;">02</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>

    <projecthero
      pDate="October 2017 "
      pWebsite="elevito.com"
      pCategory="Product Design"
      pHeading="Elevito: My own endeavor"
      pHeadingcolor="color:#FD3E5B;"
      pSubheading="Designing for a design company."
    />
    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <ScrollDown />

    <!-- hero image -->
    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-hero-mobile.jpg"
          />
          <img src="~assets/projects/elevito/elevito-hero.jpg" alt="cool background" />
        </picture>
      </div>
    </div>

    <Preface
      timeframe=" October 2018- March 2019
    <br />5 Month"
      tools=" Adobe Creative Suite, Zeplin,
            <br> Pen-Paper and lots of Ice-Tea"
      role=" Art direction,Research,
    <br /> Content Strategy, UX, Order Pizza"
      team="  Shekhar, Govind, Fahad, Abhishek
            <br>Saurabh, Yash, Zainab and Me"
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" Elevito- Coming up with this name was challenging in itself. Elevito was supposed to be a Designing company based in India.
            We have been working from days when I got into my 7th semester of Engineering. Elevito- A team dedicated to producing only the best quality conteant
            any brand would deserves.


    "
      theme="theme_elevito"
    />

    <!-- Backstory -->

    <pcase
      heading="From Lucknow with love ❤"
      para=" I started thinking of Elevito back at end of September 2017 while I was still In Lucknow, pursuing
    Computer Science Engineering with some of my crazy friends who were so good in web development. Me and friend wanted
    to do something of our own, one night I got a chance to do it under the hat of one of my Senior. It was really mind bending
    for me and very challenging.
    <br />
    <br />
So here I was, crawling Pintrest, going through design agencies website, looking thirstily for some
    inspiration that could move me. After few days of this or that, I found a specific visual split in half and
    that's basically where the whole concept came from."
      theme="theme_elevito"
    />

    <!--       When we work on something that we have to decide on our own about every aspects of a product. It gets more challenging than ever.
      Then we are in constant dilemma of this or that. Iteration seems to never stop. Its get frustrating.
      Though we are not restricted by anything, its also fun and our mind happen to work round the clock to make decisions.

        <br> <br>Making something stand out and gives a feel of creativity and wowness. 
        was cool for the moment but that can not be used to used on web.
    <br>3. No copywrite, no information architecture."-->

    <div class="p-quote contain red">
      <blockquote>
        It was an opportunity for me to challenge our creativity,
        without fixing any constraint or barrier.
      </blockquote>
    </div>

    <p class="contain just-para black90">
      The purpose of the website was to showcase our works we have done so far particularly me and my fellow designers and through
      that, to clients and to convince them that we are the people they are looking far.
    </p>

    <!-- <img
        class="p-image-100"
        src="~assets/projects/elevito/elevito-mockup-web1.jpg"
        alt="Elevito web mockup"
    />-->
    <!-- Ideation and Reasearch -->

    <pcase
      class="elevito-research-sec"
      heading="Ideation and Research"
      para=" After wireframing the site and running it past some UX friends and juniors
      for feedback and tweaks, we kicked around some ideas for a theme. Coming up with layout
      and working on it.I iterated and tweaked until we had something that was fun and as fluid
      as possible."
      theme="theme_elevito"
    />
    <!-- <div class="p-image-100-container">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/elevito/elevito-ideation-1.jpg" />
        <img src="~assets/projects/elevito/elevito-ideation-1.jpg" alt="elevito ideation" />
        <p class="ps">I know my writing is all messed up.</p>
      </picture>
    </div>-->
    <no-ssr>
      <agile>
        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/elevito/elevito-ideation-1.jpg"
            alt="slider1"
          />
        </div>

        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/elevito/elevito-ideation-2.jpg"
            alt="slider2"
          />
        </div>
      </agile>
    </no-ssr>

    <!-- <img
      class="p-image-100"
      src="~assets/projects/elevito/elevito-ideation.jpg"
      alt="Elevito web mockup"
    />-->

    <div class="p-quote contain red">
      <blockquote>
        Ideas don't come out fully formed. They only become clear as you work on them.
        You just have to get started.
      </blockquote>
    </div>

    <!-- Art direction Design-->

    <pcase
      heading="Art Direction + Design"
      para="After layout and content strategy, It was  time to set a theme and colour palette
      It was time to design a simple, clean and elegant showcase website. The accent colour I choose
      was <span class='elevito-text-bg1'>Dark moderate cyan.</span>. Later on while project was in design phase I chamged
      the theme from Cyan to <span class='elevito-text-bg2'>Gradient</span> feel, to make it more contrast and modern feel. I decided to
      use red as theme colour
      "
      theme="theme_elevito"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-wireframe-cyan-mobile.jpg"
          />
          <img
            src="~assets/projects/elevito/elevito-wireframe-cyan.jpg"
            alt="website wireframing, wireframing"
          />
          <p class="ps black90">Initial layout and Primary Colours.</p>
        </picture>
      </div>
    </div>
    <!-- Go beyond -->
    <div class="p-text-100 bg_one">
      <span class="center-h-v">
        <h3 class="white">Go Beyond</h3>
        <img src="~assets/projects/elevito/go-beyond.svg" alt="go beyond icon" />
      </span>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-wireframe-final-mobile.jpg"
          />
          <img src="~assets/projects/elevito/elevito-wireframe-final.jpg" alt="elevito wireframe" />
          <p class="ps black90">Final Layout: Changed hero image and thumbnail later on.</p>
        </picture>
      </div>
    </div>

    <!-- think deeper -->
    <div class="p-text-100 bg_three">
      <span class="center-h-v">
        <h3 class="white">Think Deeper</h3>
        <img src="~assets/projects/elevito/heart.svg" alt="heart icon" />
      </span>
    </div>

    <!-- Fonts, Colors & Patterns -->
    <pcase
      heading="Fonts, Colors & Patterns"
      para="After layout and content strategy, It was  time to set a theme and colour palette
      It was time to design a simple, clean and elegant showcase website. The accent colour I choose
      was <span class='elevito-text-bg1'>Dark moderate cyan.</span>. Later on while project was in design phase I chamged
      the theme from Cyan to <span class='elevito-text-bg2'>Gradient</span> feel, to make it more contrast and modern feel. I decided to
      use red as theme colour
      "
      theme="theme_elevito"
    />

    <!-- reimagine -->
    <div class="p-text-100 bg_three">
      <span class="center-h-v">
        <h3 class="white">Reimagine</h3>
        <img src="~assets/projects/elevito/reimagine.svg" alt="reimagine icon" />
      </span>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-web-mobile-1-mobile.jpg"
          />
          <img src="~assets/projects/elevito/elevito-web-mobile-1.jpg" alt="elevito ideation" />
          <p class="ps black90">Elevito: Mobile Hero Screen.</p>
        </picture>
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-web-mobile-2-mobile.jpg"
          />
          <img src="~assets/projects/elevito/elevito-web-mobile-2.jpg" alt="elevito ideation" />
          <p class="ps black90">Elevito: Mobile Hero Screen.</p>
        </picture>
      </div>
    </div>

    <div class="p-video-container">
      <div class="center-h-v">
        <video loop width="300" height="auto" autoplay="autoplay ">
          <source src="~assets/projects/elevito/elevito-logo-motion.mp4" type="video/mp4" />
        </video>
        <img src="~assets/projects/elevito/elevito-logo-motion-2.gif" alt="website design" />
      </div>
    </div>

    <!-- elevito web  -->

    <div class="p-image-100-duo">
      <img src="~assets/projects/elevito/elevito-web-1.jpg" alt="website design" />
    </div>

    <div class="p-image-100-duo">
      <img src="~assets/projects/elevito/elevito-web-2.jpg" alt="elevito website design" />
    </div>

    <div class="p-image-100-duo">
      <img src="~assets/projects/elevito/elevito-web-3.jpg" alt="website design uxui" />
    </div>

    <div class="p-image-100-duo">
      <img src="~assets/projects/elevito/elevito-design-system.jpg" alt="website design system" />
    </div>

    <div class="p-image-100-duo">
      <picture>
        <source
          media="(max-width: 600px)"
          srcset="~assets/projects/elevito/elevito-team-pic-mobile.jpg"
        />
        <img
          src="~assets/projects/elevito/elevito-team-pic.jpg"
          alt="elevito team, Saurabh Chandra Rai, shekhar guota, yash srivastav"
        />
      </picture>
    </div>
    <div class="p-image-100-duo">
      <picture>
        <source
          media="(max-width: 600px)"
          srcset="~assets/projects/elevito/elevito-contact-mobile.jpg"
        />
        <img src="~assets/projects/elevito/elevito-contact.jpg" alt="coffee mug mockup" />
      </picture>
    </div>

    <liveLink link="http://elevito.com/" text="Launch Site" />

    <!-- key Focus Area -->

    <div class="keyfocus">
      <div class="content">
        <div class="contain content">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Research</span>
              <span>✔ Ideation</span>
              <span>✔ Taking Design Meetings</span>
              <span>✔ Collaborating with developer</span>
              <span>✔ Creative Direction</span>
              <span>✔ Lots of IceTea</span>
              <span>✔ Exporting Assets</span>
              <span>✔ Wireframing</span>
              <span>✔ Testing with users</span>
              <span>✔ Creating A design System</span>
              <span>✔ Branding</span>
              <span>✔ Identy Design</span>
              <span>✔ Defending UX Decisions</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- conclusion -->

    <div class="Takeaway">
      <div class="contain">
        <h2 class="p-para black50">Learnings</h2>
        <div class="pm black70">
          <p>
            Elevito happen during my college time. Its my greatest learning curve. I did everything that I can do all with love.
            It was time when We did not have even lots of projects to showcase on website, still we managed to show 15 Projects, out of which
            2 projects was fictional, I did them to learn more, and to be creative with them. I took really a lot of time like 2 months just
            showcasing 15 projects, there were times when It became very boring, couldn't give my best, but with everyone support and love
            I never lost enthusiasm and maintained our excitement. Whenever I couldn't do something, there were people whom i could lean on. This
            was all possible because each and everyone came together even in their busiest of time, even when exams were near.
          </p>
        </div>
      </div>
    </div>

    <div class="p-quote contain red">
      <blockquote>
        1 option is better than many.
        When you're communicating your process and solutions to a people who isn't always the key decision-maker,
        it's important to keep your points clear and concise enough for easy re-communication. Even though that person
        may appreciate the extra displayed effort, it can muddy the waters when feedback comes back out.
      </blockquote>
    </div>

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <!-- appreciate button -->

    <Appreciate heading="Thanks for scrolling 3400 PX" subHeading="Click or tap to appreciate." />

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />

        <div class="p-f-p-container">
          <nuxt-link to="/projects/cricbuzz-app-redesign">
            <pfooterp
              projectName="CricBuzz"
              projectCategories="App Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/feeding-trends">
            <pfootern
              projectName="Feeding Trends"
              projectCategories="Web, Branding, Print"
              thumbnail="/ft-thumbnail-2.jpg"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projectfooter from '~/components/projects/projectfooter'
import Pcase from '~/components/projects/pcase'
import Appreciate from '~/components/projects/appreciate'
import Next from '~/components/projects/next'
import Previous from '~/components/projects/previous'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'
import ScrollDown from '~/components/projects/scroll-down'
import LiveLink from '~/components/projects/live-link'

export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
    Appreciate,
    Pcase,
    Projecthero,
    Next,
    Previous,
    Pfooterp,
    Pfootern,
    Allprojectsnav,
    ScrollDown,
    LiveLink
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}
</style>
