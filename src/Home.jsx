import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spacer from './Spacer'
import About from './About'
import Contact from './Contact'


const Home = () => {
  return (
    <div>
      <div className="home">
      <h1>Hi, <strong>I'm <em>Dom</em></strong> and I make</h1>
        <h2>elegant full-stack apps</h2>
        <h2>efficient && effective solutions</h2>
        <h2>curated user experiences</h2>
        <h2 style={{textDecoration: "none", color: "#635c6d"}}>cool stuff. <FontAwesomeIcon icon="fa-solid fa-otter" /> </h2>
      </div> 
      <div>
        <About />
      </div>
        <Spacer />
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default Home
