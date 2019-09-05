
 <template>
  <form class="blog-comment-section" @submit.prevent="onSubmit">
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
          placeholder=" Your sweet name"
        />
        <textarea
          required
          class="post-comment-text"
          v-model="comment"
          id="comment"
          placeholder=" Write your comment here and remember you will not be able to delete it. In case contact Saurabh.
           "
        ></textarea>

        <button class="post-comment-button" type="submit" value="Submit">Post Comment</button>
      </div>
      <!-- <p>Message is: {{ message }}</p> -->
      <div class="number-of-comments contain">4 comments</div>
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

.blog-comment-section {
  width: 100%;
  height: auto;
  padding: 0px 0px 0px 0px;
}

.blog-comment-section .comment-heading {
  padding: 0px 0px 0px 0px;
  background-color: white;
}

.blog-comment-section .comment-heading p {
  color: var(--primary-color);
}

.comment-container {
  background: #f8f8f8;
  width: 100%;
  padding: 30px 0px;
}

.comment-container > div:first-child {
  background: white;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
}

.blog-comment-section .post-comment-name {
  width: 40%;
  height: 45px;
  background: #fff;
  border: 1px solid #707070;
  opacity: 0.59;
  font-family: circular-book;
  font-size: 20px;
  padding: 0px 0px 0px 20px;
  margin: 30px 0px 12px 0px;
}

.blog-comment-section .post-comment-text {
  width: 100%;
  height: 140px;
  background: #fff;
  border: 1px solid #707070;
  opacity: 0.59;
  font-family: circular-book;
  font-size: 20px;
  padding: 0px 0px 0px 20px;
  margin: 0px 0px 12px 0px;
  text-align: left;
}

.blog-comment-section .post-comment-button {
  max-width: 300px;
  padding: 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: circular-book;
  cursor: pointer;
}

.number-of-comments {
  padding: 54px 0px 9px 0px;
  position: relative;
}

.number-of-comments:after {
  content: '';
  width: 100%;
  height: 1px;
  background-color: #707070;
  width: 100%;
  left: 0px;
  opacity: 0.53;
  position: absolute;
  bottom: 0px;
}

.users-old-comments .name {
  font-family: 'circular-book';
  font-size: 20px;
  text-align: left;
  color: var(--primary-color);
  padding: 25px 0px 0px 0px;
}

.users-old-comments {
  width: 100%;
  position: relative;
}

.users-old-comments .date {
  font-family: 'circular-book';
  font-size: 12px;
  text-align: left;
  color: #525252;
  opacity: 0.6;
  padding: 0px 0px 0px 0px;
}

.users-old-comments .text {
  font-family: 'circular-book';
  font-size: 20px;
  text-align: left;
  color: #606060;
  padding: 15px 0px 30px 0px;
}

.users-old-comments .contain {
  position: relative;
}

.users-old-comments .text:after {
  content: '';
  width: 100%;
  height: 1px;
  background-color: #707070;
  width: 100%;
  left: 0px;
  opacity: 0.53;
  position: absolute;
  bottom: 0px;
}
</style>
