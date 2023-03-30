import "./Navbar.style.scss";
import { NavLink } from "react-router-dom";

const toggleNav = () => {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="toggle-button" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="navbar-links">
        <ul>
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