import React from 'react'

function Product({product, setCart, cart, onUpdateInventory}) {
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

       

    const addToCart = (product) => {
        if (product.inventory > 0) {
          setCart([...cart, product]);
          onUpdateInventory(product.id, product.Inventory - 1);
        } else {
          alert('Product out of stock');
        }
      };


      function handleAddToCart() {
        addToCart(product)
      }   

  return (
    <div className='card'> 
        <h3>Product</h3>
        <div className='image-container'>
        <img src={image} alt={name} />
        </div>
        <div className='card-content'>
          <h4 className="card-title">{name}</h4>
          
          <p className="card-text">{neckDesign}</p>
          <p className="card-text">{color}</p>
          <p className="card-text">{size}</p>
          <p className="card-text">{productdesc}</p>
          <p className="card-text">{price}</p>
          <p className="card-text">Inventory: {inventory}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
    </div>

    </div>
  )
}

export default Product