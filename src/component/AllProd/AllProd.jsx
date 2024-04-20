import React from 'react'
import './AllProd.css'

const AllProd = ({allprod}) => {
    const { category, image} = allprod
  return (
    <div className='card'>
    <span className='image-container'>
        <h3>{category}</h3>
        <hr />
        <img className='card-image' src={image} alt={category} />
    </span>
    </div>
  )
}

export default AllProd