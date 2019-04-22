import React, { Component } from 'react';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection'
import DisplayItem from './components/DisplayItem/DisplayItem'

class App extends Component {

  state = {
    books: [],
    value: "",
    'book-select': "all",
    'display-select':"",
    error: null
  }


  handleSearch = async (e) => {
    e.preventDefault();
    if (this.state.value.trim()===""){
      this.setState({error: 'Please enter a topic to search for.',
      books:[],
    })
    } else {
      let filter ='';
      if (this.state['display-select'])
        filter = `&filter=${this.state['display-select']}`;

      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.value}${filter}&printType=${this.state['book-select']}&key=${process.env.REACT_APP_G_BOOKS_API}
      `)

      if (!res.ok){
        this.setState({
          error: "Problem loading data from server. Please try again later."
        })
        return;
      }
        const resJson = await res.json()

        if (resJson.totalItems === 0){
          this.setState({
            books:[],
            error: 'No Books Found'
          })
        } else {
        this.setState({
          error: null,
          books: resJson.items.map(book=>({        
            authors: book.volumeInfo.authors,
            title: book.volumeInfo.title,
            price: book.hasOwnProperty('saleInfo.retailPrice.amount') ? book.saleInfo.retailPrice.amount : '',
            preview: book.volumeInfo.previewLink,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
          })
          )
        })
      }   
    }
  }

  errorHandle = (response) => {
    const error = {};
    
    if (response.headers.get('content') !=='application/json'){
      error.message = response.text()
    }
  }
  
  handleSearchEntry = (e) =>{
    const {value} = e.target
    this.setState({value})
  }

  handleSelectEntry = (e) =>{
    const {value} = e.target
    const {name} = e.target
    this.setState({[name]:value})
    this.handleSearch(e)
  }

  generateDisplayItems = (books) => {
    return books.map((book, key) => <DisplayItem key={key} book={book}/> )
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchSection 
          handleSearch={this.handleSearch} 
          searchEntry={this.handleSearchEntry} searchValue={this.state.value} 
          typeSelection={this.handleTypeSelection} 
          filterSelection={this.handlefilterSelection} 
          handleSelect = {this.handleSelectEntry}
        />
       { this.state.books ? this.generateDisplayItems(this.state.books) : '' }
       { this.state.error ? this.state.error : '' }
      </div>
    );
  }
}

export default App;
