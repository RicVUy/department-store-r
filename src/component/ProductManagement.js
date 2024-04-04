
import React, { useState, useEffect } from 'react';
import DeleteProduct from './DeleteProduct';
import SearchBar from './SearchBar';
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
 
 const [sortBy, setSortBy] = useState("Alphabetically")
 const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, [] );

  const deleteProduct = (productId) => {
    // Make a fetch DELETE request to delete the product
    fetch(`http://localhost:3001/products/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete the product');
        }
        // Remove the product from the local state
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error('Error deleting the product:', error);
        alert('Failed to delete the product');
      });
  };

  
 

  const filteredProducts = products.filter(stock => {
    if (filterBy === "All") {
      return true
    } else {
      return stock.category === filterBy
    }
  })

return (
  <div className='product-management'>
    
    <h2>Product Management</h2>
  
         <div>
         <h2>Delete Items</h2>
         <SearchBar 
    sortBy={sortBy} 
    setSortBy={setSortBy} 
    filterBy={filterBy} 
    setFilterBy={setFilterBy}/>
    <ul className='delete'>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          {product.productdesc}{' '}
          <DeleteProduct productId={product.id} onDeleteProduct={deleteProduct} />
        </li>
        
      ))}
      
    </ul>
    </div>
  </div>
);
};
export default ProductManagement;
