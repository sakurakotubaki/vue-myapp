<template>
  <div>
    <h1>投稿ページ</h1>
    <button @click="logOut">ログアウト</button>
    <div class="form-wrapper">
      <h1>メッセージを投稿する</h1>
      <form @submit.prevent="tweetMessage">
        <div class="form-item">
          <label for="tweet">投稿する内容を入力</label><br>
          <textarea
          name="tweet"
          id="tweet"
          cols="30"
          rows="10"
          v-model="tweetValue"
          ></textarea>
        </div>
        <p v-if="!formValidation" v-bind:style="{ color: 'red' }">140文字未満で入力してください。</p>
        <Button text="投稿" color="#6a88eb" type="submit" />
      </form>
    </div>
    <div class="reed">
      <ul>
        <li v-for="tweet in tweets" :key="tweet.id">
          <p>{{ tweet.post }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '@/config/firebase'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
  name: 'MyPage',
  data () {
    return {
      tweetValue: '',
      tweets: []
    }
  },
  mounted () {
    this.getTweets()
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    formValidation () {
      return this.tweetValue.length < 140
    }
  },
  methods: {
    async logOut () {
      try {
        await signOut(auth)
        await this.$router.push('/')
        console.log('ログアウトしました')
      } catch (error) {
        console.error(error)
        console.log('ログアウトに失敗しました')
      }
    },
    tweetMessage () {
      if (!this.formValidation) return
      console.log(this.tweetValue)
    },
    async getTweets () {
      const querySnapshot = await getDocs(collection(db, 'tweets'))
      querySnapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          post: doc.data().post
        })
      })
      console.log(this.tweets)
    }
  }
}
</script>
