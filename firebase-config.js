// firebase-config.js

// Import Firebase SDK
import firebase from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNmkZ4KYQ0r_WC9bt-YS6Y-Mu8yV52usY",
  authDomain: "compass-christian-church-4b02e.firebaseapp.com",
  projectId: "compass-christian-church-4b02e",
  storageBucket: "compass-christian-church-4b02e.firebasestorage.app",
  messagingSenderId: "436310011988",
  appId: "1:436310011988:web:4087316a7b8d306be3fdc1",
  measurementId: "G-T6EWRN2THW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Export services for use in other parts of the app
export { auth, db, storage };
