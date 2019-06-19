<template>
  <div>
    <projecthero
      pDate="Dec 2018"
      pWebsite="filmingeye.com"
      pCategory="Product Design"
      pHeading="Improve visual perception"
      pHeadingcolor="color:#da2c4d;"
      pSubheading="Filming Eye Web Experience"
    />
    <h1>love</h1>
    <Appreciate/>
    <div class="project-footer">
      <projectfooter/>
    </div>
  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Projectfooter from '~/components/projects/projectfooter'
import Appreciate from '~/components/projects/appreciate'
export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Appreciate,
    Projecthero
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}
</style>
