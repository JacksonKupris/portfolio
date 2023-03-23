import "./Navbar.style.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink
          className="home-link"
          exact="true"
          activeclassname="active"
          to="/"
        >
          HOME
        </NavLink>

        <NavLink
          className="home-link"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          ABOUT
        </NavLink>

        <NavLink
          className="contact-link"
          exact="true"
          activeclassname="active"
          to="/projects"
        >
          PROJECTS
        </NavLink>

        <NavLink
          className="contact-link"
          exact="true"
          activeclassname="active"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

// <ul>
// <li>
// <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jacksonkupris/'>
//     <FontAwesomeIcon icon={faLinkedin}/>
// </a>
// </li>

// <li>
// <a target='_blank' rel='noreferrer' href='https://github.com/JacksonKupris/'>
//     <FontAwesomeIcon icon={faGithub}/>
// </a>
// </li>

// <li>
// <a target='_blank' rel='noreferrer' href={Resume}>
//     <FontAwesomeIcon icon={faStickyNote} />
// </a>
// </li>

// </ul>

// <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://www.linkedin.com/in/jacksonkupris/"
//         >
//           <FontAwesomeIcon icon={faLinkedin} />
//         </a>

//         <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://github.com/JacksonKupris/"
//         >
//           <FontAwesomeIcon icon={faGithub} />
//         </a>

//         <a target="_blank" rel="noreferrer" href={Resume}>
//           <FontAwesomeIcon icon={faStickyNote} />
//         </a>

// <NavLink
// className="about-link"
// exact="true"
// activeclassname="active"
// to="/about"
// >
// ABOUT
// </NavLink>

// <Link className="logo" to="/">
// <img src={Logo} alt="logo" />
// </Link>
