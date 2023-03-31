import "./Navbar.style.scss";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li>
            <NavLink
              className="home-link"
              exact="true"
              activeclassname="active"
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="home-link"
              exact="true"
              activeclassname="active"
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="contact-link"
              exact="true"
              activeclassname="active"
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="contact-link"
              exact="true"
              activeclassname="active"
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
