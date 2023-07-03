import React, { useState } from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';


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
                <Link to="#">Saniyaj Mallik</Link>
            </div>

            <div className="menu">
                <i className="fa-sharp fa-solid fa-bars" onClick={openMenu}></i>
                <div className={`navbar nav-first ${isNavActive ? 'active' : ''}`}>

                    <i className="fa-solid fa-square-xmark" onClick={closeNav}></i>


                    <ul>
                        <div className="image"></div>
                        <li>
                            <Link to="/" className='li-link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='li-link'>about</Link>
                        </li>
                        <li>
                            <Link to="#" className='li-link'>Skills</Link>
                        </li>
                        <li>
                            <Link to="#" className='li-link'>Projects</Link>
                        </li>
                        <li>
                            <Link to="#" className='li-link'>services</Link>
                        </li>
                        <li>
                            <Link to="#" className='li-link'>contact</Link>
                        </li>
                    </ul>


                </div>
            </div>
        </header>
    );
};

export default Navbar;
