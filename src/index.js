import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgc7PusVS_vwjUBm4I5HwdqJdPjCJPkDQ",
  authDomain: "proyectofinal-react-ricordel.firebaseapp.com",
  projectId: "proyectofinal-react-ricordel",
  storageBucket: "proyectofinal-react-ricordel.appspot.com",
  messagingSenderId: "363546992350",
  appId: "1:363546992350:web:e28d6cd7b92edc5737ac4f"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
