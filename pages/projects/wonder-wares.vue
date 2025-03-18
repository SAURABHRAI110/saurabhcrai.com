<template>
    <!--awesome inc work -->
  
    <div>
      <div class="ppnp-container">
        <nuxt-link to="artiso">
          <previous />
        </nuxt-link>
  
        <nuxt-link to="cricbuzz-app-redesign">
          <next />
        </nuxt-link>
  
        <div class="ppnp-number-container">
          <p class="black ppnp-p-number">
            <span style="color:#A15BC7;">03</span>
            <span>/</span>
            <span>22</span>
          </p>
        </div>
      </div>
      <projecthero
        pDate="April 2022"
        pWebsite="WonderWares"
        pCategory="App | eCommerce"
        pHeading="Redefining Toy Shopping: For Every Kid’s Joy and the Parents"
        pHeadingcolor="color:#A15BC7;"
        pSubheading=" From Empathy to Execution – How Research, Ideation, and Iteration Shaped a Seamless Shopping Experience"
      />
      <div class="p-hero_image">
        <div class="reveal-holder" data-aos="fade-up">
          <div class="reveal-block right theme_wonderwares" data-aos="reveal-right"></div>
  
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/wonder-wares/wonder-wares-hero-image-3-mobile.jpg"
            />
            <img
              src="~assets/projects/wonder-wares/wonder-wares-hero-image-3.jpg"
              alt="shopping app, toy app, sapp mockcup"
            />
          </picture>
        </div>
      </div>
  
      <Preface
        timeframe="April 2022- <br> June 2022"
        tools="  Figma, Adobe Creative Suite, Marvel,
              <br>Lots of Notes"
        role="UX Researcher, UI/UX Designer
  
              <br>Designing toy shopping app from concept to delivery"
        team=" Anu, Sushant
              <br>Saurabh."
      />
      <!-- Preface -->
      <pcase
        heading="Preface"
        para="Toy shopping, especially online, can be overwhelming due to endless choices,
        uncertainty about age-appropriateness, and slow delivery times. Parents and gift-givers often
        struggle to find the perfect toy quickly and confidently. WonderWares is designed to bridge this
        gap by offering a good, AI-powered shopping experience that personalizes recommendations
        and provides fast delivery options. This case study outlines the design thinking process used
        to create an intuitive and efficient toy shopping app."
  
        
        theme="theme_wonderwares"
      />
  
      <!-- Challenge -->
      <pcase
        heading="The problem"
        para="Many users find online toy shopping frustrating because:
        <ul>
        <li>Too many options make it hard to decide.</li>
        <li>Age-appropriateness is unclear, leading to uncertainty.</li>
        <li>Last-minute shopping is stressful due to long delivery times.</li>
        <li>Navigation on existing platforms is cluttered and inefficient.</li>
      </ul>"
        theme="theme_wonderwares"
      />
    <!-- Goal -->
      <pcase
        heading="The Goal"
        para="WonderWares app goal is to simplify toy shopping by:
         <ul>
        <li>Offering an AI-powered Smart Finder Quiz for quick and accurate recommendations.</li>
        <li>Providing multiple delivery options, including same-day and curbside pickup.</li>
        <li>Designing a clean, intuitive UI that enhances user experience.</li>
        <li>Ensuring a fast, hassle-free checkout process for busy users.</li>
      </ul>"
      />
  
    <div class="p-quote contain red">
        <blockquote>
          This case study explores how user research, ideation, prototyping, and usability
          testing shaped WonderWares into an innovative and user-friendly toy shopping solution.
        </blockquote>
      </div>
  
      <br></br>
      
      <!-- Challenge -->
      <pcase
        mainheading="Empathise: Understanding the user"
        para="
      I conducted user interviews with users who can be categarised as parents, gift-givers, who frequently shop for toys.
        The goal was to uncover pain points, shopping behaviors, and expectations when searching for the
        perfect toy. Through these conversations, several recurring challenges emerged: overwhelming
        choices, difficulty finding age-appropriate toys, and long delivery times. Users also expressed a
        need for personalized recommendations rather than manually filtering through endless options.
  
        <br>
        <br>
  
        <ul>
        <li>User Interveiws </li>
        <li>Competitive Analysis</li>
        <li>Desk Research</li>
      </ul>"
        theme="theme_wonderwares"
      />
      <p class="contain just-para black90">
        From the interviews, it became clear that users value speed, convenience, and guidance in their shopping experience. Many preferred a
        smart recommendation system that could quickly suggest the best toys based on the child’s age,
        interests, and occasion. These insights directly influenced the app’s features, such as the AI-powered
        Smart Finder Quiz, which simplifies decision-making. Additionally, the demand for same-day and express
        delivery reinforced the importance of fast fulfillment options, a key differentiator for Wonderwares.
      </p>
  
  
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
  
          <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/wonder-wares/user-interveiw-plan-wonderware-mobile.jpg"
            />
            <img src="~assets/projects/wonder-wares/user-interveiw-plan-wonderware.jpg" />
          </picture>
          <p class="ps black70">UX Research Study Plan</p>
        </div>
      </div>
  



      <pcase
        heading="Competitive Audit & Analysis"
        para="To better understand the landscape of toy shopping apps, I conducted a competitive audit by
        analyzing both direct and indirect competitors in the market. The goal was to identify strengths,
        weaknesses, and opportunities to differentiate our app. This analysis focused on key aspects such
        as website performance, usability, user experience, typography, imagery, efficiency in
        task completion, responsiveness, and unique features.
        <br>
        <br>
To visualize the findings effectively, I created a Spider Chart, mapping out how each competitor performed
across various parameters. This helped pinpoint areas where competitors excel and where they fall short.
For instance, while some apps had an extensive toy catalog, they lacked personalized recommendations
and struggled with delivery speed, a gap WonderWares aimed to bridge with AI-powered smart recommendations
and same-day delivery options. This audit provided valuable insights into how we could position WonderWares as a
superior solution in the market.
        
  
        "
        theme="theme_wonderwares"
      />
    

      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/competitive-analysis-wonderware-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/Competitive Analysis WonderWare Shopping App.jpg" />
            </picture>
            <p class="ps black70">Competitive Audit</p>
          </div>
        </div>



      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/competitive-analysis-spider-chart-shopping-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/competitive-analysis-spider-chart-shopping-app.jpg" />
            </picture>
            <p class="ps black70">Competitive Analysis - Spider Chart</p>
          </div>
        </div>

        <pcase
        heading="Empathy Map"
        para=" 
         To gain deeper insights into how users think, feel, and behave during the toy shopping experience,
         I created an Empathy Map based on research findings. This helped visualize user pain points,
         motivations, and decision-making patterns. By categorizing what users say, think, do, and feel,
         I was able to uncover key frustrations—such as feeling overwhelmed by choices, struggling to
         find age-appropriate toys, or worrying about delivery delays.

         <br>
         <br>
         The empathy map also highlighted positive experiences users seek, like personalized recommendations,
         fast and hassle-free purchasing, and trust in product quality. These insights played a crucial role
         in shaping the app’s design direction, ensuring that it not only meets functional needs but also
         resonates with users emotionally.
        "
        theme="theme_wonderwares"
      />
    
  <div class="contain">
        <client-side>
          <agile>
            <div class="slide">
              <img
                class="slide-img"
                src="~assets/projects/wonder-wares/Empathy Map Wonder Wares App 1.jpg"
                alt="feeding trends ideation"
              />
            </div>
    
            <div class="slide">
              <img
                class="slide-img"
                src="~assets/projects/wonder-wares/Empathy Map Wonder Wares App 2.jpg"
                alt="feeding trends ideation"
              />
            </div>
            
          </agile>
        </client-side>
  </div>
<br>
<br>
  <pcase
        mainheading="Define – Framing the Problem Statement"
        para="After gathering insights from user research, the next step was to clearly define the core problems and user needs.
        This phase helped frame the design challenges and set a strong foundation for the ideation and solution-building process.
        By creating personas, user stories, and a well-defined problem statement, I ensured that every design
        decision was driven by real user behaviors, frustrations, and goals.
          "
        theme="theme_wonderwares"
      />
  
      <pcase
        heading="Persona"
        para="To humanize the target users and their shopping journey, I created detailed personas
        representing different types of toy shoppers. These included a busy parent looking for quick
        and reliable toy recommendations and a thoughtful gift-giver unsure about the best toy choice.
        The personas helped in defining pain points, motivations, and expectations, ensuring that the
        app’s design caters to real-world shopping behaviors.

          "
        theme="theme_wonderwares"
      />
  
  

    <div class="contain">
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/Persona Wonder Ware App 1.jpg" />
            </picture>
            <p class="ps black70">Persona [Emily]</p>
          </div>
        </div>
    </div>
  
  
  <br>
  
   <div class="contain">
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/Persona Wonder Ware App 2.jpg" />
            </picture>
            <p class="ps black70">Persona [Michael]</p>
          </div>
        </div>
    </div>
      
  

       <!-- User Stories -->
      <pcase
        heading="User Stories"
        para=" 
         To translate user needs into actionable design goals, I wrote user stories that reflect common toy shopping scenarios.
         For example, “As a parent, I want to quickly find age-appropriate toys so that I can make a
         purchase without spending hours researching.” These stories provided clarity on how different
         users would interact with the app, what features they would rely on, and the value they expect. 
        "
        theme="theme_wonderwares"
      />
  

      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/user-stories-wonder-wares-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/user-stories-wonder-wares-app.jpg" />
            </picture>
            <p class="ps black70">User Stories</p>
          </div>
        </div>
  
    <br>
     <br>
  

      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/pain-points-wonder-ware-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/pain-points-wonder-ware-app.jpg" />
            </picture>
            <p class="ps black70">User Painpoints</p>
          </div>
        </div>
  
    <pcase
        heading="Problem Statement"
        para=" 
         Toy shopping often becomes overwhelming, time-consuming, and confusing, especially when choosing
         age-appropriate toys or finding the perfect gift. Users need a simplified, guided, and efficient
         way to discover and purchase toys that suit their needs. How might we create a seamless toy-shopping
         experience that offers smart recommendations, fast delivery options, and an intuitive user
         interface to help users find the perfect toy effortlessly? 

         <br>
         <br>
         By framing the problem clearly, I was able to align the design process with user needs,
         ensuring that every feature solves a real challenge.
        "
        theme="theme_wonderwares"
      />
  
   
    <div class="p-quote contain red">
        <blockquote>
          Problem Statement: Parents and gift buyers struggle to find the right toys
          quickly due to overwhelming choices and unclear product information. This
          results in frustration and abandoned purchases.
        </blockquote>
      </div>

<br>
<br>

     <pcase
        mainheading="Ideation: Turning Insights into Concepts"
        para="
With a clear understanding of user needs and challenges, I started on
brainstorming creative solutions to address the problem areas identified during research.
Here I focused on generating multiple design concepts, refining ideas, and prioritizing
features that would have the greatest impact on user experience. Through methods like:
      <ul>
        <li>Sketching Initial Concepts</li>
        <li>Crazy 8s</li>
        <li>Mind Mapping</li>
        <li>Prioritisation Matrix</li>
      </ul>
 
  This structured yet flexible approach allowed me to explore a wide range of ideas before narrowing
  them down into a refined direction, whcih will set the foundation for wireframing and prototyping.
        <br>

  "
        theme="theme_wonderwares"
      />
    

      <pcase
        heading="Initial Concepts & Crazy 8s"
        para="To quickly generate a variety of possible solutions, I used the Crazy 8s technique, where I sketched eight different layout ideas in just eight minutes.
        This fast-paced exercise pushed me to think beyond the obvious and explore innovative ways to design
        the Smart Toy Finder quiz, product listing pages, and checkout flow. From different UI structures to
        interactive elements, these sketches helped visualize how the app could guide users seamlessly through
        the shopping journey..
          "
        theme="theme_wonderwares"
      />

      <client-side>
        <agile>
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/wonder-wares/Paper-Wireframes-Wonderware-app-1.jpg"
              alt="feeding trends ideation"
            />
          </div>
  
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/wonder-wares/Paper-Wireframes-Wonderware-app-2.jpg"
              alt="feeding trends ideation"
            />
          </div>
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/wonder-wares/Paper-Wireframes-Wonderware-app-3.jpg"
              alt="feeding trends ideation"
            />
          </div>
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/wonder-wares/Paper-Wireframes-Wonderware-app-4.jpg"
              alt="feeding trends ideation"
            />
          </div>
          
        </agile>
      </client-side>

  
<!-- 
      <div class="p-quote contain red">
        <blockquote>
          Paper wireframes served multiple purposes. They helped me connect the site's information architecture
          to its visual design by mapping out paths between pages. They also established consistent ways to display specific types of
          information on the user interface and defined the intended functionality of the interface.
        </blockquote>
      </div> -->


      <pcase
        heading="Mind Mapping"
        para="To organize and refine ideas, I created a Mind Map, visually breaking down the app’s key features,
        user interactions, and design priorities. This technique helped in structuring the app’s flow,
        ensuring that all touchpoints—from searching for toys to receiving recommendations and
        checking out—were intuitive and efficient. It also allowed me to connect user pain
        points with potential solutions, ensuring a user-centered approach in every decision.
          "
        theme="theme_wonderwares"
      />
  

    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/Bicycle eCommerce Sitemap.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/Mindmap-WonderWare Shopping App.jpg" />
            </picture>
            <p class="ps black70">Mindmap</p>
          </div>
        </div>
  
    
  
        <pcase
        heading="Prioritisation Matrix"
        para="Finally,
the With many ideas on the table, I needed to determine which features should be implemented first. Using a Prioritization Matrix,
I evaluated each idea based on impact and feasibility, ensuring that high-value features like personalized
toy recommendations, age-based filtering, and fast delivery options were given priority. Features
that added value but were less critical, like social sharing or wishlist functionalities, were
noted for future iterations.
        "
        theme="theme_wonderwares"
      />
    


   <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/Prioritisation-matrix-wonderwares-shopping-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/Prioritisation-matrix-wonderwares-shopping-app.jpg" />
            </picture>
            <p class="ps black70">Prioritisation Matrix</p>
          </div>
        </div>
  
        <p class="contain just-para black90">

      </p>

  <br>
  <br>
  
      <!-- Digital Wireframe -->
  
        <pcase
        mainheading=" Prototype: Designing Wireframes & Interactive Mockups"
        para="With all the research, findings, and pain points identified in the previous phase,
        I began working on digital wireframes while focusing on the layout structure and key features
        essential for a seamless experience. My goal was to create an interactive prototype to test
        with users, gather insights from usability testing, and refine the design iteratively based
        on their feedback.
  
        "
        theme="theme_wonderwares"
      />
  

      <pcase
        heading="Digital Wireframe"
        para="I started creating digital wireframes, where I sketched out the primary user
        flows focusing on task completion and the Smart Toy Finder quiz. These wireframes mapped
        out the core navigation, product browsing, toy recommendation quiz, and checkout process.
        The goal was to ensure that users could seamlessly find, select, and purchase toys without
        friction. At this stage, I concentrated on layout, hierarchy, and interaction flow, keeping the
        design simple and functional.
        "
        theme="theme_wonderwares"
      />

   <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/bikeshikes-digital-wireframe-all-mobile.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/lofi-digital-wireframes-wonderware-app-1.jpg" />
            </picture>
            <!-- <p class="ps black70">Homepage Digital Wireframe</p> -->
          </div>
        </div>

  
  <br></br>
  <br></br>


  

      <p class="contain just-para black90">
        Here I have shown all the wireframe that was necessary to make for the user journey 
        to complete and so that later on I can do usability test connecting all these low fidelity
        digital wireframe.
      </p>

   <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/bikeshikes-digital-wireframe-all-mobile.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/lofi-digital-wireframes-wonderware-app-2.jpg" />
            </picture>
            <!-- <p class="ps black70">Homepage Digital Wireframe</p> -->
          </div>
        </div>
  
  
  <!-- Low fi fidelity prototype -->
  
        <pcase
        heading="Low-fidelity Prototype"
        para="Based on the digital wireframes, I built a low-fidelity prototype to test the
        core functionalities. This interactive prototype allowed users to navigate through
        the main shopping journey, interact with the Smart Finder quiz, and proceed through checkout.
        <br>
        <br>
  
        It was a crucial step before adding visual details, as it helped identify any early
        usability issues and areas for improvement. I conducted initial user testing to gather quick
        feedback on how intuitive the flow was.
        
  
        "
        theme="theme_wonderwares"
      />
    
  
     <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/lofi-prototype-wonderware-app.jpg" />
            </picture>
            <p class="ps black70">Low-fidelity Prototype for UT</p>
          </div>
        </div>
  
      <pcase
        heading="Usability Study"
        para="To ensure the design met user expectations, I conducted a usability study on the
        low-fidelity prototype. The goal was to observe how users interacted with the interface
        and identify any pain points or confusion they encountered.
        The study helped in validating the navigation, ease of completing tasks,
        and overall shopping experience.
  
        At this point, I had received feedback on my designs from my peers
        and other visual designers about things like placement of buttons
        and page organization. I made sure to listen to their feedback,
        and I implemented several suggestions in places that addressed
        user pain points. 
        "
        theme="theme_wonderwares"
      />
  
   <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/usability-study-parameters-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/usability-study-parameters.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <pcase
        heading="Usability Study: Findings"
        para="Key insights gathered from the usability study are listed below.

      These findings helped refine the design before moving to high-fidelity mockups."
        These findings helped refine the design before moving to high-fidelity mockups.
        theme="theme_wonderwares"
      />
  
       <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/usability-study-findings-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/usability-study-findings.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
<!--   
      <pcase
        heading="Mockups"
        para="Based on insights from the usability study, I refined the filter options to
         be more relevant and specific. I added filters such as age, categories, number of gears,
         and more. This gave users greater flexibility to filter bicycles according to their specific needs and preferences.
  
  
        "
        theme="theme_wonderwares"
      />
  
  
  <client-side>
        <agile>
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/bikeshikes-ecommerce/mockups-before-and-after-usability-study-1.jpg"
              alt="feeding trends ideation"
            />
          </div>
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/bikeshikes-ecommerce/mockups-before-and-after-usability-study-2.jpg"
              alt="feeding trends ideation"
            />
          </div>
          <div class="slide">
            <img
              class="slide-img"
              src="~assets/projects/bikeshikes-ecommerce/mockups-before-and-after-usability-study-3.jpg"
              alt="feeding trends ideation"
            />
          </div>
          
          
        </agile>
      </client-side> -->
  
      <pcase
        heading="High Fidelity Mockups"
        para="After implementing usability study feedback, I designed high-fidelity mockups, focusing on
        visual appeal, accessibility, and branding. Colors, typography, and imagery were applied to
        ensure the interface was both engaging and intuitive. The Smart Finder quiz was refined to be
        more interactive and visually appealing, while the product browsing and checkout flow were
        optimized for efficiency.
  
  
          <br><br>
          I focused on providing clear next steps so users could navigate naturally in any context.
          The best interface is one that feels invisible, offering a direct, accessible, and seamless experience.
  
  
        "
        theme="theme_wonderwares"
      />
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-1-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-1.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-2-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-2.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-3-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-3.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-4-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-4.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-5-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-5.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-6-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-6.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-7-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/hifi-mockup-wonderwares-app-7.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>

  
      <pcase
        heading="High-fidelity prototype"
        para="
          With all refinements in place, I built the high-fidelity prototype, showcasing the final design
          with interactions, animations, and UI enhancements. This prototype closely resembled the final
          product and was tested with users to ensure a smooth and delightful experience. The final design
          successfully streamlined the toy shopping process, making it fast, personalized, and user-friendly.
              "
        theme="theme_wonderwares"
      />
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              /> -->
              <img src="~assets/projects/wonder-wares/hifi-prototype-wonderwares-app-2.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <pcase
        heading="Accessibility Considerations"
        para="
          Accessibility was a key consideration throughout the design process to ensure that WonderWares
          could be used by a diverse range of users, including those with disabilities. I focused on
          elements like color contrast for readability, clear typography, and intuitive navigation to
          enhance usability for individuals with visual impairments or cognitive differences. Additionally,
          I incorporated voice search and screen reader-friendly labels to assist users who rely on assistive
          technologies. Simplified interactions, large touch targets, and an inclusive design approach
          ensured that the experience remained seamless for everyone, regardless of their abilities.
              "
        theme="theme_wonderwares"
      />
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/accessibility-considerations-wonder-wares-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/accessibility-considerations-wonder-wares-app.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
      <pcase
        heading="Going forward"
        para="
          As the project evolves, the focus will be on continuously improving the user experience
          based on feedback and real-world usage. Monitoring user interactions, analyzing behavioral
          patterns, and addressing any friction points will help refine the app further. Additionally,
          exploring AI-driven recommendations and personalized toy suggestions will enhance engagement
          and usability.
     "
        theme="theme_wonderwares"
      />
  
      <pcase
        heading="Takeaways"
        para="
         Understanding user needs through research helped shape an experience that is not only functional
         but also intuitive and enjoyable. Testing and refining based on usability studies highlighted the
         significance of small design choices in improving overall accessibility and efficiency.
   
        <br>
        <br>
  I learned that even a small design change can have a huge impact on the user experience. The most important takeaway for me is to always focus on the real needs of the user when coming up with design ideas and solutions. 
  
     "
        theme="theme_wonderwares"
      />
  
  
      <pcase
        heading="Next Step"
        para="
          The next phase will involve further iterations based on additional usability testing,
          optimizing the high-fidelity prototype, and preparing for development.
          Expanding features like a voice-assisted smart finder and refining delivery options
          based on user preferences will be key priorities to enhance the overall shopping experience.
     "
        theme="theme_wonderwares"
      />

      <!-- add more features like  check matrix -->
  
      
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/wonder-wares/next-step-wonder-wares-app-mobile.jpg"
              />
              <img src="~assets/projects/wonder-wares/next-step-wonder-wares-app.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
    <pcase
        heading="Reflection"
        para="
          Working on this project helped me realize how crucial user research is in shaping the entire design process.
          Understanding user needs and behaviors played a huge role in creating an app that doesn’t just function well but
          actually resonates with users.
          When the app shows the user immediate consequences of their action, there is a more personal connection.
          <br>
          <br>
         There’s a common belief that digital products should be strictly minimalist and functional,
         but my experience tells me otherwise. Users don’t just want to solve problems, they also want
         to enjoy the experience while doing it. Striking that balance between functionality and aesthetics
         was my responsibility as a UI/UX designer on this project.
          <br>
          <br>
          After finishing and looking back, I felt proud of what I had accomplished. The pressure of completing
          everything in limited time was immense, but it pushed me to deliver my best. I’ve learned that when
          faced with challenges like this, I perform well under pressure and find ways to make things work.
          Seeing the final product function as intended, making toy shopping easier and more delightful, was a truly rewarding moment.
          I happen to find myslef to go through the process and happen to find something to improve in the app.
     "
        theme="theme_wonderwares"
      />
  
  
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
            <source
              media="(max-width: 600px)"
              srcset="~assets/projects/wonder-wares/wonder-wares-hero-image-3-mobile.jpg"
            />
            <img
              src="~assets/projects/wonder-wares/wonder-wares-hero-image-3.jpg"
              alt="shopping app, toy app, sapp mockcup"
            />
          </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <!-- key Focus Area -->
  
      <div class="keyfocus">
        <div class="content">
          <div class="contain">
            <h2 class="p-para black50">Stuff I did</h2>
  
            <div class="pm black70">
              <div class="kf-layout">
                <span>✔ User Research</span>
                <span>✔ Competitive Analysis</span>
                <span>✔ Mind Mapping & Crazy 8s</span>
                <span>✔ Wireframing & Prototyping</span>
                <span>✔ Smart Quiz Design</span>
                <span>✔ Usability Testing</span>
                <span>✔ High-Fidelity Mockups</span>
                <span>✔ User Journey Mapping</span>
                <span>✔ Branding & UI Design</span>
                <span>✔ Accessibility Checks</span>
                <span>✔ Late Night Work</span>
                <span>✔ Design Meetings</span>
                <span>✔ Defending UX Decisions</span>
                <span>✔ Collaboration</span>
                <span>✔ Iteration & Testing</span>
                <span>✔ Lots of Fun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <!-- conclusion -->
  
      <div class="p-quote contain red">
        <blockquote>
          When the app shows users immediate feedback on their actions, it not only creates a personal
          connection but also exemplifies the essence of great design, delving deeper into how people think and act.
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
          <nuxt-link to="/projects/artiso">
            <pfooterp
            projectName="Artiso"
              projectCategories="Casestudy, Explore, Shop"
              thumbnail="/Artiso App Thumbnail-2.jpg"
            />
          </nuxt-link>
        </div>
  
            <div class="p-f-n-container">
          <nuxt-link to="/projects/cricbuzz-app-redesign">
            <pfootern
              projectName="CricBuzz"
              projectCategories="App Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
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
  