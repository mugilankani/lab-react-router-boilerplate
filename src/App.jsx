
import { Routes,Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import logo from "../public/Kal.png"

function App() {


  return (
   <div className="App">
    <div className='navBar'>
      <ul className='nav'>
        <li className='imagelink'><Link to="/"><img src= {logo} alt="ythcvyh" /></Link></li>
        <div className='MinNav'>

        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
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