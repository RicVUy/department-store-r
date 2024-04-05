import React, {useState, useEffect} from 'react';
import ProductContainer from './component/ProductContainer';
import AddProduct from './component/AddProduct'
import EditedProduct from './component/EditedProduct';
import ProductManagement from './component/ProductManagement';
import CartCard from './component/CartCard';
import LowInventoryProducts from './component/LowInventoryProducts.js';
//import Header from './component/Header';
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar1 from './component/NavBar1';
import AdminLogIn from './component/AdminLogIn';
import BuyerLogin from './component/BuyerLogin';
import Shop from './Pages/Shop.jsx';
function App1() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn1, setLoggedIn1] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3001/Products")
        .then(r => r.json())
        .then(setProducts) 
  }, []);

 
  const updateInventory = async (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, inventory: product.inventory - 1 }
        : product
    );
     // Update the inventory on the server
await fetch(`http://localhost:3001/products/${productId}`, {
method: 'PATCH',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify({ inventory: updatedProducts.find((p) => p.id === productId)?.inventory }),
});

setProducts(updatedProducts);
};
const updateInventoryRem = async (productId) => {
  const updatedProductsRem = products.map((product) =>
  product.id === productId
    ? { ...product, inventory: product.inventory + 1 }
    : product
);
 // Update the inventory on the server
await fetch(`http://localhost:3001/products/${productId}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ inventory: updatedProductsRem.find((p) => p.id === productId)?.inventory }),
});

setProducts(updatedProductsRem);

}
function handleAddProduct(newProduct){
setProducts([...products, newProduct])
}
 

  return (
    <>
    <NavBar1 />
      <Switch>
      
      <Route  exact path="/BuyerLogin">
      <BuyerLogin isLoggedIn1={isLoggedIn1} setLoggedIn1={setLoggedIn1}/>
  </Route>
       {/*<Route  exact path="/BuyerLogin">
      <BuyerLogin isLoggedIn1={isLoggedIn1} setLoggedIn1={setLoggedIn1}/>
  </Route>*/}
      <Route exact path="/ProductContainer">
     {isLoggedIn1 ? <ProductContainer products={products} setProducts={setProducts}
     cart={cart} setCart={setCart} onUpdateInventory={updateInventory}/> : 
      <Redirect to="/BuyerLogin" />}
       </Route>
     
      <Route exact path="/CartCard">
     { isLoggedIn1 ? <CartCard cart={cart} setCart={setCart} products={products}
     onUpdateInventoryRem={updateInventoryRem}/> : <Redirect to="/BuyerLogin" />}
     </Route>
     
     <Route exact path="/AdminLogin">
        <AdminLogIn isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      
      <Route exact path="/LowInventoryProducts">
    { isLoggedIn ? <LowInventoryProducts products={products} /> 
    : <Redirect to="/AdminLogin" />} 
    </Route>
    
    <Route exact path="/addProduct">
    { isLoggedIn ? <AddProduct onAddProduct={handleAddProduct}/>
    : <Redirect to="/AdminLogin" />}
    </Route>
   
    <Route exact path="/EditedProduct">
    { isLoggedIn ? <EditedProduct/> : <Redirect to="/AdminLogin" />}
    </Route>
    
    <Route exact path="/ProductManagement">
    { isLoggedIn ? <ProductManagement /> : <Redirect to="/AdminLogin" />}
    </Route>
    
    <Route path="/">
    <Shop/>
    </Route>
    
    </Switch>
      </>
  );
}

export default App1;
