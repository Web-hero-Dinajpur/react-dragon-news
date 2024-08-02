// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3qaDu7nu79jMCfw3zEVjbIywFHwOp56c",
  authDomain: "react-dragon-news-d67df.firebaseapp.com",
  projectId: "react-dragon-news-d67df",
  storageBucket: "react-dragon-news-d67df.appspot.com",
  messagingSenderId: "401427582001",
  appId: "1:401427582001:web:1cb904edc953e8d78ed910",
  measurementId: "G-7QWVX35TT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;