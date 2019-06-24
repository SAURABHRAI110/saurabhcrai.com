<template>
  <div class="p-info-4">
    <div class="p-info-4 contain">
      <div class="p-info">
        <div style="flex-grow: 1; align-self: center">
          <div>
            <h5
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >Timeframe</h5>
            <p
              class="ps opacity80"
              v-html="timeframe"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            ></p>
          </div>
          <div>
            <h5
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >Tools</h5>
            <p
              class="ps opacity80"
              v-html="tools"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            ></p>
          </div>
        </div>
        <div style="flex-grow: 1; align-self: center">
          <div>
            <h5
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >Role</h5>
            <p
              class="ps opacity80"
              v-html="role"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            ></p>
          </div>
          <div>
            <h5
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >Team</h5>
            <p
              class="ps opacity80"
              v-html="team"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >
              Four ebgineers, two medical
              <br>residents, one designer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timeframe: String,
    tools: String,
    role: String,
    team: String
  }
}
</script>

<style scaff>
.p-info-4 {
  position: relative;
  background-color: white;
  padding: 70px 0px 70px 0px;
}

.p-info {
  /* left: 20%;
  width: 78%; */
  position: relative;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
}

h5 {
  font-size: 19px;
  margin-bottom: 0px;
  color: black;
  opacity: 0.4;
}
</style>
