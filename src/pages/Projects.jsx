import React from "react";
import { useState } from "react";
import data from "../data.json";
import ProjectCard from "../components/ProjectCard";

import "../styles/project.scss";
// import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section id="projects">
      <div className="space"></div>
      <h2 className="h2 font-p text-center project-head">Projects</h2>
      <hr className="hr-line" />

      <div className="project">
        <div className="select-div">
          <select
            className="tech-option font-p"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select Tech</option>
            <option value="all">All</option>
            <option value="python">Python</option>
            <option value="django">Django</option>
            <option value="react">React</option>
          </select>
        </div>

       

        {data.map((item) => {
          if (item.tags.includes(selectedOption)) {
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
                  <img src="project-screenshot.jpg" alt="Project Screenshot" />
                  <div className="tags">
                  {item.tags.map((tag, index) => (
                    <span className="tags-span">{tag}</span>
                  ))}
                  </div>
                </div>
              </div>




            //   <ProjectCard key={item.id} item={item} />
              //   <div key={item.id}>
              //     <h2>{item.name}</h2>

                //   {item.tags.map((tag, index) => (
                //     <li key={index}>{tag}</li>
                //   ))}
              //   </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Projects;
