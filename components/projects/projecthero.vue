<template>
  <div class="p-hero_top contain">
    <div class="p-min-info ps">
      <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">
        <span class="p-min1">{{pDate}}</span>
      </span>
      <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
        <span class="p-min2">{{pWebsite}}</span>
      </span>
      <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <span class="p-min3">{{pCategory}}</span>
      </span>
    </div>

    <div class="p-min2-info">
      <h2
        class="p-heading"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        :style="pHeadingcolor"
      >{{pHeading}}</h2>
      <p
        class="p-sub-heading opacity70"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >{{pSubheading}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pDate: String,
    pWebsite: String,
    pCategory: String,
    pHeading: String,
    pHeadingcolor: String,
    pSubheading: String
  }
}
</script>

<style scoped>
.p-hero_top {
  min-height: 40vh;
  background-color: white;
}

.p-heading {
  margin-bottom: 0;
  margin-top: 70px;
  position: relative;
  z-index: 3;
  color: var(--primary-color);
}

.p-sub-heading {
  font-size: 26px;
  margin-top: 10px 0px 30px 0px;
  position: relative;
  color: #3a3a3a;
  font-family: circular-medium;
}

.p-min2-info {
  /* width: 63%; */
  position: relative;
  /* margin-right: 17%; */
  height: auto;
}
.p-min-info {
  position: relative;
  padding: 27px 0px 9px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #8d8d8d;
}

.p-min1 {
  text-align: left;
  display: block;
  margin: 0px 0px 5px 0px;
}

.p-min2 {
  text-align: center;
  display: block;
  margin: 0px 0px 5px 0px;
}

.p-min3 {
  text-align: right;
  display: block;
}

@media screen and (max-width: 1199px) {
  .p-sub-heading {
    font-size: 23px;
  }
}

@media screen and (max-width: 999px) {
  .p-min-info {
    width: 100%;
  }

  .p-min2-info {
    width: 100%;
  }

  .p-sub-heading {
    font-size: 21px;
  }
}

@media screen and (max-width: 800px) {
  .p-heading {
    margin-bottom: 0;
    margin-top: 46px;
    line-height: 40px;
  }

  .p-min-info {
    display: flex;
    flex-direction: column;
    padding: 50px 0px 9px 0px;
  }

  .p-min1 {
    text-align: left;
    display: block;
  }

  .p-min2 {
    text-align: left;
    display: block;
  }

  .p-min3 {
    text-align: left;
    display: block;
  }

  .p-sub-heading {
    font-size: 18px;
    margin-top: 17px;
  }
  .p-min2-info {
    width: 100%;
    margin-right: 8%;
    padding: 0px 0px 0px 0px;
    margin: -30px 0px 0px 0px;
  }
}

@media screen and (max-width: 500px) {
  .p-min2-info {
    width: 100%;
    margin-right: 8%;
  }

  .p-heading {
    margin-bottom: 0;
    margin-top: 46px;
    line-height: 40px;
  }

  .p-min-info {
    width: 100%;
  }

  .p-sub-heading {
    font-size: 16px;
    margin-top: 30px;
  }
}
</style>
