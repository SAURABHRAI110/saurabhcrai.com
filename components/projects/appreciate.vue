<template>
  <div class="appreciate-container">
      <div class="app-content">
        <h2 class="heading">{{heading}}</h2>
        <p class="subheading">{{subHeading}}</p>
      </div>
      <div class="post-applause-container">
        <span class="applause">
          <applause-button style="width: 70px; height: 70px;" color="#fc3a52" multiclap="true" />
        </span>
      </div>
      <img src="~assets/footer/appreciate-gesture.png" alt />
    </div>
</template>

<script>
import Applause from '~/components/projects/applause'
export default {
  components: {
    Applause
  },
  props: {
    heading: String,
    subHeading: String
  }
}
</script>

<style scoped>
.appreciate-container {
  width: 100%;
  height: auto;
  background-color: #f6ecdd;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

.app-content{
padding: 0px 10% 0px 10%;
}


.heading {
  text-align: center;
  padding-top: 110px;
  margin: 0px;
  padding-bottom: 18px;
  text-decoration: none;
  width: 100%;
}

.subheading{
  padding-bottom: 100px;
}

.appreciate-container p {
  font-size: 20px;
  color: black;
  opacity: 0.5;
  text-align: center;
  width: 100%;
  margin: 0px;
}

.appreciate-container img {
  padding: 48px;
  width: 400px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  bottom: 8%;
}

.applause {
  padding: 40px;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

@media screen and (max-width: 600px) {

}

@media screen and (max-width: 500px) {
  .appreciate-container > img {
    width: 350px;
    padding: 48px;

  }

  .appreciate-container > h2 {
    font-size: 33px;
  }
  .appreciate-container > p {
    font-size: 16px;
  }

  .app-content{
padding: 0px 6% 0px 6%;
}
}
</style>