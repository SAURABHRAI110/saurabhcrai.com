<template>
  <div>
    <h1>love</h1>
    <Appreciate/>
    <div class="project-footer">
      <projectfooter/>
    </div>
  </div>
</template>

<script>
import Projectfooter from '~/components/projectfooter'
import Appreciate from '~/components/appreciate'
export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Appreciate
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}
</style>
