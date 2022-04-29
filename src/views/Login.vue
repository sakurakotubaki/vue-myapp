<template>
  <div class="about">
    <div class="form-wrapper">
      <h1>Login</h1>
      <form @submit.prevent="signIn">
        <div class="form-item">
          <input type="email" autocomplete="email" v-model="email" name="email" required="required" placeholder="メールアドレスを入力してください" />
        </div>
        <div class="form-item">
          <input type="password" autocomplete="password" v-model="password" name="password" required="required" placeholder="パスワードを入力してください" />
        </div>
        <login-btn />
        <span class="forgot">
          <router-link to="/forgotPassword">パスワードを忘れた</router-link><br>
        </span>
      </form>
      <p>{{user}}</p>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import LoginBtn from "@/components/button/LoginBtn.vue";
import Vuex from 'vuex'

export default {
  components: {
    LoginBtn
  },
  name: "signIn",
  data: () => {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.status
    }
  },
  methods: {
    async signIn() {
      console.log("ログインしました");
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        await this.$router.push("/my_page");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
