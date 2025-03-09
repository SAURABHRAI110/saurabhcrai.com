<template>
    <!--awesome inc work -->
  
    <div>
      <div class="ppnp-container">
        <nuxt-link to="my-portfolio-website">
          <previous />
        </nuxt-link>
  
        <nuxt-link to="artiso">
          <next />
        </nuxt-link>
  
        <div class="ppnp-number-container">
          <p class="black ppnp-p-number">
            <span style="color:#A15BC7;">01</span>
            <span>/</span>
            <span>22</span>
          </p>
        </div>
      </div>
      <projecthero
        pDate="June 2021"
        pWebsite="BikeShikes"
        pCategory="eCommerce"
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
              srcset="~assets/projects/bikeshikes-ecommerce/hero-mobile.jpg"
            />
            <img
              src="~assets/projects/bikeshikes-ecommerce/Cyclist mountain ui ux web design.jpg"
              alt="cyclist, adventure, cycle ecommerce"
            />
          </picture>
        </div>
      </div>
  
      <Preface
        timeframe="June 2021- <br> July 2021"
        tools="  Adobe Creative Suite, Marvel, Invision 
              <br>Pen, paper"
        role="UX Researcher, UI/UX Designer
  
              <br>Designing Bicycle eCommerce from concept to delivery"
        team=" Me, Friends
              <br>and lot of fun."
      />
      <!-- Preface -->
      <pcase
        heading="Preface"
        para="BikeShikes is a bicycle online store that offers many brands
        bicycle from categories like MTB, Road, Hybrid, eBike etc. It also
        offers accessories and clothing. The typical user is between 12-45
        years old, and most users are students or early career professionals.
        BikeShikes goal is to make shopping fun, fast, and easy for
        all types of users."
  
        
        theme="theme_wonderwares"
      />
  
      <!-- Challenge -->
      <pcase
        heading="The problem"
        para="Available online shopping websites have cluttered designs, Lots
        of technical terms, inefficient systems for browsing through products,
        and confusing filtering out for products and checkout processes. We wanted
        to tackle these problems ealry in the design stage."
        theme="theme_wonderwares"
      />
    <!-- Goal -->
      <pcase
        heading="The Goal"
        para="BikeShikes website overaall experience to be user friendly with easy navigation,
        clear context for technical terms with no or less jotgan words. Provide all the required filter
        options that the user will need while browsing for the prodcuts and offering a fast checkout process."
        theme="theme_wonderwares"
      />
  
    <div class="p-quote contain red">
        <blockquote>
          Design BikeShikes website to be user friendly by providing
        clear navigation, clear context for technical terms, required filter
        options and offering a fast checkout process.
        </blockquote>
      </div>
  
      <br></br>
      
      <!-- Challenge -->
      <pcase
        heading="Understanding the user"
        para="
        I conducted user interviews and created empathy maps to better understand the target users
        and their needs. I discovered that many users see online shopping as a fun and relaxing
        activity when they need a break from school, college, or work. However, many shopping websites
        are overwhelming and difficult to navigate, with excessive technical jargon and little context,
        which frustrates users. This turns an otherwise enjoyable experience into a challenging one,
        defeating the purpose of relaxation.
  
        <br>
        <br>
  
        User research <br>
        Personas <br>
        Problem statements <br>
        User journey maps"
        theme="theme_wonderwares"
      />
  
  
  
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

  <pcase
        heading="Personas"
        para="Problem statement: <br>
  Abhishek is a busy professional, Science teacher and early riser who needs a new bicycle
  that can perfectly fits his specific needs related the safety and security because he wants
  to able to focus on his health and fitness and also remain worry free from unwanted incidents.
  
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
      
        <p class="contain just-para black90">
        Saharsh is a busy sales student manager who needs Jargon free website, and
        required search filters because he want online shopping to be fast and stress-free.
      </p>
  
      <div class="p-quote contain red">
        <blockquote>
         I have bought a new bicycle recently, when I was exploring bicycle
         online, my biggest frustration was difficult word on bicycle details
         that I had to google to understand.
        </blockquote>
      </div>
       <!-- Preface -->
      <pcase
        heading="User Story"
        para=" 
         I created a user journey map of Abhishek experience using the site to
         help identify possible pain points and improvement opportunities. 
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
            <p class="ps black70">User Journey Map</p>
          </div>
        </div>
  
    <br></br>
     <br></br>
  
  <div class="contain">
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/user-painpoints-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/User PainPoints.jpg" />
            </picture>
            <p class="ps black70">User Painpoints</p>
          </div>
        </div>
    </div>
  
     <pcase
        heading="Starting the design
  "
        para="
        Navigation difficulties were a major pain point for users,
        so I used that insight to create a sitemap.
        <br>
        <br>
  
        My goal was to make strategic information architecture decisions that would enhance website navigation.
        I designed the structure to be simple and intuitive.
  
  
  .
  
        <br>
        <br>
  
        Sitemap <br>
        Paper wireframes 
        Digital wireframes
        Low-fidelity prototype
        Usability studies
  
        theme="theme_wonderwares"
      />
  

    
   
        <div class="p-quote contain red">
        <blockquote>
          Problem Statement: Parents and gift buyers struggle to find the right toys
          quickly due to overwhelming choices and unclear product information. This
          results in frustration and abandoned purchases.
        </blockquote>
      </div>
  

      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/user-painpoints-mobile.jpg"
              /> -->
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
            <p class="ps black70">User Painpoints</p>
          </div>
        </div>

  
    

      <pcase
        heading="Paper wireframes"
        para="Next, I sketched out paper wireframes for each screen,
        keeping the user pain points about navigation, browsing, and
        checkout flow in mind.
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
  

      <div class="p-quote contain red">
        <blockquote>
          Paper wireframes served multiple purposes. They helped me connect the site's information architecture
          to its visual design by mapping out paths between pages. They also established consistent ways to display specific types of
          information on the user interface and defined the intended functionality of the interface.
        </blockquote>
      </div>
  
      
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
  
  
      <!-- Prioritisation Matrix -->
  
        <pcase
        heading="Prioritisation Matrix"
        para="Moving from paper to digital wireframes made it easy
        to understand how the redesign could help address user pain
        points and improve the user experience. Prioritizing useful button
        locations and visual element placement on the home page was a key part
        of my strategy.
  
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
  
  <br></br>
  <br></br>
  
      <!-- Digital Wireframe -->
  
        <pcase
        heading="Digital wireframes"
        para="Moving from paper to digital wireframes made it easy
        to understand how the redesign could help address user pain
        points and improve the user experience. Prioritizing useful button
        locations and visual element placement on the home page was a key part
        of my strategy.
  
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
        heading="Low-fidelity prototype"
        para="To create a low-fidelity prototype, I connected all of the
        screens involved in the primary user flow of adding an item to the
        cart and checking out.
        <br>
  
        At this point, I had received feedback on my designs from my peers
        and other visual designers about things like placement of buttons
        and page organization. I made sure to listen to their feedback,
        and I implemented several suggestions in places that addressed user pain points.
        
  
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
              <img src="~assets/projects/bikeshikes-ecommerce/bikeshikes-digital-wireframe-prototype.jpg" />
            </picture>
            <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p>
          </div>
        </div>
  
      <pcase
        heading="Usability study"
        para="To create a low-fidelity prototype, I connected all of the screens
        involved in the primary user flow of adding an item to the cart and checking out.
  
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
                srcset="~assets/projects/bikeshikes-ecommerce/usability-study-parameters-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/usability-study-parameters.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <pcase
        heading="Usability study: findings"
        para="The usability study revealed key pain points in the shopping experience, particularly in product discovery,
        cart interaction, checkout, and account access. Users had trouble finding relevant filters on the product listing page,
        lacked clear feedback when adding items to the cart, and faced difficulties selecting payment methods and copying address
        details during checkout. Additionally, the absence of a seamless login option prevented users from pre-filling their billing
        and shipping information. Addressing these issues will enhance navigation, improve user confidence, and create a more intuitive
        shopping experience.
        "
        theme="theme_wonderwares"
      />
  
       <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/usability-study-findings-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/usability-study-findings.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
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
      </client-side>
  
      <pcase
        heading="High Fidelity Mockups"
        para="Bringing together research, user personas, and wireframes, I began adding details to each page, starting with the homepage to
        establish a cohesive design theme. Once I was satisfied with its look and feel, I applied the same approach to other pages,
        ensuring consistency and a smooth user flow. 
  
  
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
                srcset="~assets/projects/bikeshikes-ecommerce/Multidevice-mockup-3-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/Multidevice-mockup-3.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              /> -->
              <img src="~assets/projects/bikeshikes-ecommerce/all-mockup-showcase.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <pcase
        heading="Mockups: Screen size variations"
        para="
            I included considerations for additional screen sizes in my
            mockups based on my earlier wireframes. Because users shop from a
            variety of devices, I felt it was important to optimize the browsing
            experience for a range of device sizes, such as mobile and tablet
            so users have the smoothest experience possible. 
        "
        theme="theme_wonderwares"
      />
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/Hifi-mockup-all-pages-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/Hifi-mockup-all-pages.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <pcase
        heading="High-fidelity prototype"
        para="
          My hi-fi prototype followed the same user flow as the lo-fi
          prototype, and included the design changes made after the
          usability study, as well as several changes suggested by members of my team. 
        <br>
        <br>
        View the Bikeshikes high-fidelity prototype
              
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
              <img src="~assets/projects/bikeshikes-ecommerce/high-fidelity prototype-link-xd.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
      <pcase
        heading="Accessibility Considerations"
        para="
          While designing I have kept an eye on the accessibility
          consideration like color contrast, Hierarchy and Layout,
          typography and all those design principles.  It's always
          easier to fix things that you uncover in the design process,
          so it's best to consider accessibility upfront in the design process.
              "
        theme="theme_wonderwares"
      />
  
  
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/Accessibility considerations.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
      <pcase
        heading="Going forward"
        para="
          Moving from paper to digital wireframes made it
          easy to understand how the redesign could help address
          user pain points and improve the user experience. 
        <br>
        <br>
        Prioritizing useful button locations and visual element placement on the
        home page was a key part of my strategy.
     "
        theme="theme_wonderwares"
      />
  
      <pcase
        heading="Takeaways"
        para="
         Impact: <br>
  The website makes users feel engaged with lots of product to explore with modern, simple and intuitive design.
  
  Our target users shared that the design was intuitive to navigate through, more engaging with the images, and demonstrated a clear visual hierarchy and users were able to easily sort products according to their need.
   
        <br>
        <br>
        What I learned:<br>
  I learned that even a small design change can have a huge impact on the user experience. The most important takeaway for me is to always focus on the real needs of the user when coming up with design ideas and solutions. 
  
     "
        theme="theme_wonderwares"
      />
  
  
      <pcase
        heading="Next Step"
        para="
          Moving from paper to digital wireframes made it
          easy to understand how the redesign could help address
          user pain points and improve the user experience. 
     "
        theme="theme_wonderwares"
      />
  
      
      <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/salesfactory/salesfactoryl-colors-typo-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/next-step.jpg" />
            </picture>
            <!-- <p class="ps black70">Low-fidelity prototype Page connection in Adobe XD</p> -->
          </div>
        </div>
  
  
    <pcase
        heading="Aftermath of this Project"
        para="
          I got into Cycling.
          <br>365 Days by 29th July and counting
          <br> Journey in photos 
     "
        theme="theme_wonderwares"
      />
  
  
    <div class="p-image-100-duo">
          <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
            <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
    
            <picture>
              <source
                media="(max-width: 600px)"
                srcset="~assets/projects/bikeshikes-ecommerce/cycling-collage-mobile.jpg"
              />
              <img src="~assets/projects/bikeshikes-ecommerce/cycling-collage.jpg" />
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
  
  
      <!-- conclusion -->
  
      <div class="p-quote contain red">
        <blockquote>
          Even a small design change can have a huge impact on the user experience.
          The most important learning for me is to always focus on the real needs of
          the user when coming up with design ideas and solutions.
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
            <nuxt-link to="/projects/my-portfolio-website">
              <pfooterp
                projectName="My Portfolio Website"
                projectCategories="Web design and Development"
                thumbnail="/my-website-thumbnail.jpg"
              />
            </nuxt-link> </div>
  
          <div class="p-f-n-container">
            <nuxt-link to="/projects/artiso">
              <pfootern
                projectName="Artiso"
                projectCategories="Casestudy, Explore, Shop"
                thumbnail="/Artiso App Thumbnail-2.jpg"
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
  