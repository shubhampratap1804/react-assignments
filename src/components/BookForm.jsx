import React, { useState } from 'react'
import './BookForm.css';

function BookForm({ addBooks }) {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("on submit", e);
        addBooks({name, author,year})
        setName('');
        setAuthor('');
        setYear(0);
    }

  return (
    <div className='my-container'>
        <h2>Add Your Books here</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter book' onChange={(e) => setName(e.target.value)} 
                className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' placeholder='Enter author' onChange={(e) => setAuthor(e.target.value)} 
                className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor='year'>Year</label>
                <input type='number' id='year' placeholder='Enter year' onChange={(e) => setYear(e.target.value)} 
                className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Add Book</button>
    
        </form>
    </div>
  )
}

export default BookForm