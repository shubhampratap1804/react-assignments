import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookForm from './BookForm';
import BooKDataLoader from './BooKDataLoader'
import { UseBookSorter } from './UseBookSorter';

function BookList({ toggleTheme }) {

    //books
    const [books, setBooks] = useState([]);
    //button counter
    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
        setCounter((counter) => counter + 1);
    }

    //using effect to render only when counter changes
    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const bookData = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
                console.log("books data", bookData.data);
                setBooks(bookData.data)
            }catch(err){
                console.log("err",err);
            }
        }
        if(counter > 0){
            fetchBooks();
        }
    }, [counter]);

    //adding books using setBooks
    const addBooks = (book) => {
        setBooks([...books, book]);
    }

    const [sortBy, setSortBy] = useState('');
    const sortedBooks = UseBookSorter(books, sortBy);
    console.log("sortedBooks.........", sortedBooks)

    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    }



  return (
    <div>
      <BookForm addBooks={addBooks}/>
        <button className='btn btn-danger' onClick={handleCounter}>Increment Counter</button>
        <select className="form-select" aria-label="Default select example"
        onChange={handleSortBy} value={sortBy}>
            <option defaultValue=''>--Select--</option>
        <option value='title'>Title</option>
        <option value='body'>Author</option>
        <option value='id'>Year</option>
        </select>
        <button onClick={toggleTheme}>Switch Theme </button>
        
        <ul>
            {sortedBooks.length !== 0 ? 
            sortedBooks.map((item, index) => (
                <li key={index}>Name - {item.title} Author - {item.body} Year - {item.id}</li>
            )) : <p>Book list is unavailable!</p>}
         </ul>
    </div>
  )
}

export default BookList
