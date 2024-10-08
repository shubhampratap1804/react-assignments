import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookForm from './BookForm';
import BooKDataLoader from './BooKDataLoader'

function BookList({ toggleTheme, theme }) {

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

    /*implementing useContext for switching to 'dark/light' theme.
        
    */



  return (
    <div>
      <BookForm addBooks={addBooks}/>
        <button className='btn btn-danger' onClick={handleCounter}>Increment Counter</button>
        <button onClick={toggleTheme}>Change theme</button>
        <BooKDataLoader bookList={books}/>
    </div>
  )
}

export default BookList
