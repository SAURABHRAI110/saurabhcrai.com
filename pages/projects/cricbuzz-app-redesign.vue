<template>
  <!-- Feeding Trends -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="wonder-wares">
        <previous />
      </nuxt-link>

      <nuxt-link to="elevito">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:#0088FF;">04</span>
          <span>/</span>
          <span>22</span>
        </p>
      </div>
    </div>

    <projecthero
      pDate="November 2019 "
      pWebsite="CricBuzz"
      pCategory="App Design"
      pHeading="CricBuzz app redesign concept"
      pHeadingcolor="color:#0088FF;"
      pSubheading="An app redesign already used by millions."
    />

    <!-- hero image -->
    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div
          class="reveal-block right theme_cricbuzz"
          data-aos="reveal-right"
        ></div>

        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/cricbuzz/cricbuzz-hero-mobile.jpg"
          />
          <img
            src="~assets/projects/cricbuzz/cricbuzz-hero.jpg"
            alt="woman t-shirt, woman t-shirt mockup"
            align
          />
        </picture>
      </div>
    </div>

    <Preface
      timeframe=" November 2019
            <br>2 Days"
      tools="Adobe XD
            <br>Adobe Photoshop"
      role="  UX/UI Design
            <br>Content Strategist"
      team=" Me and few of my friends
            <br> who helped me understand some silly q."
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" Cricbuzz app is used by millions of user. To redesign something that that
      is already have a existing user base is itself is a challenge. I started with
      installing the app from play store and then carefully following each navigation. 
      I personally used this app previously some years ago not now.
      So much has already been changed and improved from then.
      "
      theme="theme_cricbuzz"
    />

    <div class="contain">
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div
            class="reveal-block right"
            data-aos="reveal-right"
            data-aos-once="true"
          ></div>
          <picture>
            <img
              src="~assets/projects/cricbuzz/cricbuzz-logo.jpg"
              alt="Crick buzz app redesign"
            />
          </picture>
        </div>
      </div>
    </div>

    <pcase
      heading="Challenge"
      para=" 1. Strict Deadline <br>
      2. Did it to learn <br>
      3. Only Two days to showcase UI/UX Process <br>
      4. Time constraint to do heuristic research
  
        
     "
      theme="Research"
    />

    <div class="p-quote contain red">
      <blockquote>
        Cricbuzz app is used by millions of user. To redesign something that
        that is already have a existing user base is itself is a challenge.
      </blockquote>
    </div>

    <!-- Desighn -->

    <pcase
      heading="Research"
      para="With limited time following a typical design process was challenge. When it came to user research I could not do more.
      But I did talk to some friends and asked their existing experience of
      using Cricbuzz app and their pain-points.

      <br>
      <br>
      
      I then began with careful observation of each screen, completing the desired task, going back and forward,
      taking notes on my initial thoughts like what's missing and what can be
      done to make user experience more intuitive.

      <br>
      <br>

      One thing that really needed to be redesign was app navigation. Most of the action element was outside
      natural area of the phone. This made it very difficult to perform even simple task with one hand held phone.
      I really admire Samsung about what they did with their One UI making everything accessible from your thumb 🖐️.
      Taking cues from it I began to restructure and redesign
      cricbuzz app.

      
        
     "
      theme="theme_cricbuzz"
    />

    <!-- Desighn -->

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/cricbuzz/cricbuzz-existing-screens-mobile.jpg"
          />
          <img
            src="~assets/projects/cricbuzz/cricbuzz-existing-screens.jpg"
            alt="cricbuzz app screenshots"
          />
          <p class="ps">Some cricbuzz app screenshots</p>
        </picture>
      </div>
    </div>

    <!-- Problems and initial Findings -->
    <pcase
      heading="Problems and Initial Findings"
      para=" 
      1. No clear structure and navigation flows <br>
      2. Cluttered UI with very less white space <br>
      3. Navigation problems <br>
      4. Not one handed friendly <br>
      5. Bad content architecture and readability issue can be seen here and there. <br>
      6. Very little visual feedback while going from one screen to another.<br>
      "
      theme="theme_cricbuzz"
    />

    <!-- Desighn -->
    <pcase
      heading="UX Principles"
      para=" Through out designing the app I followed these UX Principles specially
      user touch behavior and Fitts's Law.

            
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo cricbuzz-ux-image">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>

        <img
          src="~assets/projects/dreamz/dreamz-laws-of-ux.jpg"
          alt="ux principles and laws"
        />
        <p class="ps black">Applied UX Principles</p>
      </div>
    </div>

    <!-- Problems -->
    <pcase
      heading="Wireframing"
      para="Focusing on findings and insights, I did some rough wireframe with
      just enough information to get started for few important
      screen including those features which I thought should be there. The feasibility of these features are debatable. Don't mind my handwriting.
      Its way better originally. 
               
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <img
            src="~assets/projects/cricbuzz/cricbuzz-wireframing.jpg"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>

    <!-- User Interface -->
    <pcase
      heading="User Interface"
      para="I began designing screens first for onboarding experience, highlighting some basic features.
      Worked on a minimalistic logo to give it a clean, bold, and simple compositions with only one or two colors.
     Existing logo works well though. Not spending much time on typography. Most times Montserrat is my default choice,
     it's pretty nice font with a nice large x-height and a lot more character than Arial or Helvetica. 
     It has beautiful curves and well rounded corners which works well on most design.
      Also there is something me and my friends say, when in doubt use Montserrat.               
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <img
            src="~assets/projects/cricbuzz/cricbuzz-xd-all-screen.jpg"
            alt="cricbuzz app redesign ui screen"
          />
          <p class="ps black70">Adobe XD- App screens</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="Onboarding Experience"
      para="In the existing app there was no onboarding experience and very little
          personalization. Personalization can be used for collecting data in terms
          of business and better user experience. It Can be used for push notification. Its application
          can include user to be notified of favorite matches,
          teams and stories from his/her favorite player etc. 
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/cricbuzz/cricbuzz-ui-onboarding-mobile.jpg"
          />
          <img
            src="~assets/projects/cricbuzz/cricbuzz-ui-onboarding.jpg"
            alt="cricbuzz app redesign onboarding experience screen"
          />
          <p class="ps black70">App Onboarding experience</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="Home"
      para="Home is now less cluttered with more white space and better readability.
      Often times we just wanted to see just the latest scores and so the first thing on
      home he will focus will be on bigger typos i.e. the score following player current
      run and related information.

     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/cricbuzz/cricbuzz-ui-home-mobile.jpg"
          />
          <img
            src="~assets/projects/cricbuzz/cricbuzz-ui-home.jpg"
            alt="cricbuzz app redesign home screen"
          />
          <p class="ps black70">App Home Screen Instances</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="Other App Screen"
      para="Every Interactive elements is placed in the Active area of the mobile wherever possible
      so even a person who is holding phone in one hand can navigate with thumb easily just like in Samsung new one UI.
      With new search feature user can easily go through topics, related videos, player profile etc. 

      All menu CTA is placed in active area so user can navigate very easily
      even on bigger screen.

     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/cricbuzz/cricbuzz-ui-other-mobile.jpg"
          />
          <img
            src="~assets/projects/cricbuzz/cricbuzz-ui-other.jpg"
            alt="cricbuzz app redesign ui screen"
          />
          <p class="ps black70">App other screen UI</p>
        </picture>
      </div>
    </div>

    <!-- User Interface -->
    <pcase
      heading="Interactive Prototype"
      para="Made a rapid prototype showing interactions with elements, sleek animations using Adobe XD auto-animate feature. Here I have to say I totally love XD auto-animate feature.
      It does a lot with very little effort. Specially showing those micro-interactions. The app have a lot of areas where the user experience can be enriched more.
      These all took me two days.
.  
               
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <img
            src="~assets/projects/cricbuzz/cricbuzz-xd-prototype-screen.jpg"
            alt="cricbuzz app redesign prototype"
          />
          <p class="ps black70">Adobe XD-Prototype</p>
        </picture>
      </div>
    </div>

    <!-- <div class="contain">
      <no-ssr>
        <vimeo-player
          class="vimeo"
          ref="player"
          :options="{ responsive: true }"
          :video-id="372189216"
          @ready="onReady"
          :autoplay="false"
          :player-height="320"
          :player-width="640"
          loop="1"
        />
    </no-ssr>-->

    <div class="cricbuzz-prototype">
      <div style="padding:800px 0 0 0;position:relative;">
        <iframe
          src="https://player.vimeo.com/video/372189216?title=0&byline=0&portrait=0"
          style="position:absolute;top:50%;left:50%;max-width:500px;height:100%; transform:translate(-50%, -50%)"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>

    <pcase
      heading="Conclusion"
      para=" When it come to cricket app, theres a lot of data that goes into UI. There's just so many edge case scenario.
      There a lot of things and conditions that these design doesn't justify and have area where with good research and planning, app
      can be made even more awesome for all cricket lover. 
               
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div
          class="reveal-block right"
          data-aos="reveal-right"
          data-aos-once="true"
        ></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/cricbuzz/cricbuzz-mockup-mobile.jpg"
          />
          <img
            src="~assets/projects/cricbuzz/cricbuzz-mockup.jpg"
            alt="cricbuzz app redesign mockup"
          />
        </picture>
      </div>
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
              <span>✔ Downloaded Apps</span>
              <span>✔ Taken screenshots</span>
              <span>✔ User Interface</span>
              <span>✔ User Experience</span>
              <span>✔ Basic Wireframe</span>
              <span>✔ Interactive Prototype</span>
              <span>✔ Made a simple logo</span>
              <span>✔ Rapid Prototyping</span>
              <span>✔ Made Mockups</span>
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
            The most challenging part of any project which I have experienced
            myself is even starting it. Once it get started, the next challenge
            is deciding which problem to solve. As a UX designer, we are driven
            by curiosity and a burning desire to solve problems. The more
            insights we uncover, the more problems we will identify — and the
            harder it becomes to settle on just one. During research and design
            phase I got into loop of deciding what to give more time and what
            not to. If I have focused on all parts of Cricbuzz app, it would not
            have been possible to finish it all in 2 days at all. Focus is key.
          </p>
        </div>
      </div>
    </div>

    <div class="p-quote contain red">
      <blockquote>
        It’s inevitable that we uncover new pain-points along the way, but we
        can’t change track every time this occurs. The challenge lies in staying
        focused, staying on the track.
      </blockquote>
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
          <nuxt-link to="/projects/wonder-wares">
            <pfooterp
            projectName="WonderWares"
              projectCategories="App | eCommerce"
              thumbnail="/wonder-wares-app-thumbnail-2.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/elevito">
            <pfootern
              projectName="Elevito"
              projectCategories="Web design, Branding, Print"
              thumbnail="/elevito-thumbnail.jpg"
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

.cricbuzz-ux-image {
  filter: hue-rotate(45deg);
}
.cricbuzz-ux-image img {
  filter: saturate(1.4);
}

.vimeo {
  /* height: 100%; */
  width: 300px;
  margin: 20px;
}
</style>
