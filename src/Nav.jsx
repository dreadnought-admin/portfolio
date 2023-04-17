import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'


const Nav = () => {

const location = useLocation();
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="navButtonBar">
    <div>
    <a className="navButton confirm_selection" href="#">{date}</a>
     {location.pathname !=="/" &&
        <NavLink className="navButton confirm_selection" to="/">home</NavLink>
      }
      <NavLink className="navButton confirm_selection" to="/showcase">current projects</NavLink>
    </div>
    </div>
  )
}

export default Nav
