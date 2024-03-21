// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-63b11.firebaseapp.com",
    projectId: "mern-estate-63b11",
    storageBucket: "mern-estate-63b11.appspot.com",
    messagingSenderId: "257780851442",
    appId: "1:257780851442:web:5e2efaa475c068d4ad666b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);