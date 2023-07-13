import React, { useState } from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import dp from '../media/dp.jpg'


const Navbar = () => {
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
                <Link to="#"><span className="font-p">Saniyaj Mallik</span></Link>
            </div>

            <div className="menu">
                <i className="fa-sharp fa-solid fa-bars" onClick={openMenu}></i>
                <div className={`navbar nav-first ${isNavActive ? 'active' : ''}`}>

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
                        <Link to="/about" className='li-link font-p' onClick={closeNav}><li>About</li></Link>
                        <Link to="/qualification" className='li-link font-p' onClick={closeNav}><li>Qualifications</li></Link>
                        <Link to="/skills" className='li-link font-p' onClick={closeNav}><li>Skills</li></Link>
                        <Link to="/projects" className='li-link font-p' onClick={closeNav}><li>Projects</li></Link>
                        <Link to="/contact" className='li-link font-p' onClick={closeNav}><li>Contack Me</li></Link>
                    </ul>


                </div>
            </div>
        </header >
    );
};

export default Navbar;
