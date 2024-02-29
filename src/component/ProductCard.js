import React from 'react'
import Product from './Product'

function ProductCard({products, setCart, cart, onUpdateInventory}) {
    const productList = products.map((product) => <Product key= {product.id} 
    product={product} setCart={setCart} cart={cart} 
    onUpdateInventory={onUpdateInventory}/> )
  return (
    <div>
        {productList}
    </div>
  )
}

export default ProductCard