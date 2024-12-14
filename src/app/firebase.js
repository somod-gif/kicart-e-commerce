// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgA6kF9iPcO9VOONgYqYY_6MvWXpiaSUU",
  authDomain: "e-commerce-platform-dd050.firebaseapp.com",
  projectId: "e-commerce-platform-dd050",
  storageBucket: "e-commerce-platform-dd050.appspot.com",
  messagingSenderId: "249329361806",
  appId: "1:249329361806:web:fec35d9653ed3400f0badf",
  measurementId: "G-GVBHS8KFEX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default firebaseApp;
export { auth };