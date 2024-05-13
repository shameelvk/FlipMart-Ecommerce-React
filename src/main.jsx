import React from 'react'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ShopContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>,
)
