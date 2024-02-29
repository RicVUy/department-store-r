import React, {useState, useEffect} from "react";
import ProductContainer from "./component/ProductContainer";
import Header from "./component/Header";
import AddProduct from "./component/AddProduct";
import EditedProduct from "./component/EditedProduct";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(" http://localhost:4001/products")
        .then(r => r.json())
        .then(setProducts) 
  }, []);

  return (
    <div>
      <Header />
      < ProductContainer products={products} setProducts={setProducts}/>
      <AddProduct />
      <EditedProduct/>
    </div>
  );
}

export default App;

