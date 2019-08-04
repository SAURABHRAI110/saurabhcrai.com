<template>
  <!-- Feeding Trends -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/thebbdtimes">
        <next />
      </nuxt-link>
      <nuxt-link to="/projects/feeding-trends">
        <previous />
      </nuxt-link>
    </div>
    <projecthero
      pDate="December 2017 "
      pWebsite="feedingtrends.com"
      pCategory="Product Design"
      pHeading="Content that matters "
      pHeadingcolor="color:#1D98B6;"
      pSubheading="Stories that make you think and rethink."
    />

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ft" data-aos="reveal-right"></div>

        <img src="~assets/projects/ft/ft3.jpg" alt />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>

    <Preface
      timeframe=" April 2018- May 2018
            <br>2 Month"
      tools="   Adobe Creative Suite
            <br>Sketch, Flinto, Zeplin sdwdswdw wdwd"
      role="  UI/UX Desiner
            <br>Marketing"
      team="  UI/UX Desiner
            <br>Marketing"
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
      theme="theme_ft"
    />

    <!-- Problem -->
    <pcase
      heading="Problem"
      para="  1. The first thing that I came around was they don't have an existing branding.
        <br>2. They did have and existing logo but that cant be used on the web. It was raster, big. Their
        existing
        was cool for the moment but that can not be used to used on web.
        <br>3. No copywrite, no information architecture."
      theme="theme_ft"
    />

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
          <nuxt-link to="/projects/mr-irritating">
            <pfooterp
              projectName="Mr. Irritating"
              projectCategories="Print, Social Media"
              thumbnail="/showcase3.webp"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/awesome-inc">
            <pfootern
              projectName="Awesome Inc"
              projectCategories="Identity, Print"
              thumbnail="/showcase5b.webp"
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
