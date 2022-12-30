import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCniLVLzOIRWdifALsvm4s9p7hTzGcXnm8",
    authDomain: "junglebeauty-fb9a7.firebaseapp.com",
    projectId: "junglebeauty-fb9a7",
    storageBucket: "junglebeauty-fb9a7.appspot.com",
    messagingSenderId: "72470157960",
    appId: "1:72470157960:web:ef6f320f912f8836a31d3d",
    measurementId: "G-RN0ST7PPWY"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);