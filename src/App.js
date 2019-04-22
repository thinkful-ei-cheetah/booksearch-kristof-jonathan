import React, { Component } from 'react';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection'

class App extends Component {

  state = {
    books: [],
    value: "",
    filter: "",
    type:""
  }

  handleSearch(e){
    e.preventDefault();

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&filter=${this.state.filter}&printType=${this.state.type}&key=${process.env.REACT_APP_G_BOOKS_API}
    `)
    .then(res => res.json())
    .then(res=> this.setState({
      books: res.items.map(book=>({        
        authors: book.volumeInfo.authors,
        title: book.volumeInfo.title,
        price: book.saleInfo.saleability === 'FREE' ? "" : book.saleInfo.retailPrice.amount,
        preview: book.volumeInfo.previewLink,
        image: book.volumeInfo.imageLinks.thumbnail
      })
      )
    }))
  }

  handleSearchEntry = (e) =>{
    console.log('imh')
    const {value} = e.target
    this.setState({value})
  }


  render() {
    return (
      <div className="App">
      <SearchSection handleSearch={this.handleSearch} searchEntry={this.handleSearchEntry} searchValue={this.state.value} typeSelection={this.handleTypeSelection} filterSelection={this.handlefilterSelection} />


      </div>
    );
  }
}

export default App;
