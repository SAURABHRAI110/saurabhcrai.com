<template>
  <!-- r3 work -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/awesome-inc">
        <next/>
      </nuxt-link>
      <nuxt-link to="/projects/mr-irritating">
        <previous/>
      </nuxt-link>
    </div>
    <projecthero
      pDate="Oct 2018 "
      pWebsite="Read Recite Repeat"
      pCategory="Print Design"
      pHeading="Sharing thoughts."
      pHeadingcolor="color:#EE605C;"
      pSubheading="to thousands of people Campaign Design."
    />
    <div class="p-dz-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_r3" data-aos="reveal-right"></div>
        <img src="~assets/projects/r3/r36.jpg" alt="R3" align>
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
      theme="theme_r3"
    />

    <!-- Problem -->
    <pcase
      heading="Problem"
      para="  1. The first thing that I came around was they don't have an existing branding.
        <br>2. They did have and existing logo but that cant be used on the web. It was raster, big. Their
        existing
        was cool for the moment but that can not be used to used on web.
        <br>3. No copywrite, no information architecture."
      theme="theme_r3"
    />

    <div class="reveal-holder" data-aos="fade-up">
      <div class="reveal-block theme_r3 right" data-aos="reveal-right"></div>
      <img class="p-image-100" src="~assets/projects/fe/fe4.jpg">
      <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
    </div>

    <!-- Branding -->

    <!-- appreciate button -->

    <Appreciate/>

    <div class="project-footer">
      <projectfooter/>
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
export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
    Appreciate,
    Pcase,
    Projecthero,
    Next,
    Previous
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}
</style>
