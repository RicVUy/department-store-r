import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
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
        <ProductCard products={products} setCart={setCart} cart={cart}/>
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  


export default ProductContainer