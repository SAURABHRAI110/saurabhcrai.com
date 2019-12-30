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
          <span style="color:#7800FE;">07</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>

    <projecthero
      pDate="December 2019 "
      pWebsite="Meeting Room"
      pCategory="Product Design"
      pHeading="Effortlessly manage meetings from wherever you are"
      pHeadingcolor="color:#7800FE;"
      pSubheading="One solutions for scheduling meeting and booking meeting room in big office building."
    />
    <!-- <div class="p-fe-hero_image">
      <img src="~assets/projects/fe/fe2.png" alt>
      <img src="~assets/projects/fe/fe1.png" alt>
    </div>-->

    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_meeting-rooms" data-aos="reveal-right"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/meeting-rooms/meeting-rooms-hero-mobile.jpg"
          />
          <img
            src="~assets/projects/meeting-rooms/meeting-rooms-hero.jpg"
            alt="meeting rooms mockup, ipad mockup,booking meeting rooms"
          />
        </picture>
      </div>
    </div>

    <Preface
      timeframe=" December 2019
              <br />2 sleepless Night"
      tools=" Adobe XD, Adobe Illustrator, Dropbox paper
              <br /> Adobe Photoshop, Pen & paper"
      role=" Creative Direction, Research
              <br />User Interface & User Experience"
      team=" Myself 
              <br />only"
    />

    <!-- Refrence
      http://stephencalvillodesign.com/project/linkedin-elevate
      http://stephencalvillodesign.com/project/fullscreen`
      
    -->
    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" 
      Communication in large offices is a challenge, and booking some space to run
      a meeting or have a private call shouldn’t be difficult. This project was a challenge to myself. I had to understood the porblem come up with
      a solution within 2 Days. It was to design a user interface
      for web platform to let someone know whether a meeting room is free, how long for,
      and allow the person to book on the spot if necessary. This application is intended
      for use by anybody who might need a meeting room in a large office. One should consider
      that the people requiring the room might need it urgently, there may already be people
      in the room, they might only need it for 10-15 minutes, and that there might be more
      than one meeting room in the building...
      
      "
      theme="theme_meeting-rooms"
    />
    <pcase
      heading="Discovery"
      para=" 
        This was an exciting project personally. In my past experience I whenever required took team
        meeting with developers, fellow designers, project managers, clients and whosoever needed to discuss the project
        give input on the design, Give ideas etc. Meetings are the very important part of the process, still
        designers, developers avoid it of possible, they hate to see their time wasted like. Meeting are considered a hindrance in the workflow.
        So, that people take meetings seriously and attend it on time and give their value to the subject.
        My thought process for this project move around this thing mostly.
      "
      theme="theme_meeting-rooms"
    />

    <div class="p-quote contain red">
      <blockquote>
        I came up with that meeting rooms should not be just about booking rooms, but more than this.
        It should be taken as an important part of the process and company culture where everyone feels
        valued and attent meeting time the best of it.
      </blockquote>
    </div>

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
    <!-- Backstory -->
    <pcase
      heading="Problems"
      para="I talked with some of the friends who are working on corporate and attending meeting, discussing with team
    are their part of the job. I came up with some some conclusion and made me wonder. The conclusion's are as follows.
    <br />
    <br />
    <ul style='color:#7800FE;'>
      <li>Most of them hate attending meeting. They consider it as unnecessary.</li>
      <li>70 percent of them considered it as wastes of time period.</li>
      <li>Most developers said it make them to lose focus from their task specially if the meeting is in mid hours of working time.</li>
      <li>Most of them doesn't event get to know what their contribution to the meeting will be.</li>
      <li>Even if they know, they lack clarity and what they have to contribute to meeting.</li>
      <li>Most meeting turned out to get delayed and even they get cancelled and they get to know after their time have been already wasted.</li>
      <li>The meeting room they get into doesn't have what they required like wi-fi password.</li>
    </ul>

    <br>
    Considering all these I came up with a solution that can solve all these with just one product i.e. MeetingRooms
    Not only book your rooms for meeting but also provide details related to meeting, who will going to attend the meeting and what they are expected 
    to come up in meeting.
"
      theme="theme_meeting-rooms"
    />

    <pcase
      heading="Solution"
      para="For me it was always the priority to understand the actual problem the user are facing anf what solution I can make
      to solve those problems.

         <ul style='color:#7800FE;'>
      <li>Live update about the meeting. Important notification only.</li>
      <li>Provide details about attendee meeting expectations and prerequisites from them</li>
      <li>SSync meeting to their calenders.</li>
      <li>Book rooms on the go, request rooms if not free, swap meeting rooms.</li>
      <li>Clear clarity about meeting details.</li>
      <li>All meeting rooms infrastructure details, capacity, services available in that room</li>
    </ul>

        "
      theme="theme_meeting-rooms"
    />

    <pcase
      heading="Ideation"
      para="I began the ideation process with the questions in mind
     and started to develop how this  product might look like
     and how it would solve these challenges. After several rounds of initial ideation and defining the layout and
     passible Information architecture and lots of feedback from friends and colleagues, I created some product  sketches and I went to work in adobe XD, starting with logo
     design."
      theme="theme_meeting-rooms"
    />

    <client-side>
      <agile>
        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/meeting-rooms/meeting-rooms-sketches-1.jpg"
            alt="meeting rooms design and sketches in diary"
          />
        </div>

        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/meeting-rooms/meeting-rooms-sketches-2.jpg"
            alt="meeting rooms design and sketches in diary"
          />
        </div>
      </agile>
    </client-side>

    <p class="contain just-para black90">
      I asked these questions again and again, discussed it, researched existing solutions, came up with different possibilities. Started
      designing UI in XD which I was sure of and as I got further, things got easier and easier.
    </p>
    <!-- Art direction Design-->

    <pcase
      heading="Information Architecture"
      para="On our research and findings we concluded that the portal will have 3 user types i.e. Normal visitor, event creator, admin. Normal Users (Who is going ti visit the website and buy
      tickets for events), Creator (Who will publish event thorough our platform), and then Admin(who will
      manage the event listing, tickets sale authorize users and curators). <br><br>
        Each role has different objectives and even slightly different experiences.
        <br>
        <br>

         We came up with a simple habit loop. Discover, Share with friends, Book ticket for them, Go to event, Repeat.
      "
      theme="User Jounery"
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
      theme="theme_meeting-rooms"
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
      heading="Visual Design"
      para="Putting everything together from the research, user personas, wireframes. I moved the begin
      to design UI Elements like tabs, search, links, contents. 


        <br><br>
        I was very clear to me to always provide next steps so that users can deduce naturally, whatever their context.
        Because the best interface is no interface, to offer users the most direct,
        accessible, comfortable control (and best experience).
      "
      theme="theme_meeting-rooms"
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
      heading="Setting up the Style Guide"
      para="After finishing the project I began working to make this project scalable. I developed a style guide that fit the asthetic of the branding
      and worked well with web platform.
     


      "
      theme="theme_meeting-rooms"
    />

    <pcase
      heading="Constantly learning"
      para="
          Being such a small team, we were able to work incredibly agile.
          We were always getting feedback from our customers and making changes
          to better suit their needs (and our business goals of course). I did multiple sessions
          of interviews for both conceptual ideas and usability testing. 
      "
      theme="theme_meeting-rooms"
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
