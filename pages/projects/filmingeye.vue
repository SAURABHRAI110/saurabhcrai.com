<template>
  <div>
    <projecthero
      pDate="Dec 2018 "
      pWebsite="filmingeye.com"
      pCategory="Product Design"
      pHeading="Improve visual  perception"
      pHeadingcolor="color:#da2c4d;"
      pSubheading="Filming Eye Web Experience"
    />
    <div class="p-hero_image"></div>
    <Preface
      timeframe=" April 2018- May 2018
            <br>2 Month"
      tools="   Adobe Creative Suite
            <br>Sketch, Flinto, Zeplin sdwdswdw wdwd"
      role="  UI/UX Desiner
            <br>Marketing"
      team="  UI/UX Desiner
            <br>Marketing"
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
import Preface from '~/components/projects/preface'
import Projectfooter from '~/components/projects/projectfooter'
import Appreciate from '~/components/projects/appreciate'
export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
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
