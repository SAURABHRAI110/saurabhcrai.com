<template>
  <!-- Elevito work -->
  <div id="scroll-area">
    <smooth-scrollbar>
      <div class="ppnp-container">
        <nuxt-link to="/projects/feeding-trends">
          <next />
        </nuxt-link>
        <nuxt-link to="/projects/bharatrohan">
          <previous />
        </nuxt-link>
      </div>
      <projecthero
        pDate="September 2015"
        pWebsite="TBT App"
        pCategory="App Design"
        pHeading="App for students"
        pHeadingcolor="color:#0F2E47;"
        pSubheading="connecting talent in college"
      />
      <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
      </div>-->

      <ScrollDown />

      <!-- hero image -->
      <div class="p-fe-hero_image">
        <div class="reveal-holder" data-aos="fade-up">
          <div class="reveal-block right theme_tbt-app" data-aos="reveal-right"></div>

          <img
            src="~assets/projects/tbt-app/tbt-app-hero.jpg"
            alt="tht bbd times, babu banarasi das, college app"
          />
          <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

          <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
        </div>
      </div>
      <Preface
        timeframe=" September 2015 - October 2015
    <br /> 2 month, Week Dat only"
        tools=" Adobe Illutrator
    <br />Adobe Photoshop"
        role=" UI/UX
    <br />Research, Content Strategy"
        team=" Me-UX, Shekhar-Dev
    <br />Yash/Zainab-Managing"
      />

      <!-- Refrence
      http://stephencalvillodesign.com/project/linkedin-elevate
      http://stephencalvillodesign.com/project/fullscreen
      
      -->
      <!-- Preface -->
      <pcase
        heading="Preface"
        para=" 
        I was on the team for almost two years as the sole/lead designer. During that time I
        worked with company co-founders, developers, content-writers, designers to completely overhaul the
        design to create new  design system, create new features to fit our
        customers needs, and most importantly,
        design new features to create a better experience for every project I worked on. FT Event was one of the company Internal Project.
<br><br>
        FT Event is about event website where user can book tickets and create event. 
        Using FT Events to the Beat website, users can register for the events, Book tickets,
        Create Event and manage the event or ticket
        from its dash board. In addition to finding information on past and future events,
        event results, image gallery, charity event organizers,
        participating musicians, register for the Feeding Trends exclusive advetisement, and more.

        <br>
        <br>
        
        Feeding Trends- Events is in Development stage right now, I delivered the design already,
      This casestudy is all about that. Because its in development stage, the final product most probably will be different from what  I designed.
      So lets hope, FT Events came as awesome as we have thought so. Shekhar and team is working really hard right now.
      "
        theme="theme_tbt-app"
      />

      <div class="p-quote contain red">
        <blockquote>
          The idea was to make Feeding Trends to the Beat website as a one-stop-destination
          for all-inclusive information and updates on everything associated with the event.
        </blockquote>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source media="(max-width: 600px)" srcset="~assets/projects/tbt-app/tbt-app-icons.jpg" />
            <img src="~assets/projects/tbt-app/tbt-app-icons.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-logo-mobile.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-logo.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-screen-1.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-screen-1.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-screen-2.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-screen-2.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-screen-3.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-screen-3.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-playstore.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-playstore.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-mockup-mobile.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-mockup.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-poster-2.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-poster-2.jpg" />
          </picture>
        </div>
      </div>

      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-screen-mockup.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-screen-mockup.jpg" />
          </picture>
        </div>
      </div>

      <!-- Backstory -->

      <!-- key Focus Area -->

      <div class="keyfocus">
        <div class="content">
          <div class="contain">
            <h2 class="p-para black50">Stuff I did</h2>

            <div class="pm black70">
              <div class="kf-layout">
                <span>✔ Research</span>
                <span>✔ Ideation</span>
                <span>✔ Taking Design Meetings</span>
                <span>✔ Collaborating with Content writers</span>
                <span>✔ Making Post for social Media</span>
                <span>✔ Drank Lots of Coffee</span>
                <span>✔ Taken Stress</span>
                <span>✔ Made Wireframe</span>
                <span>✔ Discussed potential User Journey</span>
                <span>✔ Worked in nights</span>
                <span>✔ Branding</span>
                <span>✔ Identy Design</span>
                <span>✔ Defending UX Decisions</span>
                <span>✔ Pop and un-pop things</span>
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
        </blockquote>
      </div>

      <!-- End Line  -->

      <div class="p-zig-zag-line">
        <div>
          <img src="~assets/svg/zig-zag-2.svg" alt="zig zag line svg" />
        </div>
      </div>

      <!-- appreciate button -->

      <Appreciate heading="Thanks for scrolling 3400 PX" subHeading="Click or tap to appreciate." />

      <!-- Project Footer Navigatrion -->

      <div class="project-footer">
        <div class="projects-footer-container">
          <allprojectsnav />

          <div class="p-f-p-container">
            <nuxt-link to="/projects/dear-zindagi">
              <pfooterp
                projectName="Dear Zindagi"
                projectCategories="Brochure, Identity"
                thumbnail="/showcase2.jpg"
              />
            </nuxt-link>
          </div>

          <div class="p-f-n-container">
            <nuxt-link to="/projects/r3">
              <pfootern
                projectName="R3"
                projectCategories="Social Media, logo"
                thumbnail="/showcase4.jpg"
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
