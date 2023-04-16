import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
  return (
    <div className="contact">
      <h2>contact me</h2>
      <a className="contactButton" target="_blank" href="https://www.linkedin.com/in/domit-alexander/">
        <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#b8c2b9", cursor: "pointer"}} />
      </a>
      <a className="contactButton" target="_blank" href="https://github.com/dreadnought-admin">
        <FontAwesomeIcon icon="fa-brands fa-square-github" style={{color: "#b8c2b9", cursor: "pointer"}} />
      </a>
      <a className="contactButton" target="_blank" href="https://medium.com/@domit.alexander">
        <FontAwesomeIcon icon="fa-brands fa-medium" style={{color: "#b8c2b9", cursor: "pointer"}} />
      </a>
      <button className="email" onClick={(e) => window.location.href="mailto:dom.alexan@gmail.com"}>
        <FontAwesomeIcon icon="envelope" style={{color: "#b8c2b9", cursor: "pointer"}} />
      </button>
      
    </div>
  )
}

export default Contact
