import React, {useState} from 'react'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import SearchById from './SearchById'
import Prodavailable from './ProdAvailable/Prodavailable'
import './ProductContainer.css'


function ProductContainer({products, setProducts, cart,setCart, onUpdateInventory}) {
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("")
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
   

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

  const handleSearchProductById = () => {
    // Filter products based on the entered product ID
    const foundProduct = products.find(product => (product.id) === parseInt(searchTerm));

    if (foundProduct) {
      setSearchedProduct(foundProduct);
    } else {
      alert('Product not found');
    }
  };

   
  return (
    <div className='product-container'>
      <div> <h2>Products</h2> 
     <div><Prodavailable/></div>
      </div>
      <div>
      {searchedProduct && (
        <div >
         
          <h4>WELCOME!!!</h4>
          <h3>Searched Product</h3>
          <div className='inventory'>
          <h4>Name: {searchedProduct.name}</h4>
          <p>Price: ${searchedProduct.price}</p>
          <img className='image-container' src={searchedProduct.image} alt={searchedProduct.name} />
           <p>{searchedProduct.productdesc}</p>
           <p>Inventory: {searchedProduct.inventory}</p>
          </div>
        </div>
      )} 
      <SearchById onSearchProduct={handleSearchProductById} 
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <SearchBar 
      sortBy={sortBy} 
      setSortBy={setSortBy} 
      filterBy={filterBy} 
  setFilterBy={setFilterBy}/>
  <h3>Please Choose From These Products</h3>
       <ProductCard   products={filteredProducts} cart={cart} setProducts={setProducts}
       setCart={setCart}  onUpdateInventory={onUpdateInventory}
       
       />
       </div> 
     
      </div>
  )
}

export default ProductContainer
