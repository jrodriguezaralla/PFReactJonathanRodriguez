import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAnIfCxmAqcN8hWL_IDQ-X9qk4IzkT4Xc",
  authDomain: "react-proyectofinal-c3109.firebaseapp.com",
  projectId: "react-proyectofinal-c3109",
  storageBucket: "react-proyectofinal-c3109.appspot.com",
  messagingSenderId: "828905345245",
  appId: "1:828905345245:web:65f5720866eb3b693e8b34"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
