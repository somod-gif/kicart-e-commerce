// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

// Initialize Firebase Authentication and Firestore
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Fetch products from Firestore
export const fetchProducts = async () => {
  const productsCol = collection(db, "products");
  const productSnapshot = await getDocs(productsCol);
  console.log("Product snapshot:", productSnapshot); // Check the snapshot
  
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
};

// Export Firebase app and auth
export default firebaseApp;
export { auth };
