<template>
  <div class="h-people-container">
    <div class="h-p-text">
      <h1>PEOPLE</h1>
      <p>who makes it all worth</p>
    </div>
    <div class="c-d">
      <img src="~assets/svg/c-development.svg" alt />
    </div>
    <div class="h-p-overlay"></div>
    <div class="h-p-wrapper">
      <div class="h-people-grid">
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
      </div>
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

.h-p-wrapper {
  top: -355px;
  position: relative;
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
  opacity: 0.7;
  position: absolute;
  z-index: 2;
}

.c-d {
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.h-p-text {
  z-index: 4;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.h-p-text > h1 {
  font-size: 100px;
  color: white;
  letter-spacing: 4px;
  margin: 4px;
}

.h-p-text > p {
  font-size: 20px;
  color: white;
  letter-spacing: 8px;
  margin-top: 0px;
  text-align: center;
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

  .h-p-text > h1 {
    font-size: 40px;
  }

  .h-p-text > p {
    font-size: 20px;
    letter-spacing: 1px;
  }
}
</style>