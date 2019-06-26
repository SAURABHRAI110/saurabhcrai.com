<template>
  <main :key="0" class="layout--default">
    <div class="row--outer">
      <h1 class="lvl1 progress">{{ formattedProgress }}</h1>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loadingProgress: 0,
      loadingInterval: null
    }
  },
  computed: {
    formattedProgress() {
      return this.loadingProgress > 100 ? 100 : this.loadingProgress
    }
  },
  mounted() {
    setTimeout(this.startLoading, 700)
  },
  methods: {
    startLoading() {
      clearInterval(this.loadingInterval)
      this.loadingProgress = 0
      this.loadingInterval = setInterval(this.loading, 100)
    },
    loading() {
      const progressDelta = 10
      this.loadingProgress += progressDelta

      if (this.loadingProgress === 110) {
        clearInterval(this.loadingInterval)
        this.$router.push({ path: 'intro' })
      }
    }
  }
}
</script>

<style scoped>
.layout--default {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

main {
  overflow: hidden;
}

.progress {
  font-size: rem(200);
}
</style>
