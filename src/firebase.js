// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB70KNH5wfXO5Ymu0zzJxo6s8z8Hb5_FCE",
  authDomain: "fitcheck-abe12.firebaseapp.com",
  projectId: "fitcheck-abe12",
  storageBucket: "fitcheck-abe12.appspot.com",
  messagingSenderId: "934046669656",
  appId: "1:934046669656:web:4706997c9ce154d6a3a32d",
  measurementId: "G-XK89E508MS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const rtdb = getDatabase(app); // Realtime Database instance
