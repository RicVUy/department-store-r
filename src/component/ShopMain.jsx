import ShopContextProvider from "../Context/ShopContextProvider";
import all_product from "../component/Assets/Assets/all_product"
import App from "../App";
import { useState } from "react";

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
      cart[index] = 0;
    }
    return cart;
  }
  
const ShopMain = () => {
    const [cartItems, setCarItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCarItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
     console.log(cartItems)
    }
      const removeFromCart = (itemId) => {
        setCarItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
      }
      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
          if(cartItems[item]>0)
          {
            let itemInfo = all_product.find((product)=>product.id===Number(item))
            totalAmount += itemInfo.new_price*cartItems[item];
           
          }
          
        }
        return totalAmount;
      }
      const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
          if(cartItems[item]>0){
 totalItem+= cartItems[item]
          }
        }
        return totalItem
      }
    return (
        <div>
        <ShopContextProvider.Provider value={{getTotalCartItems, getTotalCartAmount,all_product,cartItems, addToCart, removeFromCart}}>
       
        <App />
        </ShopContextProvider.Provider>
        console.log(cartItems)
        </div>
       
    )
}

export default ShopMain