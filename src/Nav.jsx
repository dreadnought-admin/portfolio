import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navButtonBar">
    <div>
      <NavLink className="navButton" to="/">take your ball and go back home</NavLink>
      <NavLink className="navButton" to="/about">about me</NavLink>
      <NavLink className="navButton" to="/showcase">current projects</NavLink>
      <NavLink className="navButton" to="/contact">contact</NavLink>
    </div>
    </div>
  )
}

export default Nav
