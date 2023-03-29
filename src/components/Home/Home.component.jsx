import "./Home.style.scss";
import "../../assets/svg/Name/name.scss";
import ProfilePicture from "../../assets/images/ProfilePicture1.jpg";
import Navbar from "../Navbar/Navbar.component";
import Resume from "../../assets/documents/Jackson Kupris Resume.pdf";
import { ReactComponent as Name } from "../../assets/svg/Name/name.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="home-container">
          <img
            src={ProfilePicture}
            className="profile-picture"
            alt="ProfilePicture"
          />
          <div className="info-container">
            <Name className="animated-name" />
            <h2 className="intro-sub">Full Stack Developer</h2>

            <div className="link-wrapper">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jacksonkupris/"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JacksonKupris/"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href={Resume}
                className="social-link"
              >
                <FontAwesomeIcon icon={faStickyNote} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
