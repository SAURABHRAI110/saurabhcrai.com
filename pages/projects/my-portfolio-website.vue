<template>
  <div>
    <div class="ppnp-container">
      <nuxt-link to="logofolio">
        <previous />
      </nuxt-link>

      <nuxt-link to="bikeshikes-ecommerce">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:var(--primary-color);">22</span>
          <span>/</span>
          <span>22</span>
        </p>
      </div>
    </div>
    <projecthero
      pDate="December 2017"
      pWebsite="Dreamz"
      pCategory="App Design"
      pHeading="The making of my website."
      pHeadingcolor="color:var(--primary-color);"
      pSubheading="jounery of challenging myself and stepping out of my comfort zone each day."
    />

    <!-- hero image -->
    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div
          class="reveal-block right theme_my_website"
          data-aos="reveal-right"
        ></div>

        <img
          src="~assets/projects/my-website/my-website-hero.jpg"
          alt="website mockup, wen design showcase"
        />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>

    <Preface
      timeframe="June 2019 - December 2019
            <br>7 months"
      tools="Every tools I
      <br> Know"
      role="  UI/UX Designer
            <br>Web Developer"
      team="  Saurabh
            <br>Shekhar & Aman: Supported whenever I got stuck"
    />
    <!-- Preface -->

    <!-- refrence
http://stephencalvillodesign.com/project/prestoq

    -->

    <pcase
      heading="Preface"
      para="The making of this website that you have gone through. I didn't know how to code. So I challenged myself #100DayOfCode and learned it.
      This Website and repository is my journey to learn how to code and along the way make an awesome
      personal portfolio website for showcasing all my Design Works. 100DaysofCode challenge
      turned into a habit and a skill i am prowd of.  Now i like to code now and then.
"
      theme="theme_my_website"
    />
    <!-- Problem -->

    <div class="p-quote contain red">
      <blockquote>
        I took a challenge to code design and code daily for the next 100days
        and call it #100daysOfCode
      </blockquote>
    </div>


    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/Web-mockup.jpg"
              />
              <img src="~assets/projects/my-website/Web-mockup.jpg" />
            </picture>
            <p class="ps black70">Hero Section</p>
          </div>
        </div>
    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/web-numbers-and-technology.jpg"
              />
              <img src="~assets/projects/my-website/web-numbers-and-technology.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>


        <pcase
      heading="CSS Grid over Flex"
      para="I chose CSS Grid instead of Flexbox for coding the layout because Grid makes it easier
      to arrange elements in both rows and columns. Flexbox is great for layouts in one direction,
      but Grid gives more control over the entire structure. This helped me keep everything well-aligned,
      properly spaced, and easy to manage, making the design more organized and flexible for future changes.
"
      theme="theme_my_website"
    />

    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/grid-layout.jpg"
              />
              <img src="~assets/projects/my-website/grid-layout.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>


        
        <pcase
      heading="Page Transition"
      para="One of the major reasons for choosing the Vue.js framework was its ability to handle
      smooth page transitions effortlessly. Vue.js makes it easy to understand and implement
      transitions when navigating from one page to another. I wanted my website to provide a
      seamless experience, allowing users to move between pages without noticeable loading times or delays."
      theme="theme_my_website"
    />

    
    <pcase
      heading="VS Code"
      para="The making of this website that you have gone through. I didn't know how to code. So I challenged myself #100DayOfCode and learned it.
      This Website and repository is my journey to learn how to code and along the way make an awesome
      personal portfolio website for showcasing all my Design Works. 100DaysofCode challenge
      turned into a habit and a skill i am prowd of.  Now i like to code now and then.
"
      theme="theme_my_website"
    />
    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/vs-code-website-structure.jpg"
              />
              <img src="~assets/projects/my-website/vs-code-website-structure.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>
    
    <pcase
      heading="Colors & Typography"
      para="The making of this website that you have gone through. I didn't know how to code. So I challenged myself #100DayOfCode and learned it.
      This Website and repository is my journey to learn how to code and along the way make an awesome
      personal portfolio website for showcasing all my Design Works. 100DaysofCode challenge
      turned into a habit and a skill i am prowd of.  Now i like to code now and then.
"
      theme="theme_my_website"
    />
    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/design-color-typography.jpg"
              />
              <img src="~assets/projects/my-website/design-color-typography.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
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


    <div class="p-quote contain red">
      <blockquote>
        Good design requires good communication, especially from machine to
        person, indicating what actions are possible, what is happening, and
        what is about to happen.
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
          <nuxt-link to="/projects/bikeshikes-ecommerce">
            <pfootern
              projectName="BikeShikes"
              projectCategories="Casestudy, eCommerce"
              thumbnail="/bikeshikes-web-mockup-thumbnail-3.jpg"
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

