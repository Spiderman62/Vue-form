import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCRSpaEcWYlxFl3AN2FO4stQU9AJ8fn2qY",
  authDomain: "vue-http-demo-ed78a.firebaseapp.com",
  projectId: "vue-http-demo-ed78a",
  storageBucket: "vue-http-demo-ed78a.appspot.com",
  messagingSenderId: "737826169188",
  appId: "1:737826169188:web:577f19ddac80028e825a71"
};
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;