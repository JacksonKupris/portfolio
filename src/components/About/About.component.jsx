import "./About.style.scss";
import Navbar from "../Navbar/Navbar.component";
import Cheeba from '../../assets/images/Cheeba.jpg'
import Llama from '../../assets/images/llama.jpg'

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="about-container">
          <div className="about-picture-container"></div>
            <img className="about-picture" src={Cheeba} alt='My Cat Cheeba'/>
            <img className="about-picture" src={Llama} alt='Starfire the Llama and I'/>
          <div className="about-paragraph">
            <p>
              Hello there! My name is Jackson Kupris, and I am a software
              developer with a passion for creating innovative and impactful
              applications. I have developed a strong understanding of the
              software development life cycle and a knack for solving complex
              problems through programming. Throughout my career, I have worked
              on a variety of projects spanning from proprietary Python projects to
              web-based solutions. I have experience with React, Python, Django,
              SQL, and GIT, and I am always eager to learn and explore new
              technologies that can help me build better software. I believe
              that software development is not just about writing code, but it's
              also about understanding the needs of the end-users and creating
              solutions that are easy to use and intuitive. My approach to
              software development is user-centric, and I am always looking for
              ways to improve the user experience and make software more
              accessible to everyone. When I am not coding, you can find me
              exploring new hiking trails or experimenting with new recipes in
              my kitchen. I also enjoy reading books on technology and
              entrepreneurship, which helps me stay up-to-date with the latest
              trends and ideas in the industry. Thank you for taking the time to
              learn a bit about me. I look forward to working with you and
              creating exceptional software solutions that can make a difference
              in people's lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
