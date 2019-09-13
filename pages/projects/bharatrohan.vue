<template>
  <!-- Bhratrohan -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/dear-zindagi">
        <next />
      </nuxt-link>
      <nuxt-link to="/projects/thebbdtimes">
        <previous />
      </nuxt-link>
    </div>
    <projecthero
      pDate="August 2018 "
      pWebsite="BharatRohan"
      pCategory="App, Admin, Web"
      pHeading="Empowering Communication between farms and farmers"
      pHeadingcolor="color:#11A78E;"
      pSubheading="Bulding app and web"
    />
    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_br" data-aos="reveal-right"></div>

        <img src="~assets/projects/bharatrohan/BharatRohan3.jpg" alt />
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
      para=" Filming eye is a film production studio based in Lucknow. They do photography, short films, music
        videos, advertisements shoots. Basically things that can be captured with camera and of course there
        existing team skills. Filming eye have got some headlines in news in the past about their commendable
        work and nominations of their videos in different film competitions. The team comprised of talented who
        with their camera and skills was able to produce breathtaking works. People knew me already. So they
        kind of wanted me to work on their website."
      theme="theme_br"
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

    <div class="p-zig-zag-line">
      <div>
        <img src="~assets/svg/zig-zag-2.svg" alt="zig zag line svg" />
      </div>
    </div>

    <!-- appreciate button -->

    <Appreciate
      heading="Lets do something awesome together."
      subHeading="Don't forget to appreciate."
    />

    <!-- Project Footer Navigation -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/r3">
            <pfooterp
              projectName="R3"
              projectCategories="Social Media, Logo"
              thumbnail="/showcase4.webp"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/elevito">
            <pfootern
              projectName="Elevito"
              projectCategories="Web, Branding, Print"
              thumbnail="/showcase6.webp"
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
    Allprojectsnav
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}
</style>
