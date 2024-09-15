import React from 'react'
import WithLoggings from './WithLoggings'
import BookDetails from './BookDetails'



 const BookListWithLogging = ({ books }) => {
    console.log("inside BookListWithLogging")
    return(
        <WithLoggings books = {books}/>
    )
 }


export default BookListWithLogging
