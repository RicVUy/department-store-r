import React, {useState, useEffect} from 'react'
import AllProductCard from '../allproductCard/AllProductCard';

const Prodavailable = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/allProducts")
            .then(r => r.json())
            .then(setAllProducts) 
      }, []);
      console.log(allProducts)
  return (
    <div>
         <AllProductCard allProducts={allProducts}/>
    </div>
  )
}

export default Prodavailable