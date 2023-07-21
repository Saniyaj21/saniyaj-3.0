import React from "react";
import "../styles/skill.scss";

import { SiExpress } from "react-icons/si";
import mongodb from "../media/MongoDB_Logo.svg.png";
import django from "../media/django-logo-big.jpg";

const Skills = () => {
  function activeBtn(n) {
    const front = document.getElementById("front-end");
    const back = document.getElementById("back-end");
    const design = document.getElementById("design");

    // Remove the class from all buttons first
    front.classList.remove("active-skill-btn");
    back.classList.remove("active-skill-btn");
    design.classList.remove("active-skill-btn");

    // containers
    const frontBox = document.getElementById("box-front");
    const backBox = document.getElementById("box-back");
    const designBox = document.getElementById("box-design");

    // remove ddisplay
    backBox.style.display = "none";
    frontBox.style.display = "none";
    designBox.style.display = "none";

    // Add the class to the button based on the provided number (n)
    switch (n) {
      case 1:
        back.classList.add("active-skill-btn");
        backBox.style.display = "block";
        break;
      case 2:
        front.classList.add("active-skill-btn");
        frontBox.style.display = "block";
        break;
      case 3:
        design.classList.add("active-skill-btn");
        designBox.style.display = "block";
        break;
      default:
        break;
    }
  }

  return (
    <section id="skills">
      <h2 className="font-p text-center h2 skill-head">Skills</h2>

      <div className="skill-category ">
        <button
          onClick={() => activeBtn(2)}
          className="btn btn-skill active-skill-btn"
          id="front-end"
        >
          Frontend
        </button>
        <button
          onClick={() => activeBtn(1)}
          className="btn btn-skill"
          id="back-end"
        >
          Backend
        </button>
        <button
          onClick={() => activeBtn(3)}
          className="btn btn-skill"
          id="design"
        >
          Others
        </button>
      </div>

      <div className="bars-container">


        {/* backend box */}
        <div className="div-flex card-container" id="box-back">
          <div
          
          data-aos="fade-right"
            data-aos-duration="100"
          
          className="card-items">

            <div className="icon">
              <i style={{ color: "green" }} class="fa-brands fa-node"></i>
            </div>
            <div className="tech">Node Js</div>

          </div>
          <div 
          
          data-aos="fade-right"
            data-aos-duration="400"
          
          className="card-items">

            <div className="icon">
            <SiExpress />
            </div>
            <div className="tech">Express Js</div>

          </div>
          <div
          
          data-aos="fade-right"
            data-aos-duration="700"
          
          className="card-items">

            <div className="icon">
            <img  id="mongodb" src={mongodb} alt="" />
            {/* <SiExpress/> */}
            </div>
            <div className="tech">Mongo DB</div>

          </div>
          <div
          
          data-aos="fade-right"
            data-aos-duration="1000"
          
          className="card-items">

            <div className="icon">
            <img id="django" src={django} alt="" />
            </div>
            <div className="tech">Django</div>

          </div>
         
        </div>


{/* frontend box */}
        <div className="div-flex card-container" id="box-front">
        <div
          
          data-aos="fade-right"
            data-aos-duration="100"
          
          className="card-items">

            <div className="icon">
            <i style={{ color: "orange" }} class="fa-brands fa-html5"></i>
            </div>
            <div className="tech">HTML 5</div>

          </div>
          <div 
          
          data-aos="fade-right"
            data-aos-duration="400"
          
          className="card-items">

            <div className="icon">
            <i style={{ color: "blue" }} class="fa-brands fa-css3-alt"></i>
            </div>
            <div className="tech">CSS 3</div>

          </div>
          <div
          
          data-aos="fade-right"
            data-aos-duration="700"
          
          className="card-items">

            <div className="icon">
            <i style={{ color: "gold" }} class="fa-brands fa-square-js"></i>
            </div>
            <div className="tech">JavaScript</div>

          </div>
          <div
          
          data-aos="fade-right"
            data-aos-duration="1000"
          
          className="card-items">

            <div className="icon">
            <i style={{ color: "aqua" }} class="fa-brands fa-react"></i>
            </div>
            <div className="tech">React</div>

          </div>
          <div
          
          data-aos="fade-right"
            data-aos-duration="1000"
          
          className="card-items">

            <div className="icon">
            <i style={{ color: "blue" }} class="fa-brands fa-bootstrap"></i>
            </div>
            <div className="tech">Bootstrap</div>

          </div>
         
        </div>



{/* others box */}
        <div className="div-flex card-container" id="box-design">
        <div
          
          data-aos="fade-right"
            data-aos-duration="100"
          
          className="card-items">

            <div className="icon">
            <i class="fa-brands fa-python"></i>
            </div>
            <div className="tech">Python</div>

          </div>
          <div 
          
          data-aos="fade-right"
            data-aos-duration="400"
          
          className="card-items">

            <div className="icon">
            <i class="fa-brands fa-figma"></i>
            </div>
            <div className="tech">Figma</div>

          </div>
          <div
          
          data-aos="fade-right"
            data-aos-duration="700"
          
          className="card-items">

            <div className="icon">
            <i class="fa-brands fa-git"></i>
            </div>
            <div className="tech" id="git-icon">Git & GitHub</div>

          </div>
         
         
        </div>
      </div>
    </section>
  );
};

export default Skills;

{
  /* 

       

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="bar-box"
          >
            <img id="mongodb" src={mongodb} alt="" />
            <span className="tech">Mongo DB</span>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1300"
            className="bar-box"
          >
            <i style={{ color: "blue" }} class="fa-brands fa-python"></i>
            <span className="tech">Python/Django</span>
          </div> */
}
