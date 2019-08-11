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
.article-read-more {
  /* font-family: saurabh-book; */
  font-size: 20px;
  color: var(--primary-color);
  padding-top: 1%;
  position: relative;
}

.article-read-more {
  font-size: 16px;
  padding-top: 5%;
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
