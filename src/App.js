import React, {useState, useEffect} from "react";
import ProductContainer from "./component/ProductContainer";
import Header from "./component/Header";
import AddProduct from "./component/AddProduct";
import EditedProduct from "./component/EditedProduct";
import ProductManagement from "./component/ProductManagement";
import NavBar from "./component/NavBar";
import {Route, Switch} from "react-router-dom";
import AdminLogIn from "./component/AdminLogIn";
import ResupplyProduct from "./component/ResupplyProduct";
function App() {
  const [products, setProducts] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/Products")
        .then(r => r.json())
        .then(setProducts) 
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/ProductContainer">
      < ProductContainer products={products} setProducts={setProducts}/>
      </Route>
     <Route path="/AdminLogin">
        <AdminLogIn isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </Route>
      <Route path="/AddProduct">
       <AddProduct /> 
      
      </Route>
      <Route path="/EditedProduct">
       <EditedProduct/> : 
      
      </Route>
      <Route path="/ProductManagement">
      <ProductManagement/> 
      </Route>
      <Route path="/ResupplyProduct">
      <ResupplyProduct/> 
      </Route>
      <Route exact path="/">
      <Header />
      </Route>
      </Switch>
    </div>
  );
}


export default App;

