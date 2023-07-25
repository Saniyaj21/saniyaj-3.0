import React from "react";
import { useState } from "react";


import "../styles/project.scss";
// import { motion } from 'framer-motion';

const Projects = ({data}) => {
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
            <option value="fullstact">Full Stack</option>
          </select>
        </div>

        {projects.map((item, key) => {
          if (item.category.includes(selectedOption)) {
            const { name, tags, location, liveLink, sourceCode } = item;

            return (
              <div
                key={key}
                data-aos="fade-up"
                data-aos-duration="500"
                className="project-card div-flex"
              >
                <div className="project-details">
                  <h2 className="font-p">
                    {key + 1}
                    {". "}
                    {name}
                  </h2>
                  <p>
                    Project Description: A brief description of the project and
                    its features.
                  </p>
                  <div className="buttons">
                    <a
                      href={sourceCode}
                      className="source-code-button"
                      target="blank"
                    >
                      Source Code
                    </a>

                    {liveLink !== null && (
                      <a
                        href={liveLink}
                        className=" live-demo-button"
                        target="blank"
                      >
                        Live Demo
                      </a>
                    )}
                    {liveLink == null && (
                      <a
                        href={liveLink}
                        className=" live-demo-button"
                        target="blank"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-image">
                  <div className="image-project-box">
                    <img src={location} alt={name} />
                  </div>
                  <div className="tags">
                    {tags.map((tag, index) => (
                      <div key={index} className="tags-span">
                        {tag}
                      </div>
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
