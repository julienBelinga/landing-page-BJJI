import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh4A1eL6PCHC9C73OiPijP4pq8ZZ7yDtw",
  authDomain: "bjj-insight.firebaseapp.com",
  projectId: "bjj-insight",
  storageBucket: "bjj-insight.firebasestorage.app",
  messagingSenderId: "840700096946",
  appId: "1:840700096946:web:ebc06c1aab17244c4d74ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
