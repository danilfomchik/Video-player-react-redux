// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import "firebase/compat/auth";

const API_KEY = process.env.REACT_APP_FIREBASE_CONFIG_API_KEY;

// добавить поля в .env и тут использовать

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "mini--react-372508.firebaseapp.com",
    projectId: "mini-youtube-react-372508",
    storageBucket: "mini-youtube-react-372508.appspot.com",
    messagingSenderId: "481568344595",
    appId: "1:481568344595:web:874709ba6fc32fc9f60de6",
    measurementId: "G-Q8RYWPT55X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
