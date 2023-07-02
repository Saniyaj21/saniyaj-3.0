import React from 'react';
import '../styles/navbar.scss';

const Navbar = () => {

    const nav_active = document.querySelectorAll('.navbar');

    const open_menu = () => {
        nav_active.forEach((elem) => elem.classList.add('active'))
    }

    const close_nav = () => {
        nav_active.forEach(elem => elem.classList.remove('active'))
    }

    return (

        <header>
            <div class="logo">
                <a href="#">Saniyaj Mallik</a>
            </div>

            <div class="menu">
                <i class="fa-sharp fa-solid fa-bars" onClick={open_menu}></i>
                <div class="navbar nav-first">
                    <div class="navbar nav-second">
                        <div class="navbar navbar-list">
                            <i class="fa-solid fa-square-xmark" onClick={close_nav}></i>

                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#" >about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar