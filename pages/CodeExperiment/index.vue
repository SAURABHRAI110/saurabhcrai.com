<template>
  <div>
    <div class="exp-hero" id="gradient">
      <h1>
        <span class="dot">Experiment</span>
        <span class="dot">Fail</span>
        <span class="dot">Learn</span>
        <span>Repeat</span>
      </h1>

      <div class="exp-bg-text outlined" v-rellax="{ speed: -3, center: 0.5 }">
        <span>CODE</span>
      </div>
      <button @click="scrollToElement">scroll to me</button>
    </div>

    <!-- section 2 -->
    <div class="exp-section-two">
      <div class="exp-cards">
        <div class="exp-card"></div>
        <div class="exp-card"></div>
        <div class="exp-card"></div>
        <div class="exp-card"></div>
        <div class="exp-card"></div>
        <div class="exp-card"></div>
        <div class="exp-card"></div>
        <div class="exp-card"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToElement() {
      const el = this.$el.getElementsByClassName('exp-section-two')[0]

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style>
.exp-hero {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: black;
  white-space: nowrap;
}

.exp-hero h1 {
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  margin: 0;
  color: white;
  font-size: 3rem;
}
.exp-hero > h1 > .dot {
  padding: 0px 20px 0px 0px;
}
.exp-hero > h1 > .dot::after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 45%;
  margin-left: 15px;
  transform: translate(-50%);
}

.exp-bg-text {
  font-size: 180px;
  position: absolute;
  top: 92px;
  opacity: 0.4;
  z-index: 1;
  text-align: center;
  width: 100%;
}

/* section 2 */

.exp-section-two {
  width: 100%;
  position: relative;
}

.exp-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));
  width: 100%;
  grid-gap: 20px;
}

.exp-card {
  height: 50vh;
}

.exp-card:nth-child(2n) {
  background-color: red;
}
.exp-card:nth-child(2n-1) {
  background-color: rgb(241, 92, 92);
}
</style>