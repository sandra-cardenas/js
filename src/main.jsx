import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKLr2d89k-axoswZ2L_EbGQ1jWKOocEtc",
  authDomain: "proyectocoderhousereact.firebaseapp.com",
  projectId: "proyectocoderhousereact",
  storageBucket: "proyectocoderhousereact.appspot.com",
  messagingSenderId: "298640455554",
  appId: "1:298640455554:web:66ed2992d2640b9cbd819b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
