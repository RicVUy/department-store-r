import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';
import { BrowserRouter as Router } from "react-router-dom";
//import ShopMain from './component/ShopMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <App1 />
    
    </Router>
   
    </>
);

