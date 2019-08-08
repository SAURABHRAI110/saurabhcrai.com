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
      </div>
    </div>

    <div class="b-p-hero_image">
      <img src="https://source.unsplash.com/random" alt="blog hero image" />
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
