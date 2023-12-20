import "./About.style.scss";
import Navbar from "../Navbar/Navbar.component";
import Cheeba from "../../assets/images/Cheeba.jpg";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="about-container">
          <div className="about-picture-container">
            <img className="about-picture" src={Cheeba} alt="My Cat Cheeba" />
          </div>
          <div className="about-paragraph">
            <p>
              Hello! I'm Jackson Kupris, a software developer passionate about
              crafting innovative applications. With a deep understanding of the
              software development life cycle, I excel in solving complex
              problems through programming. My expertise spans proprietary
              Python projects to web-based solutions, utilizing technologies
              such as React, Python, Django, SQL, and GIT. Eager to embrace new
              technologies, I believe effective software development goes beyond
              code—it involves comprehending end-users' needs, creating
              intuitive solutions. My user-centric approach aims to enhance the
              user experience and make software accessible to all. Beyond
              coding, I enjoy exploring campsites and playing games. I'm an avid
              reader of technology and entrepreneurship books, staying current
              with industry trends. Thanks for getting to know me—I look forward
              to collaborating on software solutions that truly make a
              difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
