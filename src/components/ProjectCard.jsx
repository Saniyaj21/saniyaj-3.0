import React from "react";
import Tags from "./Tags";
import Image from "react-image";


const ProjectCard = ({ item, key , img}) => {
  
  return (
    <div className="project-card div-flex">
      <div className="project-details">
        <h2>{item.name}</h2>
        <p>
          Project Description: A brief description of the project and its
          features.
        </p>
        <div className="buttons">
          <a href="#" className="live-demo-button">
            Visit Live Demo
          </a>
          <a href="#" className="source-code-button">
            View Source Code
          </a>
        </div>
      </div>
      <div className="project-image">
      <img src={img}alt=""/>
        <div className="tags">
          {item.tags.map((tag, index) => (
            <span className="tags-span">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
