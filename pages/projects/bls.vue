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

          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/tbt-app/tbt-app-hero-mobile.jpg"
            />
            <img src="~assets/projects/tbt-app/tbt-app-hero.jpg" />
          </picture>
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
        heading="The beginning of something amazing"
        para=" This project was all about coming together and collaborating and making something what 25 thousand student of my college
        needed and in the process enjoying each little wins. This project laid the foundation of whatever I am today. Kind of everything I did
        let it be designing App screen, Designing app icon, working with xdpi- xxdpi- mdpi images, prototyping everything, working with developers,
        working with a team of talented people, all I did was my first time. 
        <br> 
        <br>
        Pretty much it was people that were involved in creating a ecosystem that connects thousands of people. Creating a brands that people recognise and appreciate that can helps 
        students to share their talents and get involved. Creating an app might seem just a work of few people, but
        making it possible so that ot helps students is combined effort of a whole team. Well we ere 23 people having skills to make it possible.
        and we did."
        theme="theme_tbt-app"
      />

      <div class="p-quote contain red">
        <blockquote>Alone we can do so little, together we can do so much." --Helen Keller</blockquote>
      </div>

      <!-- slides -->

      <agile>
        <div class="slide">
          <img class="slide-img" src="~assets/projects/tbt-app/tbt-team-pic-1.jpg" alt="slider1" />
        </div>

        <div class="slide">
          <img class="slide-img" src="~assets/projects/tbt-app/tbt-team-pic-2.jpg" alt="slider2" />
        </div>
        <div class="slide">
          <img class="slide-img" src="~assets/projects/tbt-app/tbt-team-pic-3.jpg" alt="slider2" />
        </div>
        <div class="slide">
          <img class="slide-img" src="~assets/projects/tbt-app/tbt-team-pic-4.jpg" alt="slider2" />
        </div>
        <div class="slide">
          <img class="slide-img" src="~assets/projects/tbt-app/tbt-team-pic-5.jpg" alt="slider2" />
        </div>
      </agile>

      <pcase
        heading="Coming to App"
        para=" The Idea was to make an app for students where we can share all the happenings
      from the college. Where students can share their story and we can publish them in App and in our blog. Also to have some interesting stuff and information
      available and easily accessible. It was our seniors Inicciative and we with combined effort made it possible. People that made it possible.
      @Parvej Khan @Dhairy Mohan Shukla @Avaneesh @krishna Mohan @Sakshi @Zainab Siddique @Yash Srivastava @Jayati @Ambika +more
     
                
      "
        theme="theme_tbt-app"
      />

      <pcase
        heading="Making The App Logo"
        para=" The Idea was to make an app for students where we can share all the happenings
      from the college. Where students can share their story and we can publish them in App and in our blog. Also to have some interesting stuff and information
      available and easily accessible. It was our seniors Inicciative and we with combined effort made it possible. People that made it possible.
      @Parvej Khan @Dhairy Mohan Shukla @Avaneesh @krishna Mohan @Sakshi @Zainab Siddique @Yash Srivastava @Jayati @Ambika +more
     
                
      "
        theme="theme_tbt-app"
      />

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

      <pcase
        heading="Final Screens"
        para=" The Idea was to make an app for students where we can share all the happenings
      from the college. Where students can share their story and we can publish them in App and in our blog. Also to have some interesting stuff and information
      available and easily accessible. It was our seniors Inicciative and we with combined effort made it possible. People that made it possible.
      @Parvej Khan @Dhairy Mohan Shukla @Avaneesh @krishna Mohan @Sakshi @Zainab Siddique @Yash Srivastava @Jayati @Ambika +more
     
                
      "
        theme="theme_tbt-app"
      />

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

      <pcase
        heading="Deploying On Play Store"
        para=" The Idea was to make an app for students where we can share all the happenings
      from the college. Where students can share their story and we can publish them in App and in our blog. Also to have some interesting stuff and information
      available and easily accessible. It was our seniors Inicciative and we with combined effort made it possible. People that made it possible.
      @Parvej Khan @Dhairy Mohan Shukla @Avaneesh @krishna Mohan @Sakshi @Zainab Siddique @Yash Srivastava @Jayati @Ambika +more
     
                
      "
        theme="theme_tbt-app"
      />

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

      <pcase
        heading="Publicity"
        para=" The Idea was to make an app for students where we can share all the happenings
      from the college. Where students can share their story and we can publish them in App and in our blog. Also to have some interesting stuff and information
      available and easily accessible. It was our seniors Inicciative and we with combined effort made it possible. People that made it possible.
      @Parvej Khan @Dhairy Mohan Shukla @Avaneesh @krishna Mohan @Sakshi @Zainab Siddique @Yash Srivastava @Jayati @Ambika +more
     
                
      "
        theme="theme_tbt-app"
      />

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
