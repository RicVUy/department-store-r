import React, {useState} from 'react';
import SearchBar from './SearchBar';

const LowInventoryProducts = ({ products}) => {
    const [sortBy, setSortBy] = useState("Alphabetically")
    const [filterBy, setFilterBy] = useState("")  

    const filteredProducts = products.filter(stock => {
        if (filterBy === "All") {
          return true
        } else {
          return stock.category === filterBy
        }
      })
    
 
 
    const lowInventoryProducts = filteredProducts.filter(product => product.inventory <= 10);

    
  return (
    <div className='inventory'>
      <h3>Products with Low Inventory</h3>
      
      <SearchBar 
      sortBy={sortBy} 
      setSortBy={setSortBy} 
      filterBy={filterBy} 
      setFilterBy={setFilterBy}/>
      <ul>
        {lowInventoryProducts.map(product => (
          <li key={product.id}>
            {product.productdesc} - Inventory: {product.inventory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowInventoryProducts;