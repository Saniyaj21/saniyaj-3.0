import { Link } from 'react-router-dom';

import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Qualification from '../pages/Qualification';
import Contact from '../pages/Contact';

import React, { useEffect, useState } from "react";
import Loading from '../components/Loading';


import { Typewriter } from 'react-simple-typewriter';

import "../styles/home.scss";

import { motion } from "framer-motion";


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? <Loading /> :
                <div className='home container'>
                    <section id='home-section' >

                        <div className="first-main div-flex ">

                            <div className="first-box-left div-flex-2-width ">

                                <h2 className="home-head-1 h2 font-head">Hi,</h2>
                                <motion.h1
                                    initial={{ x: -100 }}
                                    animate={{ x: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    className="home-head-2 h1 font-head">I'm <span className="name font-head">Saniyaj mallik</span></motion.h1>
                                <h2 className='writer h2'>I am a{" "}
                                    <span className=''>
                                        <Typewriter
                                            words={['Developer', 'Designer', "Student"]}
                                            loop={true}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={50}
                                        // deleteSpeed={50}
                                        // delaySpeed={1000}

                                        />
                                    </span>
                                </h2>
                                <p className='font-p '>Dedicated BCA graduate passionate about crafting innovative web experiences.</p>
                                <Link to={"/contact"}><button className='font-p'>Contact Me</button></Link>

                            </div>

                            <div className="first-box-right div-flex-2-width">right</div>

                        </div>




                    </section>



                    {/* 
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
                    </section> */}

                </div >
            }
        </>
    )
}

export default Home