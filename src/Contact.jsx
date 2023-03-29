import { Link } from 'react-router-dom';
import ButtonMailto from "./ButtonMailto";

const Contact = () => {
  return (
    <div className="contact">
      <h3>contact me</h3>
      <Link className="contactButton" to="https://www.linkedin.com/in/domit-alexander/">linkedin</Link>
      <Link className="contactButton" to="https://github.com/dreadnought-admin">github</Link>
      <Link className="contactButton" to="https://medium.com/@domit.alexander">medium</Link>
      <button className="email" onClick={(e) => window.location.href="mailto:dom.alexan@gmail.com"}>
        📧
      </button>
    </div>
  )
}

export default Contact
