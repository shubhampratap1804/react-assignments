import React from 'react'
import BookForm from './BookForm'
import { useState } from 'react'
import './BookList.css';
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
    <div className="container mt-5">
      <BookForm addBook={addBook} />

        {books.length === 0 ? (
            <p className="text-muted">The book list is empty!</p>
        ) : (
            <ul className="list-group mb-3">
            {books.map((book, index) => (
                <li className="list-group-item" key={index}> Title- {book.title}. Author- {book.author}. 
                Year- {book.year}. <button className="btn btn-link" 
                onClick={handleToggle}>{toggle ? 'Hide Details' : 'Show Details'}</button></li>
            ))}
            </ul>
        )
    }
 <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
    
    {toggle && (
        <div className="mt-2">
            <p><strong>Description:</strong> 'No description available.'</p>
            <p><strong>Genre:</strong>'Unknown genre'</p>
        </div>
    )}
    </div>
  )
}

export default BookList