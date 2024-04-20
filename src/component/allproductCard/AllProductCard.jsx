import React from 'react'
import AllProd from '../AllProd/AllProd'

const AllProductCard = ({allProducts}) => {
    const allproductList = allProducts.map((allprod) => <AllProd key={allprod.id} allprod={allprod} />)
  return (
    <div className='card-container'>{allproductList}</div>
  )
}

export default AllProductCard