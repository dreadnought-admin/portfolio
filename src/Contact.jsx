import { Link } from 'react-router-dom';
import ButtonMailto from "./ButtonMailto";

const Contact = () => {
  return (
    <div>
      <ButtonMailto></ButtonMailto>
      <Link to="https://www.linkedin.com/in/domit-alexander/">linkedin</Link>
      <Link to="https://github.com/dreadnought-admin">github</Link>
      <Link to="https://medium.com/@domit.alexander">medium</Link>
    </div>
  )
}

export default Contact
