import React from 'react'
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Qualification from '../pages/Qualification';
import Contact from '../pages/Contact';

// import { motion } from "framer-motion";


const Home = () => {


    return (
        <div className='home'>
            <section id='home-section'>
                <h3>Home</h3>
            </section>
            <section id='about-section'>
                <About />
            </section>
            <section id='qualification-section'>
                <Qualification />
            </section>
            <section id='skills-section'>
                <Skills />
            </section>
            <section id='projects-section'>
                projects
                <Projects />
            </section>
            <section id='contact-section'>
                <Contact />
            </section>
        </div >
    )
}

export default Home