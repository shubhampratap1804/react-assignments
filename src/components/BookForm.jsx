import React, { useState } from 'react'

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
        <form onSubmit={handleSubmit} className="mb-4">
            <h2>Add Your Books Here!</h2>
  <div className="form-group">
    <label htmlFor='title'>Title - </label>
    <input type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
  </div>

<div className="form-group">
    <label htmlFor='author'>Author - </label>
      <input type='text'
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        margin="normal"
    />
</div>

<div className="form-group">
    <label htmlFor='year'>Year - </label>
      <input type='number'
        label="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        fullWidth
        margin="normal"
    />
</div>

    <button className='btn btn-primary' type="submit" variant="contained" color="primary">
        Add Book
    </button>
</form>
    </div>
  )
}

export default BookForm