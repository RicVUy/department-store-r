import React from 'react';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <>
    <nav>
      <div className="top-links">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/BuyerLogin">Buyer login</Link></li>
          <li><Link to="/ProductContainer">CHOOSE PRODUCTS</Link></li>
          <li><Link to="/CartCard">Cart</Link></li>
        </ul>
      </div>
      </nav>
      <footer className="bottom-links">
        
        <ul>
          <li><Link to="/AdminLogin">Administration Login</Link></li>
          <li><Link to="/LowInventoryProducts">Low Inventory Products</Link></li>
          <li><Link to="/AddProduct">AddProduct</Link></li>
          <li><Link to="/EditedProduct">Edit Product</Link></li>
          <li><Link to="/ProductManagement">ProductManagement</Link></li>
        </ul>
      </footer>
      </>
  );
}

export default Navbar1;