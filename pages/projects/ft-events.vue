<template>
  <!-- ft-event work -->
  <div>
    <div class="ppnp-container">
      <nuxt-link to="dreamz">
        <previous />
      </nuxt-link>

      <nuxt-link to="thebbdtimes">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:rgb(0, 143, 214);">07</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>
    <projecthero
      pDate="March 2019 "
      pWebsite="feedingtrends.com"
      pCategory="Product Design"
      pHeading="Plateform to create, share, find and attend events in India"
      pHeadingcolor="color:rgb(0, 143, 214);"
      pSubheading="My job: Enriching the portal with best user experience."
    />
    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <ScrollDown />

    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ft-event" data-aos="reveal-right"></div>
        <picture>
          <source media="(max-width: 600px)" srcset="~assets/projects/ft-event/ft-event-hero.jpg" />
          <img src="~assets/projects/ft-event/ft-event-hero.jpg" alt />
        </picture>
      </div>
    </div>

    <Preface
      timeframe=" Feb 2019- March 2019
              <br />1 month"
      tools=" Adobe XD, Adobe Illustrator
              <br /> Dropbox Paper, Flinto, markers"
      role=" UI/UX
              <br />Research, Content Strategy"
      team=" Me-UX, Shekhar-Dev
              <br />Yash/Zainab-Managing"
    />

    <!-- Refrence
      http://stephencalvillodesign.com/project/linkedin-elevate
      http://stephencalvillodesign.com/project/fullscreen
      
    -->
    <!-- Preface -->
    <pcase
      heading="events.feedingtrends.com"
      para=" 
       Founded in 2017, Feeding Trends is a young company that provides digital content and web-based industry solutions.

Feeding Trends website supports organisers via its cost effective event ticketing solutions, and engages people via articles & stories published on it.
      "
      theme="theme_ft-event"
    />
    <pcase
      heading="Preface"
      para=" 
        I was on the team for almost two years as the lead designer. During that time I
        worked with company co-founders, developers, content-writers, designers to completely overhaul the
        design to create new  design system, create new features to fit our
        customers needs, and most importantly,
        design new features to create a better experience for every project I worked on. FT Event was one of the company Internal Project.
        <br><br>
        FT Event is about event website where user can book tickets and create event. 
        Using FT Events to the Beat website, users can register for the events, Book tickets,
        Create Event and manage the event or ticket
        from its dash board. In addition to finding information on past and future events,
        event results, image gallery, charity event organizers,
        participating musicians, register for the Feeding Trends exclusive advertisement, and more.

        <br>
        <br>
        
        Feeding Trends- Events is in Development stage right now, I delivered the design already,
      This case study is all about that. Because its in development stage, the final product most probably will be different from what  I designed.
      So lets hope, FT Events came as awesome as we have thought so. Shekhar and team is working really hard right now.
      "
      theme="theme_ft-event"
    />

    <div class="p-quote contain red">
      <blockquote>
        The idea was to make Feeding Trends to the Beat website as a one-stop-destination
        for all-inclusive information and updates on everything associated with the event.
      </blockquote>
    </div>

    <!-- Backstory -->

    <pcase
      heading="Challenge 🥴 "
      para="Well, the most challenging part was the make the event portal feel like the part of feeding Trends,
        and yet make it different. Got it! I hope mot. Well me too. Because Feeding Trends have a already existing website and brand guidelines.
        It was really challenging. The existing website and the event portal have different purpose and target user. 
        "
      theme="theme_ft-event"
    />

    <!--       When we work on something that we have to decide on our own about every aspects of a product. It gets more challenging than ever.
      Then we are in constant dilemma of this or that. Iteration seems to never stop. Its get frustrating.
      Though we are not restricted by anything, its also fun and our mind happen to work round the clock to make decisions.

        <br> <br>Making something stand out and gives a feel of creativity and wowness. 
        was cool for the moment but that can not be used to used on web.
    <br>3. No copywrite, no information architecture."-->

    <p class="contain just-para black90">
      Also, there is many competitor in the same niche, and i was not easy to have something that is similar yet
      simple and intuitive and make user come to website and let them discover events and book tickets.
    </p>

    <!-- <img
        class="p-image-100"
        src="~assets/projects/ft-event/ft-event-mockup-web1.jpg"
        alt="ft-event web mockup"
    />-->
    <!-- Ideation and Research -->

    <pcase
      class="ft-event-research-sec"
      heading="Ideation and Research"
      para="After some deep research and coming with a strategy of monetizing the same and the discussing all the
        possible scenario how a user will interact with the website. We came up with website architecture and site map.
        
        <br><br>
        On our past experience, the problem and challenges faced during making feedingtrends content website, 
        We decided to follow google material guidelines and so that development and design can go long way and we can easily
        implement a functional even website.
        
        "
      theme="theme_ft-event"
    />

    <pcase
      heading="Design Sprint"
      para="After the initial findings and research, I decided to coordinate a Google Design Sprint to get the team aligned
      on how we could get our users to share event on other existing platform and make the whole experience as intuitive as possible.
      I was able to get folks from product, engineering, customer success, and marketing in a room for 5 days.
        <br><br>
        Together we ideated, sketched, discussed, designed, and tested our concept with customers to get concrete data.
        
        "
      theme="theme_ft-event"
    />

    <client-side>
      <agile>
        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/ft-event/ft-events-ideation-1.jpg"
            alt="feeding trends ideation"
          />
        </div>

        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/ft-event/ft-events-ideation-2.jpg"
            alt="feeding trends ideation"
          />
        </div>
      </agile>
    </client-side>

    <div class="p-quote contain red">
      <blockquote>
        Is it the right page? Does the page have the content which I am looking for?
        Do they have anything better, if this is not what I’m looking for? What is expected of me now?
      </blockquote>
    </div>

    <p class="contain just-para black90">
      I asked these questions again and again, discussed it, researched existing solutions, came up with different possibilities. Started
      designing UI in XD which I was sure of and as I got further, things got easier and easier.
    </p>
    <!-- Art direction Design-->

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/ft-event/ft-event-user-personas.jpg"
            alt="user personas for event"
          />
          <p class="ps black90">User Personas</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="THREE USER TYPES"
      para="On our research and findings we concluded that the portal will have 3 user types i.e. Normal visitor, event creator, admin. Normal Users (Who is going ti visit the website and buy
      tickets for events), Creator (Who will publish event thorough our platform), and then Admin(who will
      manage the event listing, tickets sale authorize users and curators). <br><br>
        Each role has different objectives and even slightly different experiences.
        <br>
        <br>

         We came up with a simple habit loop. Discover, Share with friends, Book ticket for them, Go to event, Repeat.
      "
      theme="theme_ft-event"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/ft-event/ft-site-architecture.jpg"
            alt="website architecture, website user journey"
          />
          <p class="ps black90">Site architecture</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="Normal Visitor or user"
      para="Normal user who will visit the website where he/she will browse through listed event. Select a event, will 
      create an account and buy tickets using payment portal. His tickets details will be added to his user profile dashboard.
     


      "
      theme="theme_ft-event"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/ft-event/ft-event-habit-loop.svg" alt="user habit lopp" />
          <p class="ps black90">Normal user habit loop</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="The Creator Experience"
      para="The event creator is the Entertainment Provider in a sense. They Choose what type of
        event are they organizing, what are their possible audience,  and push the event to audience.
        They can see the performance of their event, Sales record etc. on the ft event website.
      "
      theme="theme_ft-event"
    />
    <pcase
      heading="The Admin Experience"
      para="Admins at the company are then able to dig into demographic insights
        on the types of professionals that are engaging with their content the most and
        how they could leverage their event creator to reach a particular audience.

        <br><br>
        The first tab of the Analytics page for admins let them see how their curators
        are performing. Is there enough broadcasted event for their users to share? Which categories
        are listed to the most, and what's getting the most engagements?
      "
      theme="theme_ft-event"
    />

    <pcase
      heading="User Interface Design"
      para="Putting everything together from the research, user personas, wireframes. I moved the begin
      to design UI Elements like tabs, search, links, contents. 


        <br><br>
        I was very clear to me to always provide next steps so that users can deduce naturally, whatever their context.
        Because the best interface is no interface, to offer users the most direct,
        accessible, comfortable control (and best experience).
      "
      theme="theme_ft-event"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/ft-event/ft-event-all-web-pages.jpg"
            alt="website web pages design"
          />
          <p class="ps black90">All pages</p>
        </picture>
      </div>
    </div>

    <pcase
      heading="Constantly learning"
      para="
          Being such a small team, we were able to work incredibly agile.
          We were always getting feedback from our customers and making changes
          to better suit their needs (and our business goals of course). I did multiple sessions
          of interviews for both conceptual ideas and usability testing. 
      "
      theme="theme_ft-event"
    />

    <pcase
      heading="The Smile says It all"
      para="
        The Project was long, challenging, pressure was immense. Each day there was something that put things on the edge.
        For me designing was not straight ride but a rollercoaster ride. We kept our head down and hope high.  Any mistake from my side means, its gonna come in development
        phase. At the time I was also learning Basic HTML CSS. And leaning itb helps my to move forward fast as I communicated better with
        developer. Anyway The time we spend to build up the this project was a great leaning for everyone. 
            
            "
      theme="theme_ft-event"
    />

    <div class="contain">
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
          <picture>
            <source media="(max-width: 600px)" srcset="~assets/projects/ft-event/ft-event-team.jpg" />
            <img src="~assets/projects/ft-event/ft-event-team.jpg" alt="feeding trends team" />
            <p class="ps white">FT Event Team</p>
          </picture>
        </div>
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
              <span>✔ Collaborating with Content writers</span>
              <span>✔ User personas</span>
              <span>✔ Drank Lots of Coffee</span>
              <span>✔ Taken Stress</span>
              <span>✔ Made Wireframe</span>
              <span>✔ Structured User Journey</span>
              <span>✔ Worked in nights</span>
              <span>✔ Branding</span>
              <span>✔ UI Design</span>
              <span>✔ Defending UX Decisions</span>
              <span>✔ Pop and un-pop things</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="live-link_container" style="background-color:var(--secondary-color);">
      <LiveLink
        link="https://events.feedingtrends.com"
        text="Launch Site | events.feedingtrends.com"
      />
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

    <!-- appreciate button -->

    <Appreciate heading="Thanks for scrolling 3400 PX" subHeading="Click or tap to appreciate." />

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />

        <div class="p-f-p-container">
          <nuxt-link to="/projects/dreamz">
            <pfooterp
              projectName="Dreamz"
              projectCategories="App Design, Prototype"
              thumbnail="/dreamz-thumbnail-cyan.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/thebbdtimes">
            <pfootern
              projectName="The BBD Times"
              projectCategories="Branding"
              thumbnail="/tbt-thumbnail.jpg"
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
