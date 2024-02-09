import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './pages/Cart.jsx'
import ProductsPage from './pages/Shop.jsx'
import HomePage from '../component/HomePage.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);