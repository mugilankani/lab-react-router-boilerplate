
import { Routes,Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'


function App() {


  return (
   <div className="App">
    <div className='navBar'>
      <ul className='nav'>
        <li  style={{ textDecoration: 'underline' }}><Link  style={{ textDecoration: 'underline' }} to="/"><img src="/Kal.png" alt="" /></Link></li>
        <div className='MinNav'>

        <li  style={{ textDecoration: 'underline' }}><Link  style={{ textDecoration: "none", color: "white" }} to="/contact">Contact</Link></li>
        <li  style={{ textDecoration: 'underline' }}><Link  style={{ textDecoration: 'underline', color: "white" }} to="/about">About</Link></li>
        </div>
      </ul>
    </div>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={ <About />}/>
    </Routes>
   </div>
  )
}

export default App