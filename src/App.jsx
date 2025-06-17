import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
// import Skill from './components/pages/Skill';
// import Resume from './components/pages/Resume';
import Experience from './components/pages/Experience'
import Contact from './components/pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        {/* <Route path='/skill' element={<Skill/>} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
