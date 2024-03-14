import React from 'react';
import ReactDOM from 'react-dom/client';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { App } from './App';
import './css/main.css';
import './css/entrance.css';
import './css/notify.css';

const react_url = 'http://localhost:5000';
const auth = getAuth(
  initializeApp({
    apiKey: "AIzaSyANiqUo6_7YyUqGBY3AVOT_pFNxdDO03jQ",
    authDomain: "chat-app-8092e.firebaseapp.com",
    projectId: "chat-app-8092e",
    storageBucket: "chat-app-8092e.appspot.com",
    messagingSenderId: "1097120028629",
    appId: "1:1097120028629:web:68db99847236c027decf5c",
    measurementId: "G-P35XHBZ01M"
  })
);

export const data = { react_url, auth };

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
    const userString = JSON.stringify(user, (key, value) => {
      if (value === undefined) {
        return null;
      }
      return value;
    });
    localStorage.setItem('user', userString);
  } else {
    console.log('User is signed out');
    localStorage.removeItem('user');
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
