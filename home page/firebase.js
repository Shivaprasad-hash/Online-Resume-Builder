// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX44m5Bi3aO1RQPh5r0BSKRwEUU4mwUgU",
  authDomain: "resume-builder-fb3cf.firebaseapp.com",
  databaseURL: "https://resume-builder-fb3cf-default-rtdb.firebaseio.com",
  projectId: "resume-builder-fb3cf",
  storageBucket: "resume-builder-fb3cf.firebasestorage.app",
  messagingSenderId: "1091521301293",
  appId: "1:1091521301293:web:e5218e8421d1b71c50a1a4",
  measurementId: "G-8GK3G52NZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);