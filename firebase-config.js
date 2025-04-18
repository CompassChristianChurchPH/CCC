// firebase-config.js

// Proper Firebase modular imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNmkZ4KYQ0r_WC9bt-YS6Y-Mu8yV52usY",
  authDomain: "compass-christian-church-4b02e.firebaseapp.com",
  projectId: "compass-christian-church-4b02e",
  storageBucket: "compass-christian-church-4b02e.appspot.com",
  messagingSenderId: "436310011988",
  appId: "1:436310011988:web:4087316a7b8d306be3fdc1",
  measurementId: "G-T6EWRN2THW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
