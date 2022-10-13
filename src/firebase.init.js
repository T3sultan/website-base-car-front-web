// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0lYHtSTuL9AOAPTTfG27xbSJl1xdCli8",
  authDomain: "genius-car-services-a2f7c.firebaseapp.com",
  projectId: "genius-car-services-a2f7c",
  storageBucket: "genius-car-services-a2f7c.appspot.com",
  messagingSenderId: "1021691015478",
  appId: "1:1021691015478:web:40c7e9c7f910026d754397",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
