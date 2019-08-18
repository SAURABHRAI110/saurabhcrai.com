<template>
  <!--awesome inc work -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/elevito">
        <next />
      </nuxt-link>
      <nuxt-link to="/projects/r3">
        <previous />
      </nuxt-link>
    </div>
    <projecthero
      pDate="March 2018 "
      pWebsite="Awesome Inc"
      pCategory="Branding"
      pHeading="Making awesome things more awesome."
      pHeadingcolor="color:#A05EE5;"
      pSubheading=" Branding work for a digital design company."
    />
    <div class="p-dz-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ai" data-aos="reveal-right"></div>
        <img src="~assets/projects/awesome-inc/ai-hero2.jpg" alt="R3" align />
        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>
    <Preface
      timeframe=" Mid March 2018- April 2018
            <br>1 Month"
      tools="  Adobe Photoshop, Adobe Illustrator
            <br>Pen, paper"
      role="  Branding Works
            <br>from start to end"
      team=" Only me
            <br>It was lonely time"
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para="Awesome Inc is a Digital Design Company who have just established their
      first office in lucknow like us and was ready to launch their website. On they way
      they realized they needed a good look and feel. It happened to that I was their man
      to do the task about beatifying them.
      <br><br>

      With unrestricted design requirements, I was able to let my imagination run wild.
      The branding is sleek and modern, while remaining unique from all competitors in the same space.

      <br> <br>

      I spent a lot of time with Awesome Inc Logo, Colours, accompanying service brochures,
      carefully developing them from scratch. This resulted in a consistent brand touch-points and brought
      their high-quality approach to every step of the client's experience."
      theme="theme_ai"
    />

    <!-- Challenge -->
    <pcase
      heading="Challenge"
      para="  1. Choosing The right colour
        <br>2. Designing logo is not my genre.
        <br>3. No existing design, Everything were to be started from scratch."
      theme="theme_ai"
    />
    <!-- Challenge -->
    <pcase
      heading="Choosing the right color"
      para="  When It comes to choosing the right colour. I am very natural. After some 
            some research and discovery  I decided to go with gradient and and just any gradient but
            with very vibrant colour. Inspiration to this gradient came from a post from envato. There
            is saying trust your instincts and when it comes to design we got to make so many little decision
            that we got to trust our instincts all the time. After confirming the colors and minor retouching and getting
            the approval I started a working on the visuals."
      theme="theme_ai"
    />

    <img class="p-image-100" src="~assets/projects/awesome-inc/branding4.jpg" />
    <!-- <img class="p-image-100" src="~assets/projects/awesome-inc/ai-hero2.jpg" />
    <img class="p-image-100" src="~assets/projects/awesome-inc/awesome-inc-8.jpg" />-->
    <img class="p-image-100" src="~assets/projects/awesome-inc/awesome-inc-vc.jpg" />
    <img class="p-image-100" src="~assets/projects/awesome-inc/awesome-inc-identity.jpg" />
    <img class="p-image-100" src="~assets/projects/awesome-inc/t-shirt.jpg" />
    <img class="p-image-100" src="~assets/projects/awesome-inc/awesome-inc-awesome.jpg" />

    <!-- 
    <div class="reveal-holder" data-aos="fade-up">
      <div class="reveal-block theme_ai right" data-aos="reveal-right"></div>
      <img class="p-image-100" src="~assets/projects/fe/fe4.jpg" />
    </div>-->

    <!-- Branding -->

    <!-- appreciate button -->

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

    <!-- Appreciate section -->

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
