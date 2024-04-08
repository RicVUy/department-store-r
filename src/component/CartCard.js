import React from 'react'
import './CartItems.css'
import remove_icon from './Assets/Assets/cart_cross_icon.png'
function CartCard({cart, onUpdateInventoryRem, setCart, products}) {
   
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + (parseFloat(product.price)), 0);
      };
     const totalCartAmount = () => {
      return calculateTotalPrice()*1.1
    }
      
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
   <div className='cartitems'>
    
         <div className="cartitems-format-main">
         <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Remove</p>
    </div>
<hr />
   
              {cart.map((product, index) => (
                <div key={index} className=" cartitems-format-main">
                    <img src={product.image} alt="" className="carticon-product-icon"/>
                 <p> {product.name} </p>
                 <p>  ${product.price}  </p>
                 <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(product.id)}}alt="" />
                 </div>
             ))}
             
            
            <h3>Total Amount: ${calculateTotalPrice()}</h3>
           
            <h2>Total Amount + 10% tax: ${totalCartAmount().toFixed(2)}</h2>
         
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
          </div>

 
/*<div className='cartitems'>
<div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    
</div>
<hr />
{cart.map((e)=>{
    //if(cart[e.id]>0){
     return (<div >
    <div className=" cartitems-format-main">
        <img src={e.image} alt="" className="carticon-product-icon" />
        <p>{e.name}</p>
        <p>${e.price}</p>
        <p className='cartitems-quantity'>{(cart[e.id])}</p>
        <p>${(e.price)*(cart[e.id])}</p>
        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt="" />
    </div>
    <hr />
</div>)
       //return null;
})}
<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>cart Totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
<hr />
<div className="cartitems-total-item">
    <h3>Total</h3>
    <h3>${calculateTotalPrice}</h3>
</div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
        <p>If you havea promo code, Enter it here</p>
        <div className="cartitems-promobox">
            <input type='text' placeholder='promo code'/>
            <button>Submit</button>
        </div>
    </div>
</div>
*/

  )
}

export default CartCard