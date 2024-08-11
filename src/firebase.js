
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyClPjbIbpgZZCwjtal_mFfT5MVnY9NfBvo",
  authDomain: "subhangee-s-portfolio.firebaseapp.com",
  projectId: "subhangee-s-portfolio",
  storageBucket: "subhangee-s-portfolio.appspot.com",
  messagingSenderId: "12215935977",
  appId: "1:12215935977:web:e191d0bf1beedc26f6e178",
  measurementId: "G-7P0H9J1F2E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);