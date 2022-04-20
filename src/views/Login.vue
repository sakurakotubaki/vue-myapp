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
        <div class="button-panel">
          <button type="submit" class="button">ログインする</button>
        </div>
        <span class="forgot">
          <router-link to="/forgot">パスワードを忘れた</router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export default {
  name: "signIn",
  data: () => {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async signIn() {
      console.log("ログインしました");
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        await this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

/* fontawesome */
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
[class*="fontawesome-"]:before {
  font-family: "FontAwesome", sans-serif;
}

/* Simple Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body */
body {
  background: #e9e9e9;
  color: #5e5e5e;
  font: 400 87.5%/1.5em "Open Sans", sans-serif;
}

/* Form Layout */
.form-wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 370px;
}

h1 {
  text-align: center;
  padding: 1em 0;
}

form {
  padding: 0 1.5em;
}

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #f16272;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
}

.button:hover {
  background: #ee3e52;
}

.form-footer {
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}
</style>
