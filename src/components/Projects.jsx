import { useState, useEffect } from "react";
import axios from "axios";
import './Projects.css';

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log("Error fetching projects:", err));
  }, []);

  return (
    <div>
      <h1 className="project-title">My Projects</h1>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};
