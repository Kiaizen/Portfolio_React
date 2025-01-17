// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv2VRiYOf_QuHTnLOZJnGtw2m__Gt4lyw",
  authDomain: "pratica-descomplica-fa912.firebaseapp.com",
  databaseURL: "https://pratica-descomplica-fa912-default-rtdb.firebaseio.com",
  projectId: "pratica-descomplica-fa912",
  storageBucket: "pratica-descomplica-fa912.firebasestorage.app",
  messagingSenderId: "341782137930",
  appId: "1:341782137930:web:7181d18d85f1c55ded6ab3",
  measurementId: "G-EN4GTFBQV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);