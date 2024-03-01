// src/ProductManagement.js
import React, { useState, useEffect } from 'react';
import DeleteProduct from './DeleteProduct';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  
 // const [productId, setProductId] = useState('');

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
  const restock = { restock: true}
  const sufficient = { restock: false}
  const result = Map.groupBy(products, ({inventory}) => 
  inventory  <30 ? restock : sufficient, )
 
  const result1 = Map.groupBy(products, ({inventory}) => 
  inventory  <10 ? restock : sufficient, )
 

   const resupply = result.get(restock).map((stock) => {
    return stock.productdesc
   })
  
   const resupply1 = result1.get(restock).map((stock) => {
    return stock.productdesc
   })
  return (
    <div className='prod'>
      
      <h2>Product Management</h2>
      <div className='resupply'>
        <h3>Inventory</h3>
      <h4>Products below 30 in stock:</h4>
      <ul>
        {resupply.map((p) => (
          <li>{p}</li> 
        ))}
          
        </ul>
        <h4>Products below 10 in stock:</h4>
      <ul>
        {resupply1.map((p) => (
          <li>{p}</li> 
        ))}
           </ul>
           </div>
           <div className='resupply'>
           <h2>Delete Items</h2>
      <ul className='delete'>
        {products.map((product) => (
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
