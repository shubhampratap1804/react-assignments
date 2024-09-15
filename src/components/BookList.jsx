import React, { Component } from 'react'
import BookDetails from './BookDetails';

class BookList extends Component {

render(){

    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];

  return (
    <div>
      <BookDetails title = "EARTH" author = "STEPHEN HAWKINS" year = "1997"/>
    </div>
  )
}
}

export default BookList;