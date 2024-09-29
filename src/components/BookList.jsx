import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookForm from './BookForm';
import BooKDataLoader from './BooKDataLoader'

function BookList() {

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter((counter) => counter + 1);
    }

    const [books, setBooks] = useState([]);

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

    const addBooks = (book) => {
        setBooks([...books, book]);
    }

  return (
    <div>
      <BookForm addBooks={addBooks}/>
        <button className='btn btn-danger' onClick={handleCounter}>Increment Counter</button>
        <BooKDataLoader bookList={books}/>
    </div>
  )
}

export default BookList
