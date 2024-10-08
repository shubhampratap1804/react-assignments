import React, { useState } from 'react';
import './App.css';
import './style.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BooKDataLoader from './components/BooKDataLoader';


function App() {

  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    console.log("call me !")
    setTheme((prevValue) => !prevValue);
  }

  const themeColor = theme ? 'light' : 'dark';

  return (
    <div className={themeColor}>
    <BookList toggleTheme = {toggleTheme} theme={theme}/>
    {/* <AxiosDemo /> */}
    {/* <BookForm/> */}
    {/* <BooKDataLoader/> */}
    </div>
  );
}

export default App;
