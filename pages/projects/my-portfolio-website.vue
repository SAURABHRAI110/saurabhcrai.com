<template>
  <div>
    <div class="ppnp-container">
      <nuxt-link to="logofolio">
        <previous />
      </nuxt-link>

      <nuxt-link to="elevito">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:var(--primary-color);">20</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>
    <projecthero
      pDate="December 2017"
      pWebsite="Dreamz"
      pCategory="App Design"
      pHeading="The making of my website."
      pHeadingcolor="color:var(--primary-color);"
      pSubheading=" jounery of challenging myself and stepping out of my comfort zone each day."
    />

    <!-- hero image -->
    <div class="p-ft-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_my_website" data-aos="reveal-right"></div>

        <img
          src="~assets/projects/my-website/my-website-hero.jpg"
          alt="website mockup, wen design showcase"
        />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>

    <Preface
      timeframe="January
            <br>6 months"
      tools="Every tools I
      <br> Know"
      role="  UI/UX Designer
            <br>Web Developer"
      team="  Lone Wolf:
            <br>Me"
    />
    <!-- Preface -->

    <!-- refrence
http://stephencalvillodesign.com/project/prestoq

    -->

    <pcase
      heading="Preface"
      para="The making of this website. Currently I am working on this project showcase.
"
      theme="theme_my_website"
    />
    <!-- Problem -->

    <pcase
      heading="Purpose"
      para=" To design and develop my personal portfolio website where I can show all my works that I have done in the past
      and to learn  front-end development.
     "
      theme="theme_my_website"
    />

    <div class="p-quote contain red">
      <blockquote>I took a challenge to code design and code daily for the next 100days and call it #100daysOfCode</blockquote>
    </div>
    <!-- <div class="p-quote contain red">
      <blockquote>
        Research is the most important thing a designer need to make before jumping to actually
        designing. I spend almost 70 80 percent of time just doing that.
      </blockquote>
    </div>-->
    <!-- team pic -->

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
          <p>test content</p>
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
      heading="Share Your thoughts "
      subHeading="Damn you really like to scroll. Click Me."
    />

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/logofolio">
            <pfooterp
              projectName="Logofolio"
              projectCategories="logos design so far"
              thumbnail="/logofolio-thumbnail.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/cricbuzz-app-redesign">
            <pfootern
              projectName="CricBuzz"
              projectCategories="App Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
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

