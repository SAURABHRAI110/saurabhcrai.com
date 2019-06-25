<template>
  <!-- Feeding Trends -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/thebbdtimes">
        <next/>
      </nuxt-link>
      <nuxt-link to="/projects/feeding-trends">
        <previous/>
      </nuxt-link>
    </div>
    <projecthero
      pDate="December 2017 "
      pWebsite="feedingtrends.com"
      pCategory="Product Design"
      pHeading="Content that matters "
      pHeadingcolor="color:#1D98B6;"
      pSubheading="Stories That make you think and rethink.."
    />
    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ft" data-aos="reveal-right"></div>

        <img src="~assets/projects/ft/ft3.jpg" alt>
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

    <img class="p-image-100" src="~assets/projects/fe/fe4.jpg">

    <!-- Reasearch -->
    <pcase
      heading="Research"
      para="   After branding a lot become clear about colour font and imagery that will be used for website. We have
        used images that filming eye have clicked through their camera and some free stock photos that have
        meaning and value to infinity, beyond, and that fit to our red and dark black theme."
      theme="theme_ft"
    />

    <!-- photo grid -->
    <pcase heading="Photography/Imagery"/>
    <div class="contain">
      <div class="p-fe_photogrid">
        <img src="~assets/projects/fe/gallery1.jpg" alt>
        <img src="~assets/projects/fe/gallery-2.jpg" alt>
        <img src="~assets/projects/fe/gallery-3.jpg" alt>
        <img src="~assets/projects/fe/gallery-4.jpg" alt>
        <img src="~assets/projects/fe/gallery-5.jpg" alt>
        <img src="~assets/projects/fe/gallery-6.jpg" alt>
        <img src="~assets/projects/fe/gallery-7.jpg" alt>
        <img src="~assets/projects/fe/gallery-8.jpg" alt>
        <img src="~assets/projects/fe/gallery-9.jpg" alt>
        <img src="~assets/projects/fe/gallery-10.jpg" alt>
        <img src="~assets/projects/fe/gallery11.jpg" alt>
        <img src="~assets/projects/fe/gallery-6.jpg" alt>
      </div>
    </div>

    <!-- Branding -->

    <pcase
      heading="Branding"
      para=" My first approach to understanding medical residents is through emphasizing with their experiences
             by conducting user interviews and participating in field studies at Imagine Clinic. This consisted
             of asking qualitative questions such as their workflow to even the intimate details of their
             personal life."
      theme="theme_ft"
    />

    <div class="contain">
      <div class="p-fe_branding-grid">
        <div>
          <img src="~assets/projects/fe/branding1.jpg">
        </div>
        <div>
          <img src="~assets/projects/fe/branding2.jpg">
        </div>
        <div class="big">
          <img src="~assets/projects/fe/branding3.jpg">
        </div>
        <div class="big">
          <img src="~assets/projects/fe/branding5.png">
        </div>
        <div class="big">
          <img src="~assets/projects/fe/branding6.png">
        </div>
      </div>
    </div>

    <!-- Web Design -->
    <pcase
      heading="Web Design"
      para=" My first approach to understanding medical residents is through emphasizing with their experiences
            by conducting user interviews and participating in field studies at Imagine Clinic. This consisted
            of asking qualitative questions such as their workflow to even the intimate details of their
            personal life."
      theme="theme_ft"
    />

    <!-- First Iteration -->
    <pcase
      heading="First Iteration"
      para=" The first iteration was designed by my junior designer. Hw worked really hard and came up with a
              great layout and which made almost most of the things we needed in and that we don't needed.
              <br><br>
              Before being given into development there was this huge gap of like 6 months. After this long time
              when I looked with back and and with my fellow designer Aakash. We didn't like it much. A lot of
              thing needed to retouch. The works seems sloppy. So all the things needed retouch. In a way I
              changed almost everything expect the dark theme and colour and content architecture."
      theme="theme_ft"
    />

    <img class="p-image-100" src="~assets/projects/fe/feweb1.jpg">

    <!-- Final Design -->
    <img class="p-image-100" src="~assets/projects/fe/fe-mockup.jpg">

    <div class="p-fe_final-design">
      <pcase
        heading=" Final Design"
        para=" The first iteration was designed by my junior designer. Hw worked really hard and came up with a great
                  layout and which made almost most of the things we needed in and that we don't needed.
                  <br><br>
                  Before being given into development there was this huge gap of like 6 months. After this long time when
                  I looked with back and and with my fellow designer Aakash. We didn't like it much. A lot of thing needed
                  to retouch. The works seems sloppy. So all the things needed retouch. In a way I changed almost
                  everything expect the dark theme and colour and content architecture."
        theme="theme_ft"
      />
    </div>
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
