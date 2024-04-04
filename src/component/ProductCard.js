import React, {useState} from 'react'
import Product1 from './Product1'

function ProductCard({products, setCart, cart, onUpdateInventory}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

    const productList = filteredProducts.map((product) => <Product1 key= {product.id} 
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
    <div className='card-container'>
        {productList}
    </div>
    </div>
  )
}

export default ProductCard