import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';

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
    <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
  </div>

<div className="form-group">
    <label htmlFor='author'>Author - </label>
    <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        margin="normal"
    />
</div>

<div className="form-group">
    <label htmlFor='year'>Year - </label>
    <TextField
        label="Year"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        fullWidth
        margin="normal"
    />
</div>

    <Button type="submit" variant="contained" color="primary">
        Add Book
    </Button>
</form>
    </div>
  )
}

export default BookForm
