// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6qJi0H3ddBMsiuxoxqc2Uw2K1jEvOio",
  authDomain: "hackaton-4b53d.firebaseapp.com",
  projectId: "hackaton-4b53d",
  storageBucket: "hackaton-4b53d.firebasestorage.app",
  messagingSenderId: "658319217394",
  appId: "1:658319217394:web:ef52bab6aa1afd544f366b",
  measurementId: "G-RD6ZSG6ENQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase app initialized", app);

// Exportar los objetos de autenticación y Firestore
export { auth, db };