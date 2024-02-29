import React from 'react'

function CartCard({cart}) {
   
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
      };
   
  return (
    <div>
         <div className='cart'>
            
            <h2>Products in Cart</h2>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.productdesc} - ${product.price}
                </li>
             ))}
             
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
    </div>
  )
}

export default CartCard