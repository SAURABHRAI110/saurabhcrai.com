<template>
  <div class="c-section1">
    <div class="c-min-info ps">
      <span class="c-min1">{{pDate}}</span>
      <span class="c-min2">{{pWebsite}}</span>
      <span class="c-min3">{{pCategory}}</span>
    </div>

    <div class="c-min2-info">
      <h2 class="c-heading" :style="pHeadingcolor">{{pHeading}}</h2>
      <h3 class="c-heading-sub opacity70">{{pSubheading}}</h3>
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
.c-section1 {
  width: 100%;
  height: 40vh;
  background-color: white;
  margin-left: -100px;
}
@media screen and (max-width: 999px) {
  .c-section1 {
    margin-left: 50px;
  }
}

.c-section1 {
  width: 100%;
  height: 40vh;
  background-color: white;
}

.c-heading {
  margin-bottom: 0;
  margin-top: 70px;
  position: relative;
  z-index: 3;
  color: var(--primary-color);
}

.c-heading-sub {
  font-size: 26px;
  margin-top: 10px;
  position: relative;
  z-index: 3;
}

.c-min-info {
  width: 62.5%;
  position: relative;
  margin-left: 20%;
  margin-right: 17%;
  height: 10vh;
}

.c-min2-info {
  width: 63%;
  position: relative;
  margin-left: 20%;
  margin-right: 17%;
  height: 20vh;
}

.c-min1 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  z-index: 3;
}

.c-min2 {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 3;
}

.c-min3 {
  right: 0;
  position: absolute;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  z-index: 3;
}

@media screen and (max-width: 1199px) {
  .c-heading-sub {
    font-size: 23px;
  }
}

@media screen and (max-width: 999px) {
  .c-min-info {
    width: 80%;
    margin-left: 10%;
  }

  .c-min2-info {
    width: 80%;
    margin-left: 10%;
  }

  .c-heading-sub {
    font-size: 21px;
  }
}

@media screen and (max-width: 800px) {
  .c-min2-info {
    width: 80%;
    margin-left: 10%;
    margin-right: 8%;
  }

  .c-heading {
    margin-bottom: 0;
    margin-top: 46px;
    line-height: 40px;
  }

  .c-min-info {
    width: 80%;
    margin-left: 10%;
  }

  .c-heading-sub {
    font-size: 16px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 500px) {
  .c-min2-info {
    width: 80%;
    margin-left: 10%;
    margin-right: 8%;
  }

  .c-heading {
    margin-bottom: 0;
    margin-top: 46px;
    line-height: 40px;
  }

  .c-min-info {
    width: 80%;
    margin-left: 10%;
  }

  .c-heading-sub {
    font-size: 16px;
    margin-top: 30px;
  }
}
</style>
