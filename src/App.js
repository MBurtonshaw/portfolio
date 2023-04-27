import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Project from './components/Project';
import Resume_Button from './components/Resume_Button';
import Resume from './components/Resume';
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      
      <Header />
      <Resume_Button />
      <Sidebar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects/:id' element={<Project/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
      </div>
 )
}

export default App;
