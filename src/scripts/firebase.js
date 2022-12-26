// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoi-Cjaamj6w36soSFJoawuzkETRXYhrw",
  authDomain: "portfolio-f9fa7.firebaseapp.com",
  projectId: "portfolio-f9fa7",
  storageBucket: "portfolio-f9fa7.appspot.com",
  messagingSenderId: "352410894337",
  appId: "1:352410894337:web:0b66a8c4e1782a294e8000",
  measurementId: "G-9XLSNR4TWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);