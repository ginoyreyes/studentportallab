import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Student Portal</h2>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/students">Students</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar