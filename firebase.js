
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO3l26iNzSBSVnNPGPpz9g2HFsmQrapUA",
  authDomain: "torsdag-ee1cf.firebaseapp.com",
  projectId: "torsdag-ee1cf",
  storageBucket: "torsdag-ee1cf.firebasestorage.app",
  messagingSenderId: "366920203555",
  appId: "1:366920203555:web:4c0586b6677841d55ae096"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)