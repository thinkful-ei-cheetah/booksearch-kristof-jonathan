import React from 'react';
import './DisplayItem.css'

const DisplayItem = ({book}) => (
  <div className="display-item">
      <div className="book-image">
        <img src={book.image} />
      </div>
    <div className="right-panel">
      <div className="book-title">
        {book.title}
      </div>
      <div className="book-authors">
        {book.authors ? book.authors.map((author)=> author): ''}
      </div>
      <div className="book-price">
        {book.price}
      </div>
      <div className="book-description">
        {book.description}
      </div>
      <div className="book-preview">
        <a href={book.preview}>LINK</a>
      </div>
    </div>

  </div>
);

export default DisplayItem