import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAZGmwJYIYkQ6bu9iKS1IiyVecAn-RZlbM",
authDomain: "polar-paths.firebaseapp.com",
projectId: "polar-paths",
storageBucket: "polar-paths.firebasestorage.app",
messagingSenderId: "986817990150",
appId: "1:986817990150:web:5fbb1ab023a85b94353d87",
measurementId: "G-MYFRL7PR2D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, query, orderBy };
