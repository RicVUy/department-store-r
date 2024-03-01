import React, {useState} from 'react'
import ProductCard from './ProductCard';
import CartCard from './CartCard';
import SearchBar from './SearchBar';
function ProductContainer({products, setProducts}) {
    //const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("All")
  
    

    /*useEffect(() => {
      fetch(" http://localhost:4001/products")
          .then(r => r.json())
          .then(setProducts) 
    }, []);*/
  
    const updateInventory = async (productId) => {
        const updatedProducts = products.map((product) =>
          product.id === productId
            ? { ...product, inventory: product.inventory - 1 }
            : product
        );
         // Update the inventory on the server
await fetch(`http://localhost:4001/products/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inventory: updatedProducts.find((p) => p.id === productId)?.inventory }),
  });

  setProducts(updatedProducts);
};

const updateInventoryRem = async (productId) => {
  const updatedProductsRem = products.map((product) =>
  product.id === productId
    ? { ...product, inventory: product.inventory + 1 }
    : product
);
 // Update the inventory on the server
await fetch(`http://localhost:4001/products/${productId}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ inventory: updatedProductsRem.find((p) => p.id === productId)?.inventory }),
});

setProducts(updatedProductsRem);

}
const sortedProducts = [...products].sort((stockA, stockB) => {
  if (sortBy === "Alphabetically") {
    return stockA.name.localeCompare(stockB.name)
  } else {
    return stockA.price - stockB.price
  }
})
const filteredProducts = sortedProducts.filter(stock => {
  if (filterBy === "All") {
    return true
  } else {
    return stock.category === filterBy
  }
})

    return (
      <div>
       <CartCard cart={cart} onUpdateInventoryRem={updateInventoryRem} setCart={setCart}/>
       <SearchBar 
      sortBy={sortBy} 
      setSortBy={setSortBy} 
      filterBy={filterBy} 
      setFilterBy={setFilterBy}/>
      
        <ProductCard products={filteredProducts} setCart={setCart} cart={cart} onUpdateInventory={updateInventory}/>
       
      </div>
    );
  }
  


export default ProductContainer