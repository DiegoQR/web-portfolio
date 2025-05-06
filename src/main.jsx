import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ObserverProvider from "./components/ObserverProvider.jsx";
import { IconContext } from "react-icons";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ObserverProvider>
      <IconContext.Provider value={{ className: "text-2xl" }}>
        <App />
      </IconContext.Provider>
    </ObserverProvider>
  </React.StrictMode>,)
