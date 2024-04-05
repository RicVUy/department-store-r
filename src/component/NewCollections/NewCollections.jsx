/*import React, {useState, useEffect} from 'react'
import './NewCollections.css'
import NewColProducts from './NewColProducts'
const NewCollections = () => {
  const [products1, setProducts1] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/Products1")
        .then(r => r.json())
        .then(setProducts1) 
  }, []);
  const productList = products1.map((product)=> (
    <NewColProducts key={product.id} product={product}/>
      ))
  return (
    <div className= 'new-collections'>
       <h1>NEW COLLECTIONS</h1>
       <hr />
       <div className='collections'>
        {productList}
       </div>

    </div>
  )
}

export default NewCollections;*/
import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/Assets/new_collections'
import Item from '../Items/Item'
const NewCollections = () => {
  return (
    <div className= 'new-collections'>
    <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className='collections'>
    {new_collections.map((item, i) => {
      return <Item key={i} id={item.id} name={item.name} image={item.image}
        new_price={item.new_price} old_price={item.old_price}/>
     })}
    </div>

 </div>
  )
}

export default NewCollections