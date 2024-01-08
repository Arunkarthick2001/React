// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANaVwNAGpxmuiWOZFjO7Z_M6tFz0lCGWU",
  authDomain: "studentdatabase-973c4.firebaseapp.com",
  projectId: "studentdatabase-973c4",
  storageBucket: "studentdatabase-973c4.appspot.com",
  messagingSenderId: "216026089214",
  appId: "1:216026089214:web:5e3480f904e1c8594147af",
  measurementId: "G-29XZGKFRM0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
