<template>
  <div class="about">
    <div class="form-wrapper">
      <h2>パスワードを忘れてしまった</h2>
      <form @submit.prevent="forGot">
        <div class="form-item">
          <input type="email" autocomplete="email" v-model="email" name="email" required="required" placeholder="メールアドレスを入力してください" />
        </div>
        <Button text="パスワードの登録を申請" color="#5e4af0" />
      </form>
    </div>
  </div>
</template>

<script>
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/config/firebase'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
  name: 'ForgotPage',
  data: () => {
    return {
      email: ''
    }
  },
  methods: {
    async forGot () {
      console.log('確認点')
      try {
        await sendPasswordResetEmail(auth, this.email)
        alert('メールアドレスにリクエストを送りました')
        // トップページへリダイレクト
        await this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
