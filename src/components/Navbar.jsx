import React, { useEffect, useState } from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import dp from '../media/dp.jpg'

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    useEffect(() => {

        AOS.init();
    }, []);

    const [isNavActive, setNavActive] = useState(false);

    const openMenu = () => {
        console.log('OPEN');
        setNavActive(true);
    };

    const closeNav = () => {
        console.log('CLOSE');
        setNavActive(false);
    };

    return (
        <header>
            <div className="logo">
                <Link to="/"><span className="font-p">Saniyaj Mallik</span></Link>
            </div>

            <div className="menu">
                <i className="fa-sharp fa-solid fa-bars" onClick={openMenu}></i>
                <div
                    className={`navbar nav-first ${isNavActive ? 'active' : ''}`}>

                    <i className="fa-solid fa-square-xmark" onClick={closeNav}></i>


                    <ul>
                        <motion.div className="image"
                        // animate={{
                        //     y: [0, 5, 0],
                        // }}
                        // transition={{
                        //     repeat: Infinity
                        // }}
                        >
                            <img src={dp} alt="" className='nav-dp' />
                        </motion.div>



                        <Link to="/" className='li-link font-p' onClick={closeNav}><li>Home</li></Link>
                        <a href="#about" className='li-link font-p' onClick={closeNav}><li>About</li></a>
                        <a href="#qualification" className='li-link font-p' onClick={closeNav}><li>Qualifications</li></a>
                        <a href="#skills" className='li-link font-p' onClick={closeNav}><li>Skills</li></a>
                        <a href="#projects" className='li-link font-p' onClick={closeNav}><li>Projects</li></a>
                        <a href="#contact" className='li-link font-p' onClick={closeNav}><li>Contack Me</li></a>
                    </ul>


                </div>
            </div>
        </header >
    );
};

export default Navbar;
