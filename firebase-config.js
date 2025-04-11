// firebase-config.js

// Import Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNmkZ4KYQ0r_WC9bt-YS6Y-Mu8yV52usY",   // Replace with your Firebase API key
  authDomain: "compass-christian-church-4b02e.firebaseapp.com", // Replace with your Firebase authDomain
  projectId: "compass-christian-church-4b02e",         // Replace with your Firebase project ID
  storageBucket: "compass-christian-church-4b02e.appspot.com", // Replace with your Firebase storage bucket
  messagingSenderId: "436310011988",                  // Replace with your messaging sender ID
  appId: "1:436310011988:web:4087316a7b8d306be3fdc1", // Replace with your Firebase app ID
  measurementId: "G-T6EWRN2THW"                        // Replace with your Firebase measurement ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// Export for use in other files
export { auth, db, storage };
