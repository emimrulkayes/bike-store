
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRvzPQN6iUJ5jPGD082WdXamBegAqKWk",
  authDomain: "bike-store-a459b.firebaseapp.com",
  projectId: "bike-store-a459b",
  storageBucket: "bike-store-a459b.appspot.com",
  messagingSenderId: "892278653019",
  appId: "1:892278653019:web:f0b6701fd351725707ff7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;