import React from 'react'

function BookList() {

    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
      ];

  return (
    <div>
      <h2>BookList</h2>
        { books.map((book) =>(
                <li>Title - {book.title}. Author - {book.author}. Year - {book.year}</li>
        ))}
    </div>
  )
}

export default BookList;