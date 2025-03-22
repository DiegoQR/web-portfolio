import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ObserverProvider from "./components/ObserverProvider.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ObserverProvider>
      <App />
    </ObserverProvider>
  </React.StrictMode>,)
