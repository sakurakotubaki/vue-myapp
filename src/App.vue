<template>
  <div id="app">
    <nav>
      <router-link to="/">ホーム</router-link> |
      <router-link to="/login">ログイン</router-link> |
      <router-link to="/signup">新規登録</router-link>
      <p>ログインしていますか？: {{ isLoginState }}</p>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import store from "@/store";

export default {
  mounted: function () {
    onAuthStateChanged(auth, (user) => {
      store.commit("setIsLogin", user !== null)
    });
  },
  computed: {
    isLoginState() {
      return this.$store.state.isLogin;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
