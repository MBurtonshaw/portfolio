import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Variant from './components/Variant';
import Filter from './components/Filter';
import VariantCD from './components/VariantCD';
import FilterCD from './components/FilterCD';

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
        <Route path='/cd/variants' element={<FilterCD />} />
        <Route path='/projects/cd/variants/:id' element={<VariantCD />} />
        <Route path='/projects/variant/:id' element={<Variant />} />
      </Routes>
    </div>
  )
}

export default App;
