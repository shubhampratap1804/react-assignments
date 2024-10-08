import React, { useMemo } from 'react'

export const UseBookSorter = (books, sortBy) => {

    const sortedBooks = useMemo(() =>{
        console.log("books in soter", books);
        console.log("books in soter", sortBy);
        

        if(!books || books == undefined){
            return [];
        }

        /*following(13th line) spread operator is used to avoid any data duplicacy of books/
        Shallow copy to avoid mutating original state*/
        const sorted = [...books];
        switch(sortBy){
            case 'title' :
                return sorted.sort((a,b) => a.title.localeCompare(b.title));
                case 'body' :
                    return sorted.sort((a,b) => a.body.localeCompare(b.body));
                    case 'id' :
                        return sorted.sort((a, b) => a.id - b.id);
                            default :
                                return books;
        }
    }, [books, sortBy])

    return sortedBooks;
}
