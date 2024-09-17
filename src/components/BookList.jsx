import React from 'react'
import BookForm from './BookForm'
import { useState } from 'react'

function BookList() {

    const [books, setBooks] = useState([]);

    const [toggle, setToggle] = useState(false);

    const addBook = (book) => {
        setBooks([...books, book]);
    }

    const handleDelete = () => {
        setBooks((prevBooks) =>{
            return prevBooks.slice(0,-1);
        })
    }
    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div>
      <BookForm addBook={addBook} />
        {books.length === 0 ? (
            <p>The book list is empty!</p>
        ) : (
            <ul>
            {books.map((book, index) => (
                <li key={index}> Title- {book.title}. Author- {book.author}. Year- {book.year}. <button onClick={handleToggle}>{toggle ? 'Hide Details' : 'Show Details'}</button></li>
            ))}
            </ul>
        )
    }
 <button className='btn btn-primary' onClick={handleDelete}>Delete</button>
    
    {toggle && (
        <div>
            <p><strong>Description:</strong> 'No description available.'</p>
            <p><strong>Genre:</strong>'Unknown genre'</p>
        </div>
    )}
    </div>
  )
}

export default BookList
