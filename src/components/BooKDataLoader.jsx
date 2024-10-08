import React, { useState } from "react"
import './BookDataLoader.css';
import useBookFilter from "./useBookFilter";

function BooKDataLoader({ bookList }) {

    const [searchItem , setSearchItem] = useState('')

    const filteredBooks =  useBookFilter (bookList, searchItem);

  return (
    <div className="container">
        <h2>Book Details :</h2>
        <input
        type="text" className="form-control"
        placeholder="Search books by title or author"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
        <ul>
            {filteredBooks.length !== 0 ? 
            filteredBooks.map((item, index) => (
                <li key={index}>Name - {item.title} Author - {item.body} Year - {item.id}</li>
            )) : <p>Book list is unavailable!</p>}
         </ul>
    </div>
  )
}

export default BooKDataLoader