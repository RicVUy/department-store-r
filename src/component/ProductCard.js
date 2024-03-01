import React, {useState} from 'react'
import Product from './Product'

function ProductCard({products, setCart, cart, onUpdateInventory}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

    const productList = filteredProducts.map((product) => <Product key= {product.id} 
    product={product} setCart={setCart} cart={cart} 
    onUpdateInventory={onUpdateInventory}/> )
  return (
    <div>
      <div>
      <input
          className="butt"
          type="text"
         
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    <div>
        {productList}
    </div>
    </div>
  )
}

export default ProductCard