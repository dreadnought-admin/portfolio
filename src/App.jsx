import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import FunStuff from './FunStuff'
import Showcase from './Showcase'
import Contact from './Contact'

const App = () => {


  return (
    <div>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="showcase" element={<Showcase/>}/>
          <Route exact path="/fun" element={<FunStuff/>}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default App
