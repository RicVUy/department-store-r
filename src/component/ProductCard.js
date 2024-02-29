import React from 'react'
import Product from './Product'

function ProductCard({products, setCart, cart}) {
    const productList = products.map((product) => <Product key= {product.id} 
    product={product} setCart={setCart} cart={cart}/> )
  return (
    <div>
        {productList}
    </div>
  )
}

export default ProductCard