import React from 'react';
import './SearchSection.css'

const SearchSection = ({handleSearch, searchEntry, typeSelection, filterSelection, searchValue, handleSelect }) => (
  <form onSubmit={handleSearch}>
    
    <div className="search-container">
    <label className="search-query-label" htmlFor="search-query">Search:</label>
      <input type="text" name="search-query" value={searchValue} id="search-query" onChange={searchEntry}/>
      <br />
      <label className="display-type-select" htmlFor="display-select">Print Type:</label>

      <select id="display-select" name="book-select" onChange={handleSelect}>
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>

      <label className="book-type-select" htmlFor="book-select">Free or Not:</label>
      <select id="book-select" name="display-select" onChange={handleSelect}>
        <option value="">All</option>
        <option value="free-ebooks">Only Free</option>
      </select>
      <br />
      <input type="submit" value="Search"/>
    </div>
  </form>
);

export default SearchSection