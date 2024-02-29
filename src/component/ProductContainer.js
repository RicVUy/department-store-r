import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard';
import CartCard from './CartCard';

function ProductContainer({products, setProducts}) {
    //const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    

    /*useEffect(() => {
      fetch(" http://localhost:4001/products")
          .then(r => r.json())
          .then(setProducts) 
    }, []);*/
  
    const updateInventory = async (productId) => {
        const updatedProducts = products.map((product) =>
          product.id === productId
            ? { ...product, inventory: product.inventory - 1 }
            : product
        );
         // Update the inventory on the server
await fetch(`http://localhost:4001/products/${productId}`, {
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
await fetch(`http://localhost:4001/products/${productId}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ inventory: updatedProductsRem.find((p) => p.id === productId)?.inventory }),
});

setProducts(updatedProductsRem);

}

    return (
      <div>
        <CartCard cart={cart} onUpdateInventoryRem={updateInventoryRem} setCart={setCart}/>
        <ProductCard products={products} setCart={setCart} cart={cart} onUpdateInventory={updateInventory}/>
       
      </div>
    );
  }
  


export default ProductContainer