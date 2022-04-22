<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="logOut">ログアウト</button>
    <p>{{ user }}</p>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted: {
    ...mapActions(['setUser'])
  },
  computed: {
    ...mapGetters(['user'])
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
