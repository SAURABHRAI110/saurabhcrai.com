<template>
  <div>
    <div class="exp-hero" id="gradient">
      <h1>
        <span class="dot">Experiment</span>
        <span class="dot">Fail</span>
        <span class="dot">Learn</span>
        <span>Repeat</span>
      </h1>

      <div class="center-h-v">
        <button>Click Me!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>