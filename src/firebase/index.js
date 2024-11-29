// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdRhcWM-jSUFaO6dMU6BYwsy-1QGHM1qo",
  authDomain: "ecg-analysis-34dd0.firebaseapp.com",
  projectId: "ecg-analysis-34dd0",
  storageBucket: "ecg-analysis-34dd0.firebasestorage.app",
  messagingSenderId: "942129640425",
  appId: "1:942129640425:web:a71f6c6492e906ba279178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth(app);

export { auth };
