<template>
  <div>
    <div class="blog-post-hero">
      <div class="contain_blog">
        <div class="b-p-heading">
          <div class="back-to-blog">
            <nuxt-link to="/blog">← Back to Blog</nuxt-link>
          </div>

          <h1>The making of my amazing website with nuxt framework Love for the system</h1>
          <p>Well the amout you have is not for me</p>
        </div>

        <div class="author-container">
          <div>
            <nuxt-link to="/about">
              <div class="author-avatar">
                <img src="~assets/blog/blog-avatar.jpg" alt="blog avatar" />
              </div>
            </nuxt-link>
          </div>
          <div class="entry-meta-author-box">
            <a class="entry-meta-author" href="https://later.com/blog/author/jill/">Saurabh Rai</a>
            <a
              class="entry-meta-instagram"
              href="https://www.instagram.com/saurabh.archives"
            >@saurabh.archives</a>
          </div>
          <div class="entry-meta">
            <span class="entry-meta-date">August 7, 2019</span>
          </div>
        </div>
      </div>
    </div>

    <!-- hero image -->

    <div class="b-p-hero_image">
      <img src="~assets/blog/1.jpg" alt="blog hero image" />
      <p class="ps black50">Something Related to image</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog'
}
</script>

<style>
</style>
