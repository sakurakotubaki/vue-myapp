<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut">ログアウト</button>
    <button @click="deleteAccount">退会する</button>
    <p>{{ userAuth }}</p>
  </div>
</template>

<script>
import { signOut, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { auth, user, credential } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import store from "@/store";
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    async userAuth() {
      await reauthenticateWithCredential(user, credential)
      console.log(this.user)
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
    async deleteAccount() {
      if(confirm("ユーザーを削除しますか？")) {
        try {
          await deleteUser(user)
          await this.$router.push("/");
          console.log('アカウントを削除しました')
        } catch (error) {
          console.error(error)
          console.log('アカウントの削除に失敗しました')
        }
      }
    }
  }
}
</script>
