import React from 'react';


// style
import '../styles/about.scss'

const About = () => {
    return (
        <section id="about"
        >
            <h2 className='h2 font-p text-center p-top about-head'>About Me</h2>
            <div

                className="main-about">
                <div className="about-box div-flex">
                    <div className="about-info w-50 ">
                        something
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"

                        className="para w-50"
                    >
                        <p className="text-fit font-p">I have recently graduated with a Bachelor of Computer Applications (BCA) from Panskura Banamali College. Throughout my studies, I focused on web development and became proficient in full-stack development. Known for my consistent delivery of high-quality work and strong work ethic, I am confident that my solid education and practical experience have prepared me to make a valuable contribution in the field of web development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About