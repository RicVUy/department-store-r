// src/DeleteProduct.js
import React from 'react';

const DeleteProduct = ({ productId, onDeleteProduct }) => {
  const handleDeleteProduct = async () => {
    // Make a fetch DELETE request to delete the product
    try {
      const response = await fetch(`http://localhost:4001/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the product');
      }

      // Pass the deleted product's ID to the parent component
      onDeleteProduct(productId);
    } catch (error) {
      console.error('Error deleting the product:', error);
      alert('Failed to delete the product');
    }
  };

  return (
    <div>
      <button onClick={handleDeleteProduct}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
