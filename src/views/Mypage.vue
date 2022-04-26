<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut">ログアウト</button>
    <button @click="deleteAccount">退会する</button>
  </div>
</template>

<script>
import { signOut, deleteUser } from "firebase/auth";
import { auth, user } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import store from "@/store";
import { mapActions, mapGetters } from 'vuex';

export default {
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
          await deleteUser(user.uid)
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
