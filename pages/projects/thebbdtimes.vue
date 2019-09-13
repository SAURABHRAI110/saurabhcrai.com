<template>
  <!-- The BBD Times -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/bharatrohan">
        <next />
      </nuxt-link>
      <nuxt-link to="/projects/feeding-trends">
        <previous />
      </nuxt-link>
    </div>
    <projecthero
      pDate="2015-217 "
      pWebsite="TheBBDTimes"
      pCategory="Branding"
      pHeading="Connect . Express . Grow"
      pHeadingcolor="color:#0088ff;"
      pSubheading="Connecting 25k students Across 4 colleges"
    />

    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_tbt" data-aos="reveal-right"></div>

        <img src="~assets/projects/tbt/tbt-hero.jpeg" alt />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>

    <Preface
      timeframe=" August 2015-April 2018 <br>
                  3 Years"
      tools="   Photoshop, Illustrtor, After Effects <br>
                Corel Draw, Adobe XD"
      role="  Graphic Designer, Social Media <br>
              Manager, Photographer"
      team="  Team of 26 talented people
              Content Writers, <br> Web and App Developers, Marketer and Designer"
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" BBD Times is my proudest work so far and It will be forever. It is one that got me where I am today. BBD Times story will make an awesome case study where I learn everything
      that"
      theme="theme_tbt"
    />

    <!-- Problem -->
    <pcase
      heading="Problem"
      para="  1. The first thing that I came around was they don't have an existing branding.
        <br>2. They did have and existing logo but that cant be used on the web. It was raster, big. Their
        existing
        was cool for the moment but that can not be used to used on web.
        <br>3. No copywrite, no information architecture."
      theme="theme_tbt"
    />

    <img class="p-image-100" src="~assets/projects/fe/fe4.jpg" />

    <!-- Reasearch -->
    <pcase
      heading="Research"
      para="   After branding a lot become clear about colour font and imagery that will be used for website. We have
        used images that filming eye have clicked through their camera and some free stock photos that have
        meaning and value to infinity, beyond, and that fit to our red and dark black theme."
      theme="theme_tbt"
    />

    <pcase
      heading="Branding"
      para=" My first approach to understanding medical residents is through emphasizing with their experiences
             by conducting user interviews and participating in field studies at Imagine Clinic. This consisted
             of asking qualitative questions such as their workflow to even the intimate details of their
             personal life."
      theme="theme_tbt"
    />

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

    <Appreciate
      heading="Did we just become best friends"
      subHeading="Friends appreciate. Keep clapping"
    />

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
