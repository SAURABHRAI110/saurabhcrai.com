<template>
  <!-- Elevito work -->
  <div id="scroll-area">
    <smooth-scrollbar>
      <div class="ppnp-container">
        <nuxt-link to="/projects/feeding-trends">
          <next />
        </nuxt-link>
        <nuxt-link to="/projects/awesome-inc">
          <previous />
        </nuxt-link>
      </div>
      <projecthero
        pDate="October 2017 "
        pWebsite="elevito.com"
        pCategory="Product Design"
        pHeading="Elevito: My own endeaver"
        pHeadingcolor="color:#FD3E5B;"
        pSubheading="Designing for a design company."
      />
      <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
      </div>-->

      <ScrollDown />

      <!-- hero image -->
      <div class="p-fe-hero_image">
        <div class="reveal-holder" data-aos="fade-up">
          <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>

          <img src="~assets/projects/elevito/elevito-hero.jpg" alt />
          <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

          <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
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
    Computer Science Eingineering with some of my crazy friends who were so good in web development. Me and friend wanted
    to do something of our own, one night I got a chance to do it under the hat of one of my Senior. It was really mind bending
    for me and very challenging.
    <br />
    <br />
So here I was, crawling Pintrest, going through design agenicies website, looking thirstly for some
    inspiration that could move me. After few days of this or that, I found a specific visuial split in half and
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
        The purpose of the website was to showcase our works we have done so far particlurly me and my fellow designers and through
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
      <!-- theme one  -->
      <div class="p-image-100-container">
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-ideation-1.jpg"
          />
          <img src="~assets/projects/elevito/elevito-wireframe-cyan.jpg" alt="elevito wireframe" />
          <p class="ps black90">Later on it happened I changed the theme.</p>
        </picture>
      </div>

      <!-- theme two -->
      <div class="p-image-100-container">
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/elevito/elevito-ideation-1.jpg"
          />
          <img src="~assets/projects/elevito/elevito-wireframe-final.jpg" alt="elevito wireframe" />
          <p class="ps black90">Final Layout-Changed hero image and thumbnail later on.</p>
        </picture>
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

      <!-- Go beyond -->
      <!-- <div class="p-text-100 bg_one">
      <span class="center-h-v">
        <h3 class="white">Go Beyond</h3>
        <img src="~assets/projects/elevito/go-beyond.svg" alt="go beyond icon" />
      </span>
      </div>-->

      <div class="p-image-100-container">
        <picture>
          <img src="~assets/projects/elevito/elevito-web-mobile-1.jpg" alt="elevito ideation" />
          <p class="ps">I know my writing is all messed up.</p>
        </picture>
      </div>
      <div class="p-image-100-container">
        <picture>
          <img src="~assets/projects/elevito/elevito-web-mobile-2.jpg" alt="elevito ideation" />
          <p class="ps">I know my writing is all messed up.</p>
        </picture>
      </div>

      <!-- think deeper -->
      <!-- <div class="p-text-100 bg_two">
      <span class="center-h-v">
        <h3 class="white">Think Deeper</h3>
        <img src="~assets/projects/elevito/heart.svg" alt="heart icon" />
      </span>
      </div>-->

      <!-- reimagine -->
      <!-- <div class="p-text-100 bg_three">
      <span class="center-h-v">
        <h3 class="white">Reimagine</h3>
        <img src="~assets/projects/elevito/reimagine.svg" alt="reimagine icon" />
      </span>
      </div>-->

      <div class="live-link_container">
        <LiveLink
          link="https://stackoverflow.com/questions/4515124/see-hover-state-in-chrome-developer-tools"
          text="Launch Site"
        />
      </div>

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
                <span>✔ Making Post for social Media</span>
                <span>✔ Lots of IceTea</span>
                <span>✔ Exporting Assets</span>
                <span>✔ Wireframe</span>
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
              After layout and content strategy, It was time to set a
              theme and colour palette It was time to design a simple,
              clean and elegant showcase website. The accent colour I
              choose was Dark moderate cyan.. Later on while project was
              in design phase I chamged the theme from Cyan to Gradient feel,
              to make it more contrast and modern feel.
              I decided to use red as theme colour
            </p>
          </div>
        </div>
      </div>

      <div class="p-quote contain red">
        <blockquote>
          Good design requires good communication, especially from machine to person,
          indicating what actions are possible, what is happening, and what is about to happen.
          Iterate and Iterate and do 100 times untill you get it right. This was the project of iteration. No other way
        </blockquote>
      </div>

      <!-- End Line  -->

      <div class="p-zig-zag-line">
        <div>
          <div class="zigzag"></div>
        </div>
      </div>

      <!-- appreciate button -->

      <Appreciate heading="Thanks for scrolling 3400 PX" subHeading="Click or tap to appreciate." />

      <!-- Project Footer Navigatrion -->

      <div class="project-footer">
        <div class="projects-footer-container">
          <allprojectsnav />

          <div class="p-f-p-container">
            <nuxt-link to="/projects/awesome-inc">
              <pfooterp
                projectName="Awesome Inc"
                projectCategories="Identity, Print"
                thumbnail="/showcase5b.webp"
              />
            </nuxt-link>
          </div>

          <div class="p-f-n-container">
            <nuxt-link to="/projects/feeding-trends">
              <pfootern
                projectName="Feeding Trends"
                projectCategories="Web, Branding, Print"
                thumbnail="/showcase7a.webp"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </smooth-scrollbar>
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
