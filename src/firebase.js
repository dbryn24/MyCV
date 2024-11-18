// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARZKFGQ9LIZiYnRb-aNL4eX2bkoIHJM0c",
  authDomain: "portofolio-4709a.firebaseapp.com",
  databaseURL: "https://portofolio-4709a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portofolio-4709a",
  storageBucket: "portofolio-4709a.firebasestorage.app",
  messagingSenderId: "723229570221",
  appId: "1:723229570221:web:dcb9c7dc270a3264258224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;