import React from "react";
import { useState} from "react";
import data from "../data.json";


import "../styles/project.scss";
// import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedOption, setSelectedOption] = useState("top");
  const [projects] = useState(data);


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
            <option value="top">Top Projects</option>
            <option value="all">All</option>
            <option value="frontend">FrontEnd</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </div>

        {projects.map((item, key) => {
          if (item.category.includes(selectedOption)) {
            const { name, tags, location } = item;

            return (
              <div
              
              data-aos="fade-up"
                data-aos-duration="500"

              className="project-card div-flex">
                <div className="project-details">
                  <h2>{key+1}{". "}{name}</h2>
                  <p>
                    Project Description: A brief description of the project and
                    its features.
                  </p>
                  <div className="buttons">
                    <a href="#" className="source-code-button">
                      Source Code
                    </a>
                    <a href="#" className=" live-demo-button">
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="project-image">
                  <div className="image-project-box">
                  <img src={location} alt={name} />
                  </div>
                  <div className="tags">
                    {tags.map((tag, index) => (
                      <div className="tags-span">{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Projects;
