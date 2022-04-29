<template>
  <div>
    <h1>404 Not Found ページが存在しません😱</h1>
    <button @click="goToHome">ホームに戻る</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
