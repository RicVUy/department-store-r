import React, { useState, useEffect } from 'react';


function ResupplyProduct() {

    const [products, setProducts] = useState([]);
    const [showArray, setShowArray] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:3001/products');
          const data = await response.json();
          setProducts(data);
        };
    
        fetchData();
      }, []);

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
    const handleButtonClick = () => {
        setShowArray(true);
      };
  return (
    <div>
          <div className='resupply'>
        <h3>Inventory</h3>
      <h4>Products below 30 in stock:</h4>

      
      {/* <ul>
        {resupply.map((p) => (
          <li> {p}</li> 
        ))}
          </ul>*/}

           <div>
      <button onClick={handleButtonClick}>Show Array</button>
      {showArray && (
        <ul>
        {resupply.map((p, index) => (
          <li key={index}> {p}</li> 
        ))}
           </ul>
      )}
        </div>
     <h4>Products below 10 in stock:</h4>
      <ul>
        {resupply1.map((p) => (
          <li> {p}</li> 
        ))}
           </ul>
        </div>
    </div>
  )
}

export default ResupplyProduct