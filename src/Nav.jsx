import ButtonMailto from "./ButtonMailto"
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
    <div>
      <NavLink className="navButton" to="/">take your ball and go back home</NavLink>
      <NavLink className="navButton" to="/about">about me</NavLink>
      <NavLink className="navButton" to="/showcase">current projects</NavLink>
      <NavLink className="navButton" to="/fun">fun stuff</NavLink>
      <NavLink className="navButton" to="/contact">contact</NavLink>
    </div>
    </div>
  )
}

export default Nav
