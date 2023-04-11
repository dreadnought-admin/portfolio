import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Showcase from './Showcase'
import Contact from './Contact'
import ButtonMailto from './ButtonMailto'

const App = () => {


  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="showcase" element={<Showcase/>}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/email" element={<ButtonMailto/>}/>
        </Routes>
    </div>
  )
}

export default App
