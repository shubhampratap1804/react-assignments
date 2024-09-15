import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import BookListWithLogging from './components/BookListWithLogging';

function App() {

  const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  ];
  console.log("inside app");

  return (
    // < BookList />
    <BookListWithLogging books = {books}/>
  );
}

export default App;
