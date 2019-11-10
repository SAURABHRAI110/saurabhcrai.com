<template>
  <!-- Feeding Trends -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="hello-color">
        <previous />
      </nuxt-link>

      <nuxt-link to="my-portfolio-website">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:#ff6584;">19</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>
    <projecthero
      pDate="December 2017"
      pWebsite="Dreamz"
      pCategory="App Design"
      pHeading="Logofolio- Collection of logos"
      pHeadingcolor="color:#ff6584;"
      pSubheading=" All logos I made so far from 2014 to 2019"
    />

    <!-- hero image -->
    <div class="p-ft-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_logofolio" data-aos="reveal-right"></div>

        <img
          src="~assets/projects/logofolio/logofolio-hero-2.jpg"
          alt="logo design process, logo sketch"
        />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>

    <Preface
      timeframe="5 Years
            <br>and counting"
      tools=" Adobe Illustrator, Adobe XD
            <br> and sometimes Adobe Photoshop"
      role="  Graphic Designer
            <br>Convincing Client"
      team="  Lone Wolf 
            <br> i.e. Me"
    />
    <!-- Preface -->

    <!-- refrence
http://stephencalvillodesign.com/project/prestoq

    -->

    <pcase
      heading="Preface"
      para=" These are the logos I have designed so for from my college days to professional days. Most of these works are
      client work, done these logos for a broader project like website or app or for branding. Some of them are for friends and
      some I designed just to learn the basics of logo and to try some new trending design stuff.
      <br><br>
     These logos represent the Final design. They all have gone through a design process, research, ideation, sketching, basic layout to final prototype.
     Many series of iterations and redesign. Some logos took only one days to come up and some took months when there was creative freedom and
     no time constrain. You can also check my logofolio on

    <a  href='https://www.behance.net/saurabhcrai'
            target='_blank'
            rel='noopener'
            ><span class='underline-magical'>Behance.</span></a>
"
      theme="theme_logofolio"
    />

    <div class="p-logofolio-container logofolio-1">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/aerospace.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Aerospace | For web brandong | 2018</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-2">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/awesome-inc.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div>
            <img src="~assets/projects/logofolio/awesome-inc-bg-3.jpg" alt />
          </div>
          <p class="ps">Awesome Inc | Agency | 2018</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-3">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/dear-zindagi.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Dear Zindagi | Children NGO | 2017</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-4">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/thinkink.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">LLF | Literature | 2017</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-5">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/elevito.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Elevito | Design Agency | 2017</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-6">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/filming-eye.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div>
            <img src="~assets/projects/logofolio/filming-eye-bg.jpg" alt />
          </div>
          <p class="ps">Filming Eye | Movie and Short Films | 2018</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-8">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/mr-irritating.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Mr. Irritating | Novel | 2017</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-7">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/llf@3x.png"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div>
            <img src="~assets/projects/logofolio/llf-bg.jpg" alt />
          </div>
          <p class="ps">LLF | Literature Society | 2016</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-9">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/prayaas-2.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Prayaas | College NGO Community | 2016</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-10">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/projects-academia.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Pro. Academia | For website logo | 2017</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-11">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/dualeaf.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Dua Leaf| For learning | 2015</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-12">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/rajendra@3x.png"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">Rajendra | Politics | 2016</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-14">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/tbt.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">TBT | College Media Community | 2015</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-13">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/suncheetah.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">SunCheetah | for a friend | 2017</p>
        </div>
      </div>
    </div>

    <div class="p-logofolio-container logofolio-15">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/wingtech@3x.png"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">WingTech | Computer Science Department | 2015</p>
        </div>
      </div>
    </div>
    <div class="p-logofolio-container logofolio-16">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/tbt-app.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">TBT App | Media | 2015</p>
        </div>
      </div>
    </div>
    <div class="p-logofolio-container logofolio-17">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <div class="logofolio-bg">
          <img
            src="~assets/projects/logofolio/r3-logo.svg"
            alt="creative team pic, team pic, team, designers, developers"
          />
          <div></div>
          <p class="ps">R3 | Literature | 2018</p>
        </div>
      </div>
    </div>

    <div class="p-quote contain red">
      <blockquote>
        There are three responses to a piece of design - yes, no and WOW! Wow is the one I am for.
        Logo design is not my strong suite. I olny hope you like these. Say WOW, try it now. WOW!
      </blockquote>
    </div>

    <!-- End Line  -->

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <!-- appreciate button -->
    <Appreciate
      heading="Thanks for scrolling."
      subHeading="Loved all these logos? Give a lot of clap."
    />

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/hello-color">
            <pfooterp
              projectName="Hello Color"
              projectCategories="Book Design"
              thumbnail="/hello-colors-thumbnail.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/my-portfolio-website">
            <pfootern
              projectName="My Portfolio Website"
              projectCategories="Web design and Development"
              thumbnail="/my-website-thumbnail.jpg"
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
