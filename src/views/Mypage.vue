<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut">ログアウト</button>
    <div class="form-wrapper">
      <h1>退会する</h1>
      <form @submit.prevent="deleteAccount">
        <div class="form-item">
          <input type="email" autocomplete="email" v-model="email" name="email" required="required" placeholder="メールアドレスを入力してください" />
        </div>
        <div class="form-item">
          <input type="password" autocomplete="password" v-model="password" name="password" required="required" placeholder="パスワードを入力してください" />
        </div>
        <Button text="アカウントを削除する" color="#ed0739" type="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { signOut, EmailAuthProvider, reauthenticateWithCredential, deleteUser } from 'firebase/auth'
import { auth } from '@/config/firebase'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
  name: 'MyPage',
  data () {
    return {
      email: '',
      password: ''
    }
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
    async deleteAccount () {
      const credential = EmailAuthProvider.credential(this.email, this.password)

      if (this.user) {
        await reauthenticateWithCredential(this.user, credential)

        deleteUser(this.user).then(() => {
          this.$router.push('/')
          alert('ユーザーを削除しました')
        }).catch((e) => {
          console.error(e)
        })
      }
    }
  }
}
</script>
