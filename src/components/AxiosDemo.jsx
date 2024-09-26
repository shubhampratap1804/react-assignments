import React , { useEffect, useState } from 'react';
import Axios from 'axios';

export function AxiosDemo () {

    const [books, setBooks] = useState([]);
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        // console.log("1");
        setCounter((prev) => prev + 1);
        console.log("counter", counter);
        
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        const getData = async () => {
            try{
                   const res = await Axios.get(`https://jsonplaceholder.typicode.com/todos/${counter}`);
                   setBooks(res.data)
                    console.log("books", books);
                }
                catch(err){
                console.log("err", err);
            }
        }
        if(counter > 0){
            getData();
        }
    }, [counter]);

  return (
    
    <div>
        <h2>Book Counter - {counter} </h2>
        <h2>Book List:</h2>
    <ul>
        { books.title ? (
                <tr>
                    <thead>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </thead>
                    <tbody>
                        <td>{books.userId}</td>
                        <td>{books.title}</td>
                        <td>{books.completed}</td>
                    </tbody>
                </tr>
        ) : <h2>List unavailable!</h2>
        }
    </ul>
      <button type='submit' onClick={incrementCounter}>Increment</button>
      <button type='submit' onClick={decrementCounter}>Decrement</button>
    </div>
  )
}


