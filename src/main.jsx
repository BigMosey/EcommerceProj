import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'tailwindcss/tailwind.css';
import { ProductProvider } from './Contexts/ProductContext.jsx';
import { SidebarProvider } from './Contexts/SidebarContext.jsx';
import { CartProvider } from './Contexts/CartContexts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
