import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { ActiviesProvider } from './context/ActivitesContext';
import { AuthProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ActiviesProvider>
    <CartProvider>
    <ThemeProvider>
   <BrowserRouter>
     <App />
    </BrowserRouter>
   </ThemeProvider>
   </CartProvider>
   </ActiviesProvider>
   </AuthProvider>
  </React.StrictMode>
);

