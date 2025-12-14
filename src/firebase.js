// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe5WAhcKopgUEUkzEfTRmhUBNxaa2EW-I",
  authDomain: "indy-ysa.firebaseapp.com",
  projectId: "indy-ysa",
  storageBucket: "indy-ysa.firebasestorage.app",
  messagingSenderId: "45432037294",
  appId: "1:45432037294:web:5b68501ea31c24fb84723f",
  measurementId: "G-7ECXC5V2JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);