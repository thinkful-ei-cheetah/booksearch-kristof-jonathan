import React from 'react';
import './DisplayItem.css'

const DisplayItem = ({book}) => (
  <div className="display-item">
      <div className="book-image">
        <img src={book.image} alt={`The cover of ${book.title}`}/>
      </div>
    <div className="right-panel">

        <h2>{book.title}</h2>
        <h3>{book.authors ? book.authors.map((author)=> author+ " "): ''}</h3>
        <h4>{book.price ? book.price +'USD' :''}</h4>
        <h4>{book.description}</h4>
        <br/>

        <a href={book.preview}>LINK</a>

    </div>

  </div>
);

export default DisplayItem