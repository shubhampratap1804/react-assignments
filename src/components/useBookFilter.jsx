import React, { useMemo } from 'react'

function useBookFilter(bookList, searchString) {

    const filteredBooks = useMemo(() => {
            return bookList.filter(books => 
                books.title.toLowerCase().includes(searchString.toLowerCase()) || 
                books.body.toLowerCase().includes(searchString.toLowerCase())
             );
    },[bookList, searchString])

  return filteredBooks;
}

export default useBookFilter
