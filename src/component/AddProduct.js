import React, { useState } from 'react';

function AddProduct ({ onAddProduct })  {
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
        neckDesign: '',
        color: '',
        size: '',
        price: 0,
        productdesc: '',
        inventory: 0
  });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };


  
 const handleAddProduct = async () => {
    // Validate if required fields are filled
    if (!newProduct.name || !newProduct.price 
      || !newProduct.inventory || !newProduct.image
      || !newProduct.neckDesign || !newProduct.color
      || !newProduct.size || !newProduct.productdesc) {
      alert('Please fill in all fields');
      return;
    }
 // Make a fetch POST request to add the new product
 try {
  const response = await fetch('http://localhost:4001/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error('Failed to add the new product');
  }

  const addedProduct = await response.json();

    // Pass the new product to the parent component
    onAddProduct(addedProduct);

    // Clear the form
    setNewProduct({ name: '', 
    price: 0, 
    image: '',
    neckDesign: '',
    color: '',
    size: '',
    productdesc: '',
    inventory: 0
     })
    } catch (error) {
    console.error('Error adding the new product:', error);
      alert('Failed to add the new product');
    }
  };

  return (
    <div className= "card1">
      <h2>Add New Product</h2>
      <form> </form>
      <label>
        Name:
        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
      </label>
      <label>
        Image:
      <input type="text" name="image" value={newProduct.image}placeholder="Image URL" onChange={handleInputChange}/>
      </label>
      <label>
        Price:
        <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
      </label>
      <label>
        Neck Design:
        <input type="text" name="neckDesign" value={newProduct.neckDesign} onChange={handleInputChange} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={newProduct.color} onChange={handleInputChange} />
      </label>
      <label>
        Size:
        <input type="text" name="size" value={newProduct.size} onChange={handleInputChange} />
      </label>
      <label>
        Product Description:
        <input type="text" name="productdesc" value={newProduct.productdesc} onChange={handleInputChange} />
      </label>
      <label>
        Inventory:
        <input type="number" name="inventory" value={newProduct.inventory} onChange={handleInputChange} />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
