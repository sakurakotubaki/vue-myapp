import { auth } from "@/config/firebase";
import { async } from "@firebase/util";

export async function signUp() {
  console.log("確認点");
  try {
    await createUserWithEmailAndPassword(auth, this.email, this.password);
    // トップページへリダイレクト
    await this.$router.push("/");
  } catch (error) {
    console.error(error);
  }
}

export async function signIn() {
  console.log("ログインしました");
  try {
    await signInWithEmailAndPassword(auth, this.email, this.password);
    await this.$router.push("/mypage");
  } catch (error) {
    console.error(error);
  }
}

export async function auth() {
  await onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;

    } else {
      
    }
  });
}
