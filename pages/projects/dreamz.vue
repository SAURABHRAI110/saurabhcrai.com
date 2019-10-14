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
      pDate="December 2017"
      pWebsite="Dreamz"
      pCategory="App Design"
      pHeading="Fullfilling those little dreams"
      pHeadingcolor="color:#4FCEC4;"
      pSubheading=" App that hepls you earn money and in a way fulfill your dreams "
    />

    <!-- hero image -->
    <div class="p-ft-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_dreamz" data-aos="reveal-right"></div>

        <img
          src="~assets/projects/dreamz/dreamz-hero-cyan-2.jpg"
          alt="floating mockup, web mockup, pad, mobile, mockup"
        />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>

    <Preface
      timeframe="January
            <br>10 Days"
      tools="  Every F thing I know
            <br>Sketch, From A to Z"
      role="  UI/UX Desiner
            <br>Researcher"
      team="  Lone Wolf
            <br>Me"
    />
    <!-- Preface -->

    <!-- refrence
http://stephencalvillodesign.com/project/prestoq

    -->

    <pcase
      heading="Preface"
      para="Creating the interface of the time.
      "
"
      theme="theme_dreamz"
    />
    <!-- Problem --> 
    <pcase
      heading="From humble Beginnings"
      para=" It all started in 2017, Yash Srivastava and Zainab Siddique,
    my seniors, co-founded feeding trends. I was in 6th semester, enjoying some home time during summer vacation, got a call from
    Yash sir and I was asked to do a logo design for FeedingTrends. I remember it was a long call. Well moving forward, logo designing
    is tough, I took my time and did textual logo, used a  Sans font, outlined it, played around arrow, to make it feel like 
    trendy stuff and yeah Finished. We moved forward and setup  implemented logo on Facebook, Instagram and on stuff.
    FT got recognized and people started sharing our stuff and yeah it was great start.
    <br><br>
    Later on after 2 month I joined FeedingTrends. While still managing my time around
    college and working at feeding Trends Office. Bunking Classes just to work on outgoing projects at FT Office or from my flat.
  
        
     "
      theme="theme_dreamz"
    />

    <div class="p-quote contain red">
      <blockquote>
        Bunking clsses to work on outgoing projects while still managing college assignments and all. It was Beginnings
        of something great.
      </blockquote>
    </div>

    <div class="live-link_container" style="background-color:var(--secondary-color);">
      <LiveLink
        link="https://events.feedingtrends.com"
        text="Launch Site | events.feedingtrends.com"
      />
    </div>
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

    <div class="p-quote contain red">
      <blockquote>Dreams.</blockquote>
    </div>

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
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
