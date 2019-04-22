import React from 'react';
import './SearchSection.css'

const SearchSection = ({handleSearch, searchEntry, typeSelection, filterSelection, searchValue }) => (
  <form onSubmit={handleSearch}>
    
    <div className="search-container">
    <label className="search-query-label" htmlFor="search-query">Search:</label>
      <input type="text" name="search-query" value={searchValue} id="search-query" onChange={searchEntry}/>
      <input type="submit" value="Search"/>
    </div>


  </form>
);

export default SearchSection