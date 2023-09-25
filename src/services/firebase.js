// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2YE78_DCGUexCaRTZ_j1-HkYrziPXbpM",
  authDomain: "poppins-auth.firebaseapp.com",
  projectId: "poppins-auth",
  storageBucket: "poppins-auth.appspot.com",
  messagingSenderId: "179057555840",
  appId: "1:179057555840:web:23cecbb6e2f2526545a965",
  measurementId: "G-L2WJB08KP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
