import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
  return (
    <div className="contact">
      <h2>contact me</h2>
      <a className="contactButton" target="_blank" href="https://www.linkedin.com/in/domit-alexander/">
      <FontAwesomeIcon icon="envelope" style={{color: "#b8c2b9", cursor: "pointer"}} />
      </a>
      <a className="contactButton" target="_blank" href="https://github.com/dreadnought-admin">github</a>
      <a className="contactButton" target="_blank" href="https://medium.com/@domit.alexander">medium</a>
      <button className="email" onClick={(e) => window.location.href="mailto:dom.alexan@gmail.com"}>
      <FontAwesomeIcon icon="envelope" style={{color: "#b8c2b9", cursor: "pointer"}} />
      </button>
      
    </div>
  )
}

export default Contact
