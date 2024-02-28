import React, { useState, useEffect } from 'react';
import DeleteProduct from './DeleteProduct';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

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

  
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  return (
    <div className='card'>
      <h2>Product Management</h2>
     
      <div>
        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <ul>
      
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.productdesc}, Inventory: {product.inventory}{' '}
            <DeleteProduct productId={product.id} onDeleteProduct={deleteProduct} />
       </li> 
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
