// Importar los módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";




  const firebaseConfig = {
    apiKey: "AIzaSyACsoiCXHhesldhH_H-9Q4gc7PA3KOC26k",
    authDomain: "conjuntos-f13cd.firebaseapp.com",
    projectId: "conjuntos-f13cd",
    storageBucket: "conjuntos-f13cd.firebasestorage.app",
    messagingSenderId: "63635015890",
    appId: "1:63635015890:web:89b946713a609a698f050b",
    measurementId: "G-P6CHDM7DV2"
  };




// Inicializar Firebase
const app = initializeApp(firebaseConfig);


// Inicializar servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);


console.log("Firebase app initialized", app);


// Exportar los objetos de autenticación y Firestore
export { auth, db };

