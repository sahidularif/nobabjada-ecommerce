// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb3_ZQ52qTk891x6ItvY2hJTsj73jO-ek",
  authDomain: "nobabjada.firebaseapp.com",
  projectId: "nobabjada",
  storageBucket: "nobabjada.appspot.com",
  messagingSenderId: "17368413196",
  appId: "1:17368413196:web:7a4d128b127019b694ea29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()