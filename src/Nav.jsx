import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const Nav = () => {

const location = useLocation();

  return (
    <div className="navButtonBar">
    <div>
     {location.pathname !=="/" &&
        <NavLink className="navButton" to="/">home</NavLink>
      }
      <NavLink className="navButton" to="/about">about me</NavLink>
      <NavLink className="navButton" to="/showcase">current projects</NavLink>
      <NavLink className="navButton" to="/contact">contact</NavLink>
    </div>
    </div>
  )
}

export default Nav
