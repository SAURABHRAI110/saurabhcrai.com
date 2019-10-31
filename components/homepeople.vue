<template>
  <div class="h-people-container">
    <div class="center-h-v h-p-content">
      <h1>PE😍PLE</h1>
      <p>who makes it all worth</p>
      <img src="~assets/svg/c-development.svg" alt />
    </div>

    <div class="h-p-overlay"></div>
    <div class="h-p-wrapper">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right"></div>
        <picture>
          <source media="(max-width: 600px)" srcset="~assets/img/home/home-people-mobile.jpg" />
          <img src="~assets/img/home/home-people.jpg" alt="lots of people photos in circle" />
        </picture>
      </div>

      <!-- <div class="h-people-grid">
        <div class="h-p-column h-p-column1" v-rellax="{ speed: 9, center: 0.6 }">
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-1.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-2.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-3.jpg" />
          </div>
        </div>
        <div class="h-p-column h-p-column2" v-rellax="{ speed: -9, center: 0.9 }">
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-4.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-5.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-6.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-7.jpg" />
          </div>
        </div>
        <div class="h-p-column h-p-column3" v-rellax="{ speed: 8, center: 0.6 }">
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-8.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-9.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-10.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-11.jpg" />
          </div>
        </div>
        <div class="h-p-column h-p-column4" v-rellax="{ speed: -8, center: 0.4 }">
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-12.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-13.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-14.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-2.jpg" />
          </div>
        </div>
        <div class="h-p-column h-p-column5 rellax" v-rellax="{ speed: 9, center: 0.6 }">
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-8.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-5.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-11.jpg" />
          </div>
          <div class="h-p-c-images">
            <img src="~assets/img/people/home-people-2.jpg" />
          </div>
        </div> 
      </div>-->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.h-people-container {
  width: 100%;
  position: relative;
  height: 100vh;
  background-color: white;
  overflow: hidden;
}

.h-p-content {
  z-index: 3;
}

.h-p-wrapper {
  /* top: -355px; */
  position: relative;
  width: 100%;
}
.h-p-wrapper img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.h-people-grid {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-template-rows: auto;
  /* grid-gap: 10px; */
}

.h-p-column {
  display: flex;
  flex-direction: column;
}

.h-p-c-images {
  width: auto;
  height: auto;
  margin: 5px;
}

.h-p-column2 {
  margin-top: 200px;
}

.h-p-column4 {
  margin-top: 200px;
}

.h-p-column > div:nth-child(1n) {
  background-color: red;
}

.h-p-column > div:nth-child(2n) {
  background-color: rgb(221, 133, 133);
}

.h-p-column > div:nth-child(3n) {
  background-color: rgb(131, 99, 99);
}

.h-p-c-images img {
  object-fit: fill;
  width: 100%;
}

.h-p-overlay {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.85;
  position: absolute;
  z-index: 2;
}

.h-p-content > h1 {
  font-size: 100px;
  color: var(--primary-color);
  letter-spacing: 4px;
  margin: 4px;

  text-align: center;
  white-space: nowrap;
}

.h-p-content > p {
  font-size: 20px;
  color: white;
  opacity: 0.8;
  /* letter-spacing: 8px; */
  padding: 10px;
  text-align: center;
}
.h-p-content > img {
  width: 100%;
  justify-content: center;
}

.h-bm-animation {
  position: absolute;
  z-index: 3;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 1200px) {
  .h-people-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media screen and (max-width: 800px) {
  .h-people-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media screen and (max-width: 500px) {
  .h-people-grid {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  .h-p-column2 {
    margin-top: 900px;
  }

  .h-p-column1 {
    margin-top: 0;
  }

  .h-p-column3 {
    margin-top: 200px;
  }

  .h-p-content > h1 {
    font-size: 70px;
  }

  .h-p-content > p {
    font-size: 24px;
    letter-spacing: 1px;
  }
}

/* button */
</style>