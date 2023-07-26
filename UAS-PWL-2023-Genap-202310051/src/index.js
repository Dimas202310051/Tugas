import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Tambahkan import Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import HeaderNav from './components/Layouts/Header/HeaderNav';
import Commisions from './components/modules/components/Commisions/Commisions';

ReactDOM.render(
  <Router> {/* Tambahkan Router sebagai parent komponen */}
    <React.StrictMode>
      <HeaderNav />
      <Commisions />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
