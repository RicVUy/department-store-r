import React from "react";

function SearchBar({sortBy, setSortBy, filterBy, setFilterBy}) {
  return (
    <div>
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
        <strong>Filter:</strong>
        <select onChange={e => setFilterBy(e.target.value)} value={filterBy}>
        <option value="All">All Tshirts</option>
          <option value="Yalex">Yalex</option>
          <option value="Blucorner">Blucorner</option>
          <option value="Lifeline">Lifeline</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;