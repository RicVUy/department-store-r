import React from 'react'

function SearchById( {searchTerm, setSearchTerm, onSearch, onSearchProduct}) {
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleClick = () => {
        onSearchProduct();
      };
    
      return (
        <div className='search-by-id'>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <h4>Enter the ID number</h4>
          <button onClick={handleClick}>Search</button>
        </div>
      );
    };
   

export default SearchById