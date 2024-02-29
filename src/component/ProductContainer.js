import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import CartCard from './CartCard';

function ProductContainer() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      fetch(" http://localhost:4001/products")
          .then(r => r.json())
          .then(setProducts) 
    }, []);
  
   
  
    return (
      <div>
        <CartCard cart={cart}/>
        <ProductCard products={products} setCart={setCart} cart={cart}/>
       
      </div>
    );
  }
  


export default ProductContainer