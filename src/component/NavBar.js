import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
  <div className="navbar">
    <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/BuyerLogin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Buyer Login
      </NavLink>

      <NavLink
        to="/ProductContainer"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Welcome Customers!
      </NavLink>
      <NavLink
        to="/CartCard"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Cart
      </NavLink>
      <NavLink
        to="/AdminLogin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Administrator Login
      </NavLink>
      <NavLink
        to="/AddProduct"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add Product
      </NavLink>
      <NavLink
        to="/EditedProduct"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Edit Product
      </NavLink>
      <NavLink
        to="/ProductManagement"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        ProductManagement
      </NavLink>
      <NavLink
        to="/lowInventoryProducts"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Low Inventory Products
      </NavLink>
      
  </div>
  )
}

export default NavBar;
