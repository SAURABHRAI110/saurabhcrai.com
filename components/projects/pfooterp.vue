<template>
  <div class="project-previous">
    <div class="overlay"></div>
    <span class="p-text">
      <h3>Previous Project</h3>
    </span>

    <span class="np_details">
      <p class="np_heading">{{projectName}}</p>
      <p class="np_sub-heading">{{projectCategories}}</p>
    </span>
    <img :src="thumbnail" />
  </div>
</template>

<script>
export default {
  props: {
    projectName: String,
    projectCategories: String,
    thumbnail: String
  }
}
</script>

<style>
</style>
