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
    <div class="reed-container">
        <ul class="ul-container">
          <li class="li-container" v-for="tweet in tweets" :key="tweet.id">
            <span class="span-container">{{ tweet.post }}</span>
          </li>
        </ul>
        </div>
      </div>
</template>

<script>
import { signOut } from 'firebase/auth'
import { collection, getDocs, addDoc } from 'firebase/firestore'
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
    async tweetMessage () {
      if (!this.formValidation) return
      const docRef = await addDoc(collection(db, 'tweets'), {
        post: this.tweetValue
      })
      console.log('フォームのデータid: ', docRef.id)
      console.log('フォームのデータ: ', docRef.post)
    },
    async getTweets () {
      const querySnapshot = await getDocs(collection(db, 'tweets'))
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
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

<style lang="scss" scoped>

@media screen and (max-width:768px) {
  .reed-container {
    background-color: purple;
  }
}

@media screen and (max-width:488px) {
  .reed-container {
    background-color: orange;
  }
}

.reed-container {
  display: flex;
  justify-content: center;

  & .ul-container {
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 300px;
    font-size: 1.2em;

    & .li-container {
      background-color: #eee;
      text-align: left;

      & .span-container {
        margin: 30px 0 0 30px;
        background: pink;
      }
    }
  }
}
</style>
