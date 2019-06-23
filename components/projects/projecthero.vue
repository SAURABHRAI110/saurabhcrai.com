<template>
  <div class="p-hero_top contain">
    <div class="p-min-info ps">
      <span
        class="p-min1"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="0"
      >{{pDate}}</span>
      <span
        class="p-min2"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="100"
      >{{pWebsite}}</span>
      <span
        class="p-min3"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="200"
      >{{pCategory}}</span>
    </div>

    <div class="p-min2-info">
      <h2
        class="p-heading"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        :style="pHeadingcolor"
      >{{pHeading}}</h2>
      <h3
        class="p-sub-heading opacity70"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
      >{{pSubheading}}</h3>
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
    pSubheading: String,
    articleThumbnail: String
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
  margin-top: 10px;
  position: relative;
  z-index: 3;
}

.p-min-info {
  position: relative;
  margin-right: 17%;
  height: 10vh;
}

.p-min2-info {
  /* width: 63%; */
  position: relative;
  /* margin-right: 17%; */
  height: auto;
}

.p-min1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  z-index: 3;
}

.p-min2 {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 3;
}

.p-min3 {
  right: 0;
  position: absolute;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  z-index: 3;
}

@media screen and (max-width: 1199px) {
  .p-sub-heading {
    font-size: 23px;
  }
}

@media screen and (max-width: 999px) {
  .p-min-info {
    width: 80%;
  }

  .p-min2-info {
    width: 80%;
  }

  .p-sub-heading {
    font-size: 21px;
  }
}

@media screen and (max-width: 800px) {
  .p-min2-info {
    width: 80%;
    margin-right: 8%;
  }

  .p-heading {
    margin-bottom: 0;
    margin-top: 46px;
    line-height: 40px;
  }

  .p-min-info {
    width: 80%;
  }

  .p-sub-heading {
    font-size: 16px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 500px) {
  .p-min2-info {
    width: 80%;
    margin-right: 8%;
  }

  .p-heading {
    margin-bottom: 0;
    margin-top: 46px;
    line-height: 40px;
  }

  .p-min-info {
    width: 80%;
  }

  .p-sub-heading {
    font-size: 16px;
    margin-top: 30px;
  }
}
</style>
