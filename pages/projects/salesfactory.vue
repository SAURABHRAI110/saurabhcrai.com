<template>
  <div>
    <div class="ppnp-container">
      <nuxt-link to="prepowl">
        <previous />
      </nuxt-link>

      <nuxt-link to="r3">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:#00689b;">14</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>
    <projecthero
      pDate="October 2019"
      pWebsite="Salesfactory.in"
      pCategory="Design and Development"
      pHeading="Powerful solutions for
                your business"
      pHeadingcolor="color:#00689b;"
      pSubheading="Design and Front-end for one of my buddy startup company"
    />

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_salesfactory" data-aos="reveal-right"></div>

        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/salesfactory/salesfactory-hero-mobile.jpg"
          />
          <img src="~assets/projects/salesfactory/salesfactory-hero.jpg" alt />
        </picture>
      </div>
    </div>

    <Preface
      timeframe="5 Days<br> Diwali Holidays"
      tools=" Adobe XD, Photoshop, Illustrator, aftereffects
            <br> VS Code, Git and Github"
      role="  UI/UX Design <br>
              Front-end Development"
      team="  Aman: Research and Development <br>
              Me: Design and Development"
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para="Salesfactory is software solution startup company based in Varanasi started by my School friend.
      They provide custom made software for business for their day to day work. More details on its website
       <a  href='https://salesfactory.in'
            target='_blank'
            rel='noopener'
            title='https://salesfactory.in'><span class='underline-magical'>salesfactory.in</span></a>

            Aman who is awesome in Web development, still wanted my help in salesfactory website frontend development.
            Being so busy in offices and all we agreed to work side by side on this diwali holidays.

       "
      theme="theme_salesfactory"
    />
    <pcase
      heading="Challenge"
      para="
      Making a awesome single page website on Angular. 
      Till date I had my experience on Vue only.
      So switching to Angular was itself a challenge. 
      <br><br>
    Coming up with a layout that work for both the company image and Aman as a person.
    When the person whom you are  making a website sit and watch you do design and code. I find this blessing but keeping
    my cool all the way is another challenge. Things get heated. You know.

    <br><br>
    Also, he had timer going on on his website. Like 4 Days 15 hours 25 min 38 sec. Who does this.
      "
      theme="theme_salesfactory"
    />

    <div class="p-quote contain red">
      <blockquote>
        When the person whom you are making a website sit and watch you do design and code. I find this blessing but keeping
        my cool all the way is another challenge.
      </blockquote>
    </div>

    <div class="contain">
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

          <img src="~assets/projects/salesfactory/salesfactory-behind.jpg" />
          <p class="ps black">-- Bheind The scene: Me and Aman --</p>
        </div>
      </div>
    </div>

    <pcase
      heading="Research and Ideation"
      para="
      I started with going through similar product websites and some of competitors websites and noting all the
      good and bad things they did with their existing product. At the point of developing this salesfactory
      website. the main product was in continuous development and still had to go through series of deployment and testing. So
      I don't have lots of actual product to show on its website. So we agreed to show a screenshot or two and keeping thing as simple as its gets.
      <br>
      <br>
      Still being a Designer I cant just agree to make something that i am not gonna be proud later. Everyone was celebrating Diwali but we Aman and me were busy grinding in 
      a room with screens and drinking coffee and moving forward as fast as possible. It was fun. We both loved how things are moving forward with making one section of website, designing it and coding it.
      to see how it looks on different devices. What worked we kept and what not we deleted.

      "
      theme="theme_salesfactory"
    />

    <!-- <div class="p-quote contain red">
      <blockquote>
        Building products is a creative and sometimes messy process. It requires entrepreneurs and product managers
        to balance coming up with moonshot and ambitious ideas, while prioritizing them to make sure they are
        aligned with the mission of their company and solving real scalable problems.
      </blockquote>
    </div>-->

    <div class="contain">
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/salesfactory/salesfactory-wireframe.jpg"
            />
            <img src="~assets/projects/salesfactory/salesfactory-wireframe.jpg" />
          </picture>
          <p class="ps black">-- Requirement and Basic Wireframe --</p>
        </div>
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/salesfactory/salesfactory-moodboards-mobile.jpg"
          />
          <img src="~assets/projects/salesfactory/salesfactory-moodboards.jpg" />
        </picture>
        <p class="ps black70">--Moodboards--</p>
      </div>
    </div>

    <pcase
      heading="Design and Code"
      para="
      I started with the hero section of the website. Designed it then coded it in Angular with 
      pure CSS. I didn't see any point adding UI framework like Which my friend Insisted but I knew We don't need it.
      Moving forward we pretty much liked the hero section then. Moved to design a basic layout of product section.
      I used Icons from thenounproject.com and then editing its width, height, border in Adobe XD to make all Icons
      consistent through out the website. Every Icons assets used in Website is SVG. 
      <br><br>
      In all section I used Flex for implementing all those layouts, I initially thought using grid but the layout was simple. Flex was
      all that required and also there no problem making it all responsive. Wherever required I added media queries in images, font sizes and padding and margin.
      

      <br><br>
      Enough getting into using tech terms. Lets just see the final website.

      "
      theme="theme_salesfactory"
    />

    <div class="contain">
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

          <img src="~assets/projects/salesfactory/salesfactory-code-screen.jpg" />
          <p class="ps black70">--Angular VS Code Screen--</p>
        </div>
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/salesfactory/salesfactory-web-hero-mobile.jpg"
          />
          <img src="~assets/projects/salesfactory/salesfactory-web-hero.jpg" />
        </picture>
        <p class="ps black70">-Hero Section-</p>
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/salesfactory/salesfactoryl-web-fullpage-mobile.jpg"
          />
          <img src="~assets/projects/salesfactory/salesfactoryl-web-fullpage.jpg" />
        </picture>
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
          />
          <img src="~assets/projects/salesfactory/salesfactoryl-colors-typo.jpg" />
        </picture>
      </div>
    </div>

    <pcase
      heading="Technology"
      para="
      --Html<br>
      --CSS<br>
      --Angular Framework<br>



      "
      theme="theme_salesfactory"
    />

    <liveLink link="http://salesfactory.in/" text="Launch Site" />

    <!-- key Focus Area -->

    <div class="keyfocus">
      <div class="content">
        <div class="contain">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Research</span>
              <span>✔ Creative Direction</span>
              <span>✔ UI Design</span>
              <span>✔ Front-end Development</span>
              <span>✔ Testing on devices</span>
              <span>✔ Live collaboration</span>
              <span>✔ Learned Angular Framework</span>
              <span>✔ Logo Design</span>
              <span>✔ Wireframe</span>
              <span>✔ Celebrated Diwali</span>
              <span>✔ Assets Optimisation</span>
              <span>✔ Animating Preloader</span>
              <span>✔ Defending UX Decisions</span>
              <span>✔ Fun</span>
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
            It was a very small project. It was challenging designing and then coding and having a deadline of just some days.
            I also got my hopes high. I guess how small or big a projects is enjoying and having fun during those hours is crucial to
            a successful projects. Doing work for a friend is never a bad Idea. Its fun and stressbuster from all those heavy projects thats has to be done in meantime.
            Everyone need a break from a long projects. This for me was a kind of break i needed to bring my focus.
          </p>
        </div>
      </div>
    </div>

    <div class="p-quote contain red">
      <blockquote>I guess it doesn't matter if the project you are doing is small or big but enjoying and having fun during those hours matters and is crucial to a successful projects. Thanks💙</blockquote>
    </div>

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
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
          <nuxt-link to="/projects/prepowl">
            <pfooterp
              projectName="Prepowl"
              projectCategories="Web Design and Development"
              thumbnail="/prepowl-thumbnail-blue.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/r3">
            <pfootern
              projectName="Read Recite Repeat"
              projectCategories="Social Media, logo"
              thumbnail="/r3-thumbnail.webp"
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
    LiveLink
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}
</style>
