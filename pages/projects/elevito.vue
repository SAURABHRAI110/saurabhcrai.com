<template>
  <!-- Elevito work -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="/projects/feeding-trends">
        <next />
      </nuxt-link>
      <nuxt-link to="/projects/awesome-inc">
        <previous />
      </nuxt-link>
    </div>
    <projecthero
      pDate="October 2017 "
      pWebsite="elevito.com"
      pCategory="Product Design"
      pHeading="Elevito: My own endeaver "
      pHeadingcolor="color:#FD3E5B;"
      pSubheading="Designing for a design company."
    />
    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>

        <img src="~assets/projects/elevito/elevito-hero.jpg" alt />
        <!-- <img class="fe-hero2" src="~assets/projects/fe/fe1.png" alt> -->

        <!-- <img src="~assets/projects/fe/fe1.png" alt> -->
      </div>
    </div>
    <Preface
      timeframe=" October 2018- March 2019
    <br />5 Month"
      tools=" Adobe Creative Suite
    <br />Sketch, Flinto, Zeplin sdwdswdw wdwd"
      role=" UI/UX
    <br />Research, Content Strategy"
      team=" Shekhar, Govind, Fahad, Saurabh
    <br />Yash, Zainab and me"
    />
    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" Elevito- Coming up with this name was challenging in itself. Elevito was supposed to be a Designing company based in India.
            We have been working from days when I got into my 7th semester of Engineering. Elevito- A team dedicated to producing only the best quality conteant
            any brand would deserves.


    "
      theme="theme_elevito"
    />

    <!-- Backstory -->

    <pcase
      heading="From Lucknow with love ❤"
      para=" I started thinking of Elevito back at end of September 2017 while I was still In Lucknow, pursuing
    Computer Science Eingineering with some of my crazy friends who were so good in web development. Me and friend wanted
    to do something of our own, one night I got a chance to do it under the hat of one of my Senior. It was really mind bending
    for me and very challenging.
    <br />
    <br />
So here I was, crawling Pintrest, going through design agenicies website, looking thirstly for some
    inspiration that could move me. After few days of this or that, I found a specific visuial split in half and
    that's basically where the whole concept came from."
      theme="theme_elevito"
    />

    <!--       When we work on something that we have to decide on our own about every aspects of a product. It gets more challenging than ever.
      Then we are in constant dilemma of this or that. Iteration seems to never stop. Its get frustrating.
      Though we are not restricted by anything, its also fun and our mind happen to work round the clock to make decisions.

        <br> <br>Making something stand out and gives a feel of creativity and wowness. 
        was cool for the moment but that can not be used to used on web.
    <br>3. No copywrite, no information architecture."-->

    <div class="p-quote contain red">
      <blockquote>
        It was an opportunity for us to challenge our creativity,
        without fixing any constraint or barrier.
      </blockquote>
    </div>

    <p class="contain black90">
      The purpose of the website was to showcase our works we have done so far particlurly me and my fellow designers and through
      that, to get clients and to convince them that we are the people they are looking far.
    </p>

    <!-- Full height Text Go Beyond-->

    <div class="p-text-100 bg_one">
      <span class="center-h-v">
        <h3 class="white">Go Beyond</h3>
        <img src="~assets/projects/elevito/go-beyond.svg" alt="go beyond icon" />
      </span>
    </div>

    <div class="p-text-100 bg_two">
      <span class="center-h-v">
        <h3 class="white">Think Deeper</h3>
        <img src="~assets/projects/elevito/heart.svg" alt="heart icon" />
      </span>
    </div>
    <div class="p-text-100 bg_three">
      <span class="center-h-v">
        <h3 class="white">Reimagine</h3>
        <img src="~assets/projects/elevito/reimagine.svg" alt="reimagine icon" />
      </span>
    </div>

    <!-- Reasearch -->
    <pcase
      heading="Research"
      para="   After branding a lot become clear about colour font and imagery that will be used for website. We have
        used images that filming eye have clicked through their camera and some free stock photos that have
        meaning and value to infinity, beyond, and that fit to our red and dark black theme."
      theme="theme_elevito"
    />

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
