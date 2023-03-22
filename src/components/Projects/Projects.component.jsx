import "./Projects.style.scss";
import Navbar from "../Navbar/Navbar.component";
import { projects } from "../../assets/data/data";
import "../Projects/Projects.style.scss";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="project-container">
          {projects.map((project) => (
            <div>
              <a
                href={project.link}
                key={project.image}
                className="project-link"
              >
                <img
                  className="project-image"
                  alt="gallery"
                  src={project.image}
                />
                <h1 className="project-title">{project.title}</h1>
              </a>
              <h3 className="project-sub">{project.subtitle}</h3>
              <div className="description-container">
                <p className="project-descrip">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
