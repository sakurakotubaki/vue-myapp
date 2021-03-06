import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// eslint-disable-next-line quotes
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const user = auth.currentUser
export const db = getFirestore(app)
