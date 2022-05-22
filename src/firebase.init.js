// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQkxUUc7rW6fxi1CAe-6KpcYm-2PA8dEk",
  authDomain: "obitx-bcc35.firebaseapp.com",
  projectId: "obitx-bcc35",
  storageBucket: "obitx-bcc35.appspot.com",
  messagingSenderId: "304969998176",
  appId: "1:304969998176:web:b44e3aae4901a2d9528805",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
