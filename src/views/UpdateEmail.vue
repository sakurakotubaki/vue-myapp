<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut" class="btn btn--orange">ログアウト</button>
    <div class="form-wrapper">
      <h2>メールアドレスを変更</h2>
      <form @submit.prevent="updateAccount">
        <div class="form-item">
          <input type="email" autocomplete="email" v-model="email" name="email" required="required" placeholder="新しいメールアドレスを入力してください" />
        </div>
        <div class="form-item">
          <input type="password" autocomplete="password" v-model="password" name="password" required="required" placeholder="パスワードを入力してください" />
        </div>
        <Button text="メールアドレスを変更する" color="#e3d80b" type="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { signOut, EmailAuthProvider, reauthenticateWithCredential, updateEmail } from 'firebase/auth'
import { auth } from '@/config/firebase'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
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
    async updateAccount () {
      const credential = EmailAuthProvider.credential(this.email, this.password)

      if (this.user) {
        await reauthenticateWithCredential(this.user, credential)

        updateEmail(this.user, this.email).then(() => {
          this.$router.push('/')
          alert('メールアドレスを変更しました。')
        }).catch((e) => {
          console.error(e)
        })
      }
    }
  }
}
</script>
