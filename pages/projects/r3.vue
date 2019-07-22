<template>
  <!-- r3 work -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/awesome-inc">
        <next />
      </nuxt-link>
      <nuxt-link to="/projects/mr-irritating">
        <previous />
      </nuxt-link>
    </div>
    <projecthero
      pDate="July 2018 "
      pWebsite="Read Recite Repeat"
      pCategory="Social Media"
      pHeading="Sharing thoughts."
      pHeadingcolor="color:#EE605C;"
      pSubheading="to thousands of people Campaign Design."
    />
    <div class="p-dz-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_r3" data-aos="reveal-right"></div>f
        <img src="~assets/projects/r3/r36.jpg" alt="R3" align />
        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>
    <Preface
      timeframe=" July 2018
            <br> 2 Week"
      tools="   Adobe Illustrator,
            <br>Love and Time,"
      role="  Graphic Designer
            <br>Researcher"
      team=" Md. Fahad
            <br>Me"
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para="R3 is a platform for the writers/artists to express their thoughts.
      Share them with the world - expressions that will connect with everyone,
      rhythms that will resonate with every heart.
      In three beautiful linguistics - English, Hindi & Urdu, with Love R3."
      theme="theme_r3"
    />

    <!-- Problem -->
    <pcase
      heading="Logo"
      para="  1. The first thing that I came around was they don't have an existing branding.
        <br>2. They did have and existing logo but that cant be used on the web. It was raster, big. Their
        existing
        was cool for the moment but that can not be used to used on web.
        <br>3. No copywrite, no information architecture."
      theme="theme_r3"
    />

    <div class="reveal-holder" data-aos="fade-up">
      <div class="reveal-block theme_r3 right" data-aos="reveal-right"></div>
      <img class="p-image-100" src="~assets/projects/r3/r3-logo-with-bg.svg" alt="R3 logo" />
      <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
    </div>

    <!-- Design System -->
    <div class="r3-design-system">
      <pcase
        heading="Design System"
        para="  1. The first thing that I came around was they don't have an existing branding.
          <br>2. They did have and existing logo but that cant be used on the web. It was raster, big. Their
          existing
          was cool for the moment but that can not be used to used on web.
          <br>3. No copywrite, no information architecture."
        theme="theme_r3"
      />
    </div>
    <!-- design system image -->
    <div class="p-image-100-duo">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-design-system.jpg" />
      </picture>
    </div>

    <!--  -->

    <div class="p-image-100-container">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/R34.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <!-- Social media Instgram and facebook -->
    <!-- Problem -->
    <pcase
      heading="Social Media: Insta and FB"
      para=" Setting up everything We have done so far applying everything
      on fb and insta dp and facebook cover"
      theme="theme_r3"
    />

    <div class="p-image-100-container">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-logo-bg.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <div class="p-image-100-container">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-insta-mobile-single.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <div class="p-image-100-container">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-insta-mobile-multi.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <div class="p-image-100-container">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-insta-mockup.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <div class="p-image-100-duo">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-insta-post.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <div class="p-image-100-duo">
      <picture>
        <source media="(max-width: 600px)" srcset="~assets/projects/r3/r3-design-system.jpg" />
        <img src="~assets/projects/r3/r3-sharing-thoughts.jpg" />
        <p class="ps">R3: facebook cover</p>
      </picture>
    </div>

    <!-- Branding -->

    <!-- appreciate button -->

    <Appreciate />

    <div class="project-footer">
      <projectfooter />
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
