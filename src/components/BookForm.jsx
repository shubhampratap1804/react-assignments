import React from 'react'
import { useState } from 'react'

function BookForm({ addBook }) {

const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [year, setYear] = useState(1900);

const handleSubmit = (e) => {
    e.preventDefault();
    if(title && author && year){
        addBook({title, author, year});
        setTitle('');
        setAuthor('');
        setYear(1900);
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add Your Books Here!</h2>
  <div className="form-group">
    <label htmlFor='title'>Title - </label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter title"/>
  </div>

  <div className="form-group">
    <label htmlFor='author'>Author - </label>
    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" id="author" placeholder="Enter author"/>
  </div>

  <div className="form-group">
    <label htmlFor='year'>Year - </label>
    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} className="form-control" id="year" placeholder="Enter year"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default BookForm
