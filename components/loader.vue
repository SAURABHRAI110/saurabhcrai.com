<template>
  <div v-once></div>
</template>

<script>
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'
export default {
  props: ['isLoading'],
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true
    }
  },
  methods: {
    open() {
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          logo:
            'https://pathgather.github.io/please-wait/assets/images/pathgather.png',
          backgroundColor: '#f46d3b',
          loadingHtml:
            '<p class="loading-message">A good day to you fine user!</p>'
        })
      }
    },
    close() {
      if (this.pleaseWaitInstance != null) {
        this.pleaseWaitInstance.finish()
        this.pleaseWaitInstance = null
      }
    }
  }
}
</script>

<style scoped>
.loading-message {
  color: white;
}
</style>