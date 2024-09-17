import React from 'react'
import BookForm from './BookForm'
import { useState } from 'react'

function BookList() {

    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks([...books, book]);
    }

  return (
    <div>
      <BookForm addBook={addBook} />
        {books.length === 0 ? (
            <p>The book list is empty!</p>
        ) : (
            <ul>
            {books.map((book, index) => (
                <li key={index}> Title- {book.title}. Author- {book.author}. Year- {book.year}</li>
            ))}
            </ul>
        )
    }
    </div>
  )
}

export default BookList
