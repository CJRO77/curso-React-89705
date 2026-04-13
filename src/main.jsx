
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/CartContext.jsx';


createRoot(document.getElementById('root')).render(

  
    <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  
)


