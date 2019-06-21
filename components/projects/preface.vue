<template>
  <div class="p-info-4 contain" data-aos="fade-up" data-aos-duration="1500">
    <div class="p-info">
      <div style="flex-grow: 1; align-self: center">
        <div>
          <h5>Timeframe</h5>
          <p class="ps opacity80" v-html="timeframe"></p>
        </div>
        <div>
          <h5>Tools</h5>
          <p class="ps opacity80" v-html="tools"></p>
        </div>
      </div>
      <div style="flex-grow: 1; align-self: center">
        <div>
          <h5>Role</h5>
          <p class="ps opacity80" v-html="role"></p>
        </div>
        <div>
          <h5>Team</h5>
          <p class="ps opacity80" v-html="team">
            Four ebgineers, two medical
            <br>residents, one designer
          </p>
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
  padding: 20px 0px 20px 0px;
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
