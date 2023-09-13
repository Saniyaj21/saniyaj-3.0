import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";
import dp from "../media/newPic.jpg";
// import dp from "../media/about-nav-lite.png";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isNavMobile, setIsNavMobile] = useState(false);

  const toggleMenu = () => {
    setIsNavMobile(!isNavMobile);
  };

  return (
    <header className={`${isNavMobile ? "fix-to-top" : ""}`}>
      <nav className={`nav ${isNavMobile ? "nav-mobile" : ""}`}>
        <span className="logo">
          <a href="#">
            <img className="logo-icon" src={dp} alt="saniyaj mallik" />
          </a>
        </span>
        <span onClick={toggleMenu} className={`hamburg ${isNavMobile ? "ham" : ""}`}>
          <div className="span-1 ham-lines"></div>
          <div className="span-2 ham-lines"></div>
          <div className="span-3 ham-lines"></div>
        </span>
        <div className={`menu ${isNavMobile ? "menu-toggle" : ""}`}>
          <ul  className="ul">
            <li className="nav-li"><a className="nav-a" href="#">Home</a></li>
            <li className="nav-li"><a className="nav-a" href="#about">About</a></li>
            <li className="nav-li"><a className="nav-a" href="#qualification">Qualifications</a></li>
            <li className="nav-li"><a className="nav-a" href="#skills">Skills</a></li>
            <li className="nav-li"><a className="nav-a" href="#projects">Projects</a></li>
            <li className="nav-li"><a className="nav-a" href="#contact">ContactMe</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
