<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut">ログアウト</button>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import store from "../store/index"

export default {
  data() {

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
    }
  }
}
</script>
