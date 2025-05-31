/**
 * File: main.tsx
 * Author: Glenn Cruz
 * Created: May 21, 2025
 * Description: Main entry point for Digiksyunaryo website.
 * ---------------------------------------------------------------
 * This file initializes the React application and renders the main App
 * component. It sets up the React root and StrictMode for better
 * development experience and error catching.
 * Built with React and TypeScript.
 * 
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize React first before any security measures
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create root and render app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
