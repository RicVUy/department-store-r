import React from 'react'

function CartCard({cart, onUpdateInventoryRem, setCart}) {
   
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + parseFloat(product.price), 0);
      };

      
        const removeFromCart = ( productId) => {
          const updatedCart = cart.filter((product) => product.id !== productId );
          const removedProduct = cart.find((product) => product.id === productId );
        
         
          setCart(updatedCart);
        
          // If the removed product is found, update its inventory in the db.json file
          if (removedProduct) {
            onUpdateInventoryRem(productId, removedProduct.inventory + 1);
          }
        };

  return (
    <div>
         <div className='cart'>
            
            <h2>Products in Cart</h2>
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.productdesc} - ${product.price}
                  <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                </li>
             ))}
             
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
    </div>
  )
}

export default CartCard