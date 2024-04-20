import React, { useState } from 'react';

function EditedProduct() {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState(null);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };
 const handleFormSubmit = (e) => {
    e.preventDefault();

    // Fetch employee data based on the entered ID
    fetch(`http://localhost:3001/Products/${productId}`)
      .then((resp) => {
        if (resp.status === 404) {
          throw new Error('Product not found');
        }
        return resp.json();
      })
      .then((data) => {
        setProductData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching Product data:', error);
      });
  };

  const handleUpdateProduct = (updatedData) => {
    // Send a PATCH request to update the employee using updatedData
    fetch(`http://localhost:3001/Products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // Handle the response from the server
        console.log('Product updated:', data);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };
    
  return (
    <div className='card'>
      <h2 className='box1'>Update Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={handleProductIdChange}
          />
        </div>
        <button type="submit" className='time'>Show Product Details</button>
      </form>

      {productData && (
        <ProductUpdateForm
          productData={productData}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
    </div>
  );
      }
      
function ProductUpdateForm({ productData, onUpdateProduct }) {
  // Create state variables for the fields  to update
  
  const [name, setName] = useState(productData.name);
  const [image, setImage] = useState(productData.image);
 
  const [color, setcolor] = useState(productData.color)
  const [size, setsize] = useState(productData.size)
  const [price, setprice] = useState(productData.price)
  const [productdesc, setproductdesc] = useState(productData.productdesc)
  const [inventory, setinventory] = useState(productData.inventory)

  const handleUpdateClick = () => {
    // Construct updatedData object with the fields to update
    const updatedData = {
      name,
      image,
     
        color,
        size,
        price,
        productdesc,
        inventory,
      
    };

    onUpdateProduct(updatedData);
  };

 return (
    <div>
        <h3>Product details</h3>
        <p>ID: {productData.id}</p>
    
    <div>
    <label>Name:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div> 
    <div>
      <label>
        Image:</label>
      <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
      </div>
      <div><label>
        Price: </label>
        <input type="number" name="price" value={price} onChange= {(e) => setprice(e.target.value)}/>
        </div>
       
        <div><label>
        Color:</label>
        <input type="text" name="color" value={color} onChange ={(e) => setcolor(e.target.value)}/>
        </div>
        <div><label>
        Size:</label>
        <input type="text" name="size" value={size} onChange={(e) => setsize(e.target.value)} />
        </div>
        <div><label>
        Product Description:</label>
        <input type="text" name="productdesc" value={productdesc} onChange={(e) => setproductdesc(e.target.value)} />
        </div>
        <div><label>
        Inventory: </label>
        <input type="number" name="inventory" value={inventory} onChange= {(e) => setinventory(e.target.value)}/>
        </div>
      <button onClick={handleUpdateClick}>Update Product</button>
    </div>
    
 )
}

export default EditedProduct