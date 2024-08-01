import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWvo6gm0QgJVyQ2NTqT663F9qvQuhpUg",
  authDomain: "chat-f8930.firebaseapp.com",
  projectId: "chat-f8930",
  storageBucket: "chat-f8930.appspot.com",
  messagingSenderId: "479598442710",
  appId: "1:479598442710:web:e2eb9e129bae1f7354b177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




