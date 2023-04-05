import "./Navbar.style.scss";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <NavLink
              className="home-link"
              exact="true"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="home-link"
              exact="true"
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="contact-link"
              exact="true"
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="contact-link"
              exact="true"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
