<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { user } from "@/config/firebase";

console.log(user)

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  }
};
</script>
