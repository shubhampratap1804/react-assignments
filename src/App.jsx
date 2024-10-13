import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Project from './components/Project';
import DetailedProject from './components/DetailedProject';
import ContactDetails from './components/ContactDetails';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/project' element={<Project/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='/project/:id' element={<DetailedProject/>}/>
      <Route path='/contact' element={<ContactDetails/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
