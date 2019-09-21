
 <template>
  <form class="blog-comment-section" @submit.prevent="onSubmit" id="comment-form">
    <div class="contain">
      <div class="comment-heading">
        <p>Loved it. Leave a thoughtful Comment.</p>
      </div>
    </div>

    <div class="comment-container">
      <div class="contain">
        <input
          required
          class="post-comment-name pl"
          v-model="name"
          id="name"
          placeholder="Your sweet name"
        />
        <textarea
          cols="4"
          required
          class="post-comment-text"
          v-model="comment"
          id="comment"
          placeholder="Write your comment here and remember you will not be able to delete it. In case contact Saurabh.
           "
        ></textarea>

        <button class="post-comment-button" type="submit" value="Submit">Post Comment</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      comment: null
    }
  },

  methods: {
    onSubmit() {
      let userComment = {
        name: this.name,
        comment: this.comment,
        date: new Date()
      }
      this.$emit('comment-submitted', userComment)
      this.name = null
      this.comment = null
      this.date = null
    }
  }
}
</script>

<style scoped>
/* blog comment section */
</style>
