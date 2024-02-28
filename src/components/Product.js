import React from 'react'

function Product({product}) {
  const {
    id,
    name,
    image,
    neckDesign,
    color,
    size,
    price,
    productdesc,
    inventory} = product

  
  return (
    
<div className='card' >
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <img className="img" src={image} alt={name} />
          <p className="card-text">{neckDesign}</p>
          <p className="card-text">{color}</p>
          <p className="card-text">{size}</p>
          <p className="card-text">{productdesc}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">{inventory}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    </div>
    
  )
}

export default Product