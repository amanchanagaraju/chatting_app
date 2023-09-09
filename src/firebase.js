import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgHuoNIevkTfYZkSfGI5Eyal16PBGETzU",
  authDomain: "chating-d7d98.firebaseapp.com",
  projectId: "chating-d7d98",
  storageBucket: "chating-d7d98.appspot.com",
  messagingSenderId: "1013890543202",
  appId: "1:1013890543202:web:9ba84a2a4f83e4c8ad6b3b",
  measurementId: "G-J26VWQLC8J",
};

// Initialize Firebase;
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
