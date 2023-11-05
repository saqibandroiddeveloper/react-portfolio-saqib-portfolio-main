import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkUlT1I34jOLC5cLdD8dDSEAmtsM4K7Kk",
    authDomain: "portfolio-74c63.firebaseapp.com",
    projectId: "portfolio-74c63",
    storageBucket: "portfolio-74c63.appspot.com",
    messagingSenderId: "527904297966",
    appId: "1:527904297966:web:47e30ba17c154ea13874ff",
    measurementId: "G-FSYS92VH5Q"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();