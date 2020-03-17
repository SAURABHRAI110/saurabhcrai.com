<template>
  <section class="blog-container">
    <div class="all-article-grid">
      <!-- <LangSwitcher /> -->

      <div class="single-article" v-for="blog in blogs" :key="blog.name" :blog="blog">
        <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
          <div class="projects-wrapper-top hover-target">
            <div class="projects-wrapper item1">
              <div class="projects-card-wrapper">
                <div class="projects-card"></div>
                <div class="image-placeholder projects-image">
                  <img
                    :src="require(`~/assets/images/blog/${blog.id}/_thumbnail.jpg`)"
                    :classes="'article-thumbnail'"
                    width="100%"
                    :alt="blog.cardAlt"
                  />
                </div>

                <div class="projects-content">
                  <div class="published-time">
                    <span>Published on</span>
                    <span>{{blog.year}}</span>
                  </div>
                  <h3 class="article-title">{{ blog.title }}</h3>
                  <p class="article-description">{{ blog.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>

        <!-- <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" /> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    blogs: {
      type: Array
    },
    blog: {
      type: Object
    }
  }
}
</script>
<style scoped>
.blog-container {
  position: relative;
  width: 80%;
  height: auto;
  margin: auto;
  padding-right: 2.4rem;
}

.all-article-grid {
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  display: grid;
}
.all-article-grid > div:nth-child(2n) {
  padding-top: 50px;
}

.single-article {
  background-color: transparent;
}

.image-placeholder {
  overflow: hidden;
  line-height: 0;
}

.image-placeholder img {
  max-width: 100%;
  height: auto;
  transition: all 0.3s ease;
}

.published-time {
  padding: 31px 0px 0px 0px;
}

.article-title {
  padding: 0px 0px 0px 0px;
  margin: 11px 0px 14px 0px;
  font-size: 30px;
  color: #1f1f1f;
  transition: color 0.3s;
  min-height: 50px;
}

.article-description {
  margin: 0;
  font-size: 20px;
  color: #767676;
}

.article-thumbnail {
  max-width: 40%;
}

.article-thumbnail img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.article-info > div {
  margin: 30px 40px 30px 100px;
  position: relative;
}

.article-info_heading {
  font-size: 35px;
  line-height: 35px;
}

@media screen and (max-width: 999px) {
  .all-article-grid {
    display: flex;
    flex-direction: column;
  }

  .all-article-grid > div:nth-child(2n) {
    padding-top: 0px;
  }

  .single-article {
    padding-bottom: 80px;
  }

  .blog-container {
    width: 80%;

    padding-right: 0rem;
  }
}

@media screen and (max-width: 600px) {
  .blog-container {
    width: 91%;
  }
  .article-title {
    font-size: 22px;
  }

  .article-description {
    font-size: 16px;
  }
}

.projects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  perspective: 1000px;

  background-color: white;
}

.projects-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projects-card-wrapper {
  position: relative;

  border-radius: 0.1rem;
  overflow: hidden;
  /* cursor: url('/cnblack.svg'), auto; */
}

.projects-image {
  width: 100%;
  height: 100%;
  transform: scale(1.09);
  transform-origin: center;
  transition: transform 1.25s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.projects-card-wrapper {
  position: relative;
  transition: transform 0.95s cubic-bezier(0.475, 0.425, 0, 0.995);
}

.projects-content {
  /* position: absolute; */
  text-align: left;
  padding: 5px 9px 22px 10px;
  display: inline-block;
  z-index: 10;
  overflow: hidden;
  opacity: 1;
  transition: all 0.45s cubic-bezier(0.475, 0.425, 0, 0.995);
  color: rgb(31, 31, 31);
  /* background-color: #f7f7f7; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.projects-wrapper-top {
  transition: all 1s;
}
.projects-wrapper-top:hover .projects-content {
  right: -2%;
}

.projects-content:active {
  color: aquamarine;
}

.type-sub2 {
  font-weight: 700;
  font-size: 32px;
  /* line-height: 70px; */
  letter-spacing: 0.02em;
  margin-bottom: 0px;
}

.type-sub3 {
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.05em;
  margin-top: 1px;
}

/* animate */
.projects-wrapper-top:hover .projects-card-wrapper {
  transition-delay: 100ms;
  transform: scale(0.95) rotateY(-9deg);
}

.projects-wrapper-top:hover .projects-card-wrapper .projects-image {
  transition-delay: 200ms;
  transform: scale(1);
}

.single-article:hover .article-title {
  color: var(--primary-color);
}
</style>

