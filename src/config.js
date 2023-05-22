// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDMQjhOjrE6AdkQORXoEHobQpmK4LCAtYQ",
  authDomain: "bullsbears2502.firebaseapp.com",
  databaseURL: "https://bullsbears2502-default-rtdb.firebaseio.com",
  projectId: "bullsbears2502",
  storageBucket: "bullsbears2502.appspot.com",
  messagingSenderId: "995885875905",
  appId: "1:995885875905:web:34221a6af32002aabd0a40"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(config);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();