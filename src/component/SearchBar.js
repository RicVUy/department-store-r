import React from "react";

function SearchBar({sortBy, setSortBy, filterBy, setFilterBy}) {
  return (
    <div className="sort">
      <h4>WELCOME!!!</h4>
      <h3>Please Choose From These Products</h3>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={e => setSortBy(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={e => setSortBy(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Click to choose category:</strong>
        <select onChange={e => setFilterBy(e.target.value)} value={filterBy}>
        <option value="">Choose Category</option>
        <option value="All">All</option>
          <option value="Tshirt">Tshirt</option>
          <option value="Polo">Polo</option>
          <option value="formal">formal</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
