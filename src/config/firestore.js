// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ecom-d52fd.firebaseapp.com",
    projectId: "ecom-d52fd",
    storageBucket: "ecom-d52fd.appspot.com",
    messagingSenderId: "313499803573",
    appId: "1:313499803573:web:5f53b767c2db58565183fc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)