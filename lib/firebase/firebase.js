// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "startech-59a1b.firebaseapp.com",
  projectId: "startech-59a1b",
  storageBucket: "startech-59a1b.firebasestorage.app",
  messagingSenderId: "57258748365",
  appId: "1:57258748365:web:ab67aaac99d34553097c84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Google Provider
const google = new GoogleAuthProvider();
export { auth, google };
