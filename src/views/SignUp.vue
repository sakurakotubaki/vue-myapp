<template>
  <div class="about">
    <div class="form-wrapper">
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp">
        <div class="form-item">
          <input type="email" autocomplete="email" v-model="email" name="email" required="required" placeholder="メールアドレスを入力してください" />
        </div>
        <div class="form-item">
          <input type="password" autocomplete="password" v-model="password" name="password" required="required" placeholder="パスワードを入力してください" />
        </div>
        <sign-up-btn />
      </form>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'
import SignUpBtn from '@/components/button/SignUpBtn.vue'

export default {
  components: {
    SignUpBtn
  },
  name: 'SignupPage',
  data: () => {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async signUp () {
      console.log('確認点')
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        // トップページへリダイレクト
        await this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
