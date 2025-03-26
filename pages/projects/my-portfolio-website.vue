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
      pDate="Jun-Dec 2019"
      pWebsite="Portfolio Website"
      pCategory="Website"
      pHeading="Building My Personal Portfolio: A Designer’s Leap into Development"
      pHeadingcolor="color:var(--primary-color);"
      pSubheading="Jounery of challenging myself to code and stepping out of my comfort zone each day for 7 months."
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
      para="The making of this website has been a journey in itself. I didn’t know how to code, so
      I challenged myself with #100DaysOfCode and learned it along the way. You can find the daily update on my Instgram under saved stories.
      This website and its repository document my journey—learning to code while building an awesome personal portfolio to
      showcase my design work. What started as a challenge turned into a habit and a skill I’m proud of.
      Now, I enjoy coding every now and then.
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


<!--     
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
        </div> -->

         
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/code-screen-mockups.jpg"
              />
              <img src="~assets/projects/my-website/code-screen-mockups.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>   

    
        <pcase
      heading="Designing, Coding & Growings"
      para="This portfolio is more than just a showcase. It's the result of seven months of continuous
      learning, designing, and coding. From zero coding knowledge to over 500 commits and 100K+ lines of code,
      every step has been a lesson. The #100DaysOfCode challenge turned into a habit, shaping this website into
      what it is today. Built with Vue.js, Nuxt.js, and various modern web technologies, it’s a testament to persistence,
      growth, and the power of iteration.
"
      theme="theme_my_website"
    />
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


<!-- 

        
        <pcase
      heading="Page Transition"
      para="One of the major reasons for choosing the Vue.js framework was its ability to handle
      smooth page transitions effortlessly. Vue.js makes it easy to understand and implement
      transitions when navigating from one page to another. I wanted my website to provide a
      seamless experience, allowing users to move between pages without noticeable loading times or delays."
      theme="theme_my_website"
    /> -->


    <pcase
      heading="Colors & Typography"
      para="When it came to defining the look and feel of my portfolio, I wanted a color palette that felt bold yet balanced.
      The mix of vibrant reds, deep blacks, and soft neutrals helped create a contrast that’s both striking and easy on the eyes.
      The black shades added depth, making sure the text and UI elements stood out just right.
      <br>
      <br>

For typography, Circular Std was my go-to choice for its clean and modern vibe,
while Mistral added a playful, handwritten touch here and there. I played around with different weights 
and styles to keep things consistent and readable. Every little detail, colors, fonts, and even hover
interactions—was fine-tuned to make the experience smooth and visually engaging.
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
    

        <pcase
      heading="Layout & Visuals"
      para="This portfolio is built for a smooth, enjoyable experience. My main focus was getting the
      hierarchy right and maintaining a clean, consistent layout. I experimented with many card
      variations before settling on one. Even the main heading copy took days of iteration to get just right.
      Most of the project took shape during development. 
      I designed only essential assets in XD and refined everything directly in code. Clean layouts,
      easy navigation, and subtle animations make it both functional and visually engaging across all devices.
"
      theme="theme_my_website"
    />
    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/screens-main-pages.jpg"
              />
              <img src="~assets/projects/my-website/screens-main-pages.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>
    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/screens-projects-pages.jpg"
              />
              <img src="~assets/projects/my-website/screens-projects-pages.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>

        

    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/hero-section-mockup.jpg"
              />
              <img src="~assets/projects/my-website/hero-section-mockup.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>

    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/all-screens-browser-mode.jpg"
              />
              <img src="~assets/projects/my-website/all-screens-browser-mode.jpg" />
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
      heading="Development Architecture"
      para="I built my portfolio on Nuxt.js for its powerful file-based routing and performance optimizations.
      The structure follows Nuxt’s conventions while keeping customization flexible:
        <ul>
        <li>Pages & Routing – Each .vue file in /pages automatically becomes a route, with dynamic paths for project case studies.</li>
        <li>Layouts System – Base templates (like default.vue) handle shared elements (header, footer) while allowing per-page overrides.
          It helped me to quickly layout similar pages,
          like all Projects Pages, All Main Page, whenever there is an error etc.</li>
        <li>Plugins & Modules – Integrated GSAP (which I dropped later), AOS, and SEO modules cleanly via nuxt.config.js. Plugins were easy to setup and use. This way I have experimented what worked for me and what not quickly.</li>
      </ul>
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
      heading="Website Key Features"
      para="Every element of my portfolio was designed to create a seamless, engaging experience.
      From playful hover effects that make thumbnails come alive to subtle scroll animations that guide exploration,
      I focused on crafting intuitive interactions. The responsive design ensures flawless performance across devices,
      while smart image loading delivers crisp visuals without compromising speed.
      Thoughtful touches like the scroll progress bar and PWA capabilities enhance usability,
      and behind-the-scenes optimizations keep everything running smoothly. Each feature balances
      aesthetic polish with functional purpose—making the portfolio not just visually appealing,
      but genuinely enjoyable to use.
"
      theme="theme_my_website"
    />
    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/web-features-and-interactive.jpg"
              />
              <img src="~assets/projects/my-website/web-features-and-interactive.jpg" />
            </picture>
            <!-- <p class="ps black70">Hero Section</p> -->
          </div>
        </div>



    <pcase
        heading="Learning and Reflection"
        para="
          Learning to code changed the way I think about design. It made me realize that great design isn’t just
          about how things look but also about how they work. Understanding development constraints helped me create
          interfaces that are both visually appealing and easy to build. I learned the value of efficiency,
          precise prototyping, and solving UX problems at their core rather than just covering them up with aesthetics.
          <br>
          <br>
         Looking back, this journey wasn’t just about learning a new skill—it was about shifting my mindset.
         I now see design and development as two sides of the same coin, working together to bring ideas to life.
         This experience has given me a new level of confidence, knowing that I can bridge the gap between
         creativity and execution.
     "
        theme="theme_wonderwares"
      />

    
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/my-website/code-moments.jpg"
              />
              <img src="~assets/projects/my-website/code-moments.jpg" />
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

    <!-- End Line  -->
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

