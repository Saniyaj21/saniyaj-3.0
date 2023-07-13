import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// frammer motion
import { motion } from "framer-motion";

// type writer effect
import { Typewriter } from 'react-simple-typewriter';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// pages/components
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Qualification from '../pages/Qualification';
import Contact from '../pages/Contact';
import Loading from '../components/Loading';

// style
import "../styles/home.scss";

// resumePDF
import resumePDF from '../media/resume.pdf'; // Replace with the actual path to your local PDF file



const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    // resume download
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.setAttribute('download', 'Saniyaj_resume.pdf'); // Replace with your desired filename and extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



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

                                <div className="home-btn div-flex">

                                    <Link to={"/contact"}><button className='btn'>Contact Me</button></Link>
                                    <button className="btn resume-btn" onClick={handleDownload}>
                                        Resume <span class="material-symbols-outlined">
                                            download
                                        </span>
                                    </button>
                                </div>

                            </div>

                            <div className="first-box-right div-flex-2-width">

                                <h2>Right</h2>
                            </div>

                        </div>

                        <div className="space"></div>

                        <div data-aos="fade-up"
                            data-aos-offset="150"

                            className="big-box">

                            <div
                                data-aos="flip-up"
                                data-aos-delay="300"
                                // data-aos-offset="250"

                                className="child-1 in-box"></div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="300"
                                // data-aos-duration="100"

                                className="child-2 in-box"></div>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="150"

                            className="big-box">

                            <div
                                data-aos="flip-up"
                                data-aos-delay="300"
                                // data-aos-offset="250"

                                className="child-1 in-box"></div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="300"
                                // data-aos-duration="100"

                                className="child-2 in-box"></div>
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