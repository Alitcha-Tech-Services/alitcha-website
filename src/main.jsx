import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Conference from "./components/features/Conference.jsx"; // Importer spécifiquement le fichier Conference.jsx
import Header from "./components/features/Header.jsx"; // Importer spécifiquement le fichier Header.jsx



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
)
