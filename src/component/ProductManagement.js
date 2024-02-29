// src/ProductManagement.js
import React, { useState, useEffect } from 'react';
import DeleteProduct from './DeleteProduct';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4001/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const deleteProduct = (productId) => {
    // Make a fetch DELETE request to delete the product
    fetch(`http://localhost:4001/products/${productId}`, {
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

  return (
    <div>
      <h2>Product Management</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}, Inventory: {product.inventory}{' '}
            <DeleteProduct productId={product.id} onDeleteProduct={deleteProduct} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
