<template>
  <div>
    <h1>タイムラインページ</h1>
    <button @click="logOut">ログアウト</button>
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
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '@/config/firebase'

export default {
  name: 'MyPage',
  data () {
    return {
      tweets: []
    }
  },
  mounted () {
    this.getTweets()
  },
  computed: {
    user () {
      return this.$store.state.user
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
  margin-top: 20px;
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
