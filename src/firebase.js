import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQvmsoVJnH9iEvNIH09t-bdfMrixdQU4o",
  authDomain: "chatting-18464.firebaseapp.com",
  projectId: "chatting-18464",
  storageBucket: "chatting-18464.appspot.com",
  messagingSenderId: "34553868768",
  appId: "1:34553868768:web:3146f96277836c9897bb85",
  measurementId: "G-38073ZFSEY",
};

// Initialize Firebase;
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
