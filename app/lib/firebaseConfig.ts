// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ0vy64vspZtW-W3Gs5fq3Tt8rFjWa_Rs",
  authDomain: "portfolio-f5374.firebaseapp.com",
  projectId: "portfolio-f5374",
  storageBucket: "portfolio-f5374.firebasestorage.app",
  messagingSenderId: "691971311493",
  appId: "1:691971311493:web:7f95028e7caf827b9aa6ec",
  measurementId: "G-LKS3Q8KXZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };