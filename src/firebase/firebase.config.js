// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ2bTB1lKY0rTnLKWxP4yLxRMp-Ah9BDw",
  authDomain: "react-dragon-news-auth-d742d.firebaseapp.com",
  projectId: "react-dragon-news-auth-d742d",
  storageBucket: "react-dragon-news-auth-d742d.firebasestorage.app",
  messagingSenderId: "593427131312",
  appId: "1:593427131312:web:70076d4b8fc417167f8475"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
