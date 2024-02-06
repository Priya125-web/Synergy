// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cms-synergy-68851.firebaseapp.com",
  projectId: "cms-synergy-68851",
  storageBucket: "cms-synergy-68851.appspot.com",
  messagingSenderId: "860928819001",
  appId: "1:860928819001:web:9b07eed4102c32e1fd32e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);