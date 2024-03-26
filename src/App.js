import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Variant from './components/Variant';
import Filter from './components/Filter';

import About from './components/About';
import Project from './components/Project';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects/:id' element={<Project />} />
        <Route path='/projects/variants' element={<Filter />} />
        <Route path='/projects/variant/:id' element={<Variant />} />
      </Routes>
    </div>
  )
}

export default App;
