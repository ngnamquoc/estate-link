// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA51peIqIpo4yH6HTbq9Gdw-hpR1yCQA5k",
  authDomain: "estate-link-5b431.firebaseapp.com",
  projectId: "estate-link-5b431",
  storageBucket: "estate-link-5b431.firebasestorage.app",
  messagingSenderId: "222495842071",
  appId: "1:222495842071:web:9a4a786328081578e5a152"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();