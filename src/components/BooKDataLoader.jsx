import React from "react"
import './BookDataLoader.css';

function BooKDataLoader({ bookList }) {


  return (
    <div className="container">
        <h2>Book Details :</h2>
        <ul>
            {bookList.length !== 0 ? 
            bookList.map((item, index) => (
                <li key={index}>Name - {item.title} Author - {item.body} Year - {item.id}</li>
            )) : <p>Book list is unavailable!</p>}
         </ul>
    </div>
  )
}

export default BooKDataLoader
