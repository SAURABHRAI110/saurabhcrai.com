<template>
  <div class="appreciate-container">
    <h2 class="heading">{{heading}}</h2>

    <p>{{subHeading}}</p>

    <div class="applause">
      <applause-button style="width: 70px; height: 70px;" color="#fc3a52" multiclap="true" />
    </div>

    <img src="~assets/footer/appreciate-gesture.png" alt />
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    subHeading: String
  }
}
</script>

<style scoped>
.appreciate-container {
  width: 100%;
  height: 80vh;
  background-color: #f6ecdd;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

.heading {
  text-align: center;
  padding-top: 82px;
  margin: 0px;
  padding-bottom: 18px;
  text-decoration: none;
  width: 100%;
}

.appreciate-container p {
  font-size: 20px;
  color: black;
  opacity: 0.5;
  text-align: center;
  width: 100%;
  margin: 0px;
}

.appreciate-container > img {
  width: 161px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 8%;
}

.applause {
  padding: 40px;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

@media screen and (max-width: 500px) {
  .appreciate-container > img {
    width: 261px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -8%;
  }

  .appreciate-container > h2 {
    font-size: 33px;
  }
  .appreciate-container > p {
    font-size: 16px;
  }
}
</style>