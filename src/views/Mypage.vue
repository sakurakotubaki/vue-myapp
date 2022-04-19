<template>
  <div>
    <h1>ユーザー管理</h1>
    <button @click="deleteUser">退会する</button>
  </div>
</template>

<script>
import { deleteUser } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, user } from "@/config/firebase";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export default {
  data: () => {
  },
  methods : {
    async deleteUser(user) {
      try {
        console.log('ユーザーアカウントを削除しました!')
        alert('ユーザーアカウントを削除しました!')
      } catch (e) {
        console.error(e)
        alert('ユーザーアカウントの削除に失敗しました!')
      }
    }
  },
}
</script>
