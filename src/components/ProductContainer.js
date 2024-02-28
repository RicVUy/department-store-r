import React, { useState, useEffect } from 'react';

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 // const [searchC, setsearchC] = useState("")
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  useEffect(() => {
    fetch(" http://localhost:3001/products")
        .then(r => r.json())
        .then(setProducts) 
  }, []);
  
  
 
  const showCart =  cart.map((product) => (
   
    <li key={product.id}>
        {product.productdesc} - ${product.price}
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
    </li>
  ))
 
  const updateInventory = async (productId, newInventory) => {
    await fetch(`http://localhost:3001/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inventory: newInventory }),
    });
  };

  const addToCart = (product) => {
    if (product.inventory > 0) {
      setCart([...cart, product]);
      updateInventory(product.id, product.inventory - 1);
    } else {
      alert('Product out of stock');
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const removedProduct = cart.find((product) => product.id === productId);

    setCart(updatedCart);

    // If the removed product is found, update its inventory in the db.json file
    if (removedProduct) {
      updateInventory(productId, removedProduct.inventory + 1);
    }
  };
  const clearCart = () => {
    // Iterate through the items in the cart and update the inventory for each removed item
    cart.forEach((product) => {
      updateInventory(product.id, product.inventory + 1);
    });

    // Clear the cart
    setCart([]);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filterProducts = (product) => {
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
       || product.price.toString().includes(searchTerm);

      

    const matchesPriceRange =
      (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
      (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));

    return matchesSearchTerm && matchesPriceRange ;
  };

  const filteredProducts = products.filter(filterProducts) 

  ;
  const showProducts = filteredProducts.map((product) => {
  return (
    <div className='card' key={product.id}>
        <h4 className="card-title">Name: {product.name}</h4>
        <h4 className="card-title">Category: {product.category}</h4>
          <img className="img" src={product.image} alt={product.name} />
          <p className="card-text">{product.neckDesign}</p>
          <p className="card-text">{product.color}</p>
          <p className="card-text">{product.size}</p>
          <p className="card-text">{product.productdesc}</p>
          <p className="card-text">Price: {product.price}</p>
          <p className="card-text">Stock left: {product.inventory}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    
    
  )})

  const calculateTotalPrice = () => {
    
    return cart.reduce((total, product) => total + Number(product.price), 0);
 };
 const totalPriceTax = () => {
   return calculateTotalPrice()*1.1;
 }
 
  return (
    <div>
     
      <div>
      
        <h3>Search by Name</h3>
      <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <h3>Set a Price</h3>
        <label>
             <h4>Min Price:</h4>
          <input type="number" value={minPrice} onChange={handleMinPriceChange} />
        </label>
        <label>
          <h4>Max Price:</h4>
          <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
        </label>
      </div>
      <div>
      <h2>Products</h2>
        <ul className='card'>
           {showProducts} 
          
        </ul>
      </div>
      <div className='cart'>
        <h2> My Cart</h2>
        <ul>
          {showCart}
         
        </ul>
        <button onClick={clearCart}>Clear Cart</button>
        <p>Total Amount: ${calculateTotalPrice()}</p>
        <p>Total Amount + 10% tax: ${totalPriceTax()}</p>
      </div>
      
    </div>
  );
}

export default ProductContainer;
