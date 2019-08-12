<template>
  <div class="contribute">
    <!-- <p v-for="(post,key) in bloglist" :key="key">
      Caught a mistake or want to contribute to the blog?
      <span class="red">
        <a
          :href="`https://github.com/SAURABHRAI110/saurabhcrai.com/tree/master/articles/${post.slug}`"
          target="_blank"
          rel="noopener"
        >Edit this page on GitHub!</a>
      </span>
    </p>-->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.contribute {
  margin-top: 30px;
  border-top: 1px solid #e5e5e5;
}
.contribute p {
  color: #7f8c8d;
  padding-top: 15px;
  padding-bottom: 0;
  margin: 0;
  font-size: 14px;
}
</style>