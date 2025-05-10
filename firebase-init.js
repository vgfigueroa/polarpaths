// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAZGmwJYIYkQ6bu9iKS1IiyVecAn-RZlbM",
authDomain: "polar-paths.firebaseapp.com",
projectId: "polar-paths",
storageBucket: "polar-paths.firebasestorage.app",
messagingSenderId: "986817990150",
appId: "1:986817990150:web:5fbb1ab023a85b94353d87",
measurementId: "G-MYFRL7PR2D"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Export usable functions and db
export { db, collection, getDocs, addDoc };
