
import React from 'react'
import './NewCollections.css'
import newProducts from '../Assets/AssetsJulivin/newProducts'
import Item from '../Items/Item'
const NewCollections = () => {
  return (
    <div className= 'new-collections'>
    <h1>PRODUCTS AVAILABLE</h1>
    <hr />
    <div className='collections'>
    {newProducts.map((item, i) => {
      return <Item key={i} id={item.id} name={item.name} image={item.image}
        new_price={item.new_price} old_price={item.old_price}/>
     })}
    </div>

 </div>
  )
}

export default NewCollections