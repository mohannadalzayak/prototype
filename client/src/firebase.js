// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-bc250.firebaseapp.com",
    projectId: "mern-blog-bc250",
    storageBucket: "mern-blog-bc250.appspot.com",
    messagingSenderId: "1077685997898",
    appId: "1:1077685997898:web:ab3aff37ce148cb1b831b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);