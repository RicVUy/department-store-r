import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Product1({product,   setCart, onUpdateInventory}) {
 
    const {
      
        name,
        image,
        color,
        size,
        productdesc,
        price,
        inventory
       
    } = product
    const cartItemId = uuidv4();
    const addToCart = (product) => {
      if (product.inventory > 0) {
       // setCart([...cart, product]);
       setCart((prevCart) => [
        ...prevCart,
        {
          id: cartItemId,
          productId: product.id,
          name: product.productdesc,
          price: product.price,
         quantity: 1
          
        },
      ]); 
        onUpdateInventory(product.id, product.inventory - 1);
      } else {
        alert('Product out of stock');
      }
    };

      function handleAddToCart() {
        addToCart(product)
      }  
      
     
  return (
    
       
           
        <div className='card'>
     
        <h3>Product</h3>
          <div className='image-container'>
          <img src={image} alt={name} />
          </div>
          <div className="card-content">  
          <h4>{name}</h4>
          <p>{color}</p>
          <p>{size}</p>
          <p>{productdesc}</p>
          <p>Price: {price}</p>
          <p>Inventory: {inventory}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        
    </div>
    
    
    </div>
  )
}
 

export default Product1