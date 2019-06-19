<template>
  <div class="appreciate-container">
    <h2 class="thanks-effect">Thanks for scrolling</h2>
    <p>Don't forget to appreciate.</p>
    <div class="applause">
      <applause-button style="width: 75px; height: 75px;" color="#fc3a52" multiclap="true"/>
    </div>

    <img src="~assets/footer/appreciate-gesture.png" alt>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.appreciate-container {
  width: 100%;
  height: 80vh;
  background-color: #f6ecdd;
  z-index: 3;
  margin-bottom: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.appreciate-container > p {
  font-size: 20px;
  margin-top: -50px;
  color: black;
  opacity: 0.5;
}
/* 
.thanks-effect {
  -webkit-text-stroke: 1px black;
  color: transparent;
  transition: color 0.95s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.appreciate-container:hover .thanks-effect {
  color: black;
} */

/* span {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.appreciate-container > img {
  width: 150px;
  margin-top: 20px;
}

.applause {
  margin-top: 20px;
}
</style>
