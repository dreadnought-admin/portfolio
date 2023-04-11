import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
  return (
    <div className="contact">
      <h1>contact me</h1>
      <a className="contactButton" target="_blank" href="https://www.linkedin.com/in/domit-alexander/">linkedin</a>
      <a className="contactButton" target="_blank" href="https://github.com/dreadnought-admin">github</a>
      <a className="contactButton" target="_blank" href="https://medium.com/@domit.alexander">medium</a>
      <button className="email" onClick={(e) => window.location.href="mailto:dom.alexan@gmail.com"}>
      <FontAwesomeIcon icon="envelope" style={{color: "#f6e7c1"}} />
      </button>
      
    </div>
  )
}

export default Contact
