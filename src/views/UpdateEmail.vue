<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut" class="btn btn--orange">ログアウト</button>
    <div class="form-wrapper">
      <h1>メールアドレスを変更</h1>
      <form @submit.prevent="updateAccount">
        <div class="form-item">
          <input type="email" autocomplete="email" v-model="email" name="email" required="required" placeholder="新しいメールアドレスを入力してください" />
        </div>
        <div class="form-item">
          <input type="password" autocomplete="password" v-model="password" name="password" required="required" placeholder="パスワードを入力してください" />
        </div>
        <email-update-btn />
      </form>
    </div>
  </div>
</template>

<script>
import { signOut, EmailAuthProvider, reauthenticateWithCredential, onAuthStateChanged, updateEmail } from "firebase/auth";
import { auth } from "@/config/firebase";
import EmailUpdateBtn from "@/components/button/EmailUpdateBtn.vue";

export default {
  components: {
    EmailUpdateBtn
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async logOut() {
      try {
        await signOut(auth)
        await this.$router.push("/");
        console.log('ログアウトしました')
      } catch (error) {
        console.error(error)
        console.log('ログアウトに失敗しました')
      }
    },
    async updateAccount() {
      onAuthStateChanged(auth, (user) => {

        const credential = EmailAuthProvider.credential(this.email, this.password);

          if (user) {

            reauthenticateWithCredential(user, credential);

            updateEmail(user, this.email).then(() => {
              this.$router.push("/");
              alert("メールアドレスを変更しました。")
            }).catch((e) => {
              console.error(e);
            });

          }
      });
    }
  }
}
</script>
