<template>
  <div class="article-container coding-stuff">
    <div class="hl"></div>
    <span class="article-category">{{ articleCategory }}</span>
    <div class="article-text-container">
      <span class="article-date">{{articleDate}}</span>
      <h1 class="article-heading">{{ articleHeading }}</h1>
      <p class="article-para black90">{{ articlePara}}</p>
      <div class="article-read-more">
        <span class="link-effect hover-link">
          <a :href="articleLink" target="_blank" rel="noopener">
            <span data-hover="Read more on Medium ↗">Read more on Medium ↗</span>
          </a>
        </span>
      </div>
      <div class="article-pic">
        <img class="article-pic-adjust" :src="articleThumbnail" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleCategory: String,
    articleDate: String,
    articleHeading: String,
    articlePara: String,
    articleLink: String,
    articleThumbnail: String
  }
}
</script>

<style >
.article-container {
  width: 80%;
  margin-left: calc(11% - 50px);
  min-height: 46vh;
  display: block;
  position: relative;
  background-color: white;
}

.show {
  display: block;
}

.hl {
  border-top: 1px solid #797979;
  width: 100%;
}

.hl-control1 {
  width: 77%;
  margin-left: calc(13% - 50px);
  background-color: white;
  position: relative;
}

.article-category {
  margin-left: 5%;
  padding-top: 4%;

  font-size: 20px;
  position: absolute;
}

.article-text-container {
  margin-left: 20%;
  padding-top: 4%;
  padding-bottom: 3%;
}

.article-date {
  /* font-family: saurabh-book; */
  font-size: 20px;
  position: relative;
}

.article-heading {
  /* font-family: saurabh; */
  font-size: 32px;
  position: relative;
  width: 65%;
  padding-top: 1.4%;
  line-height: 38px;
}

.article-para {
  position: relative;
  width: 65%;
  font-size: 16px;
  line-height: 24px;
  color: black;
  opacity: 0.7;
  /* font-family: saurabh-book; */
}

.article-pic {
  width: 230px;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  height: 230px;
  display: flex;
  position: absolute;
}

.article-pic-adjust {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-read-more {
  /* font-family: saurabh-book; */
  font-size: 20px;
  color: var(--primary-color);
  padding-top: 1%;
  position: relative;
}

@media (max-width: 1199px) {
  .article-pic {
    width: 220px;

    height: 220px;
  }

  .article-heading {
    width: 65%;
  }

  .article-para {
    width: 60%;
  }
}

@media (max-width: 999px) {
  .article-text-container {
    margin-left: 5%;
  }

  .article-category {
    margin-left: 27%;
  }

  .home-article-container {
    margin-left: 10%;
  }

  .article-container {
    margin-left: 10%;
  }

  /* .hero-title-div {
    margin-left: 10%;
    margin-top: 8%;
  } */

  .article-pic {
    width: 190px;
    right: 3%;
    height: 190px;
  }
}

@media (max-width: 800px) {
  .article-pic {
    width: 150px;
    right: 3%;
    height: 150px;
  }

  .article-heading {
    font-size: 26px;
    width: 58%;
  }

  .article-date {
    font-size: 14px;
  }

  .article-category {
    font-size: 14px;
  }

  .home-article-container {
    margin-left: 6%;
    width: 87%;
  }

  .article-para {
    width: 58%;
  }
}

@media (max-width: 500px) {
  .article-pic {
    width: 110px;
    height: 110px;
  }

  .article-heading {
    font-size: 21px;
  }

  .home-article-container {
    min-height: 46vh;
  }

  .article-heading {
    padding-top: 3.4%;
  }

  .article-text-container {
    padding-top: 7%;
  }

  .article-date {
    font-size: 14px;
  }

  .article-category {
    text-align: right;
    right: 42%;
    padding-top: 7.5%;
  }

  .article-read-more {
    font-size: 16px;
    padding-top: 5%;
  }
}

/* hover text slide in effect */
.hover-link a {
  position: relative;
  display: inline-block;
  outline: none;
  color: var(--primary-color);
  text-decoration: none;
}

.link-effect a {
  overflow: hidden;
}

.link-effect a span {
  position: relative;
  display: inline-block;
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0, 1);
}

.link-effect a span::before {
  content: attr(data-hover);
  position: absolute;
  top: 100%;
  color: var(--primary-color);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.link-effect a:hover span {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  transform: translateY(-100%);
}
</style>
