// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCAyRzsV9erPmcCgRbbp_LcFly-_kXo0k",
  authDomain: "conciergeaicare.firebaseapp.com",
  databaseURL: "https://conciergeaicare-default-rtdb.firebaseio.com",
  projectId: "conciergeaicare",
  storageBucket: "conciergeaicare.firebasestorage.app",
  messagingSenderId: "736467418582",
  appId: "1:736467418582:web:56d9f247588f86945cb877",
  measurementId: "G-4JZK9H5Z24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);