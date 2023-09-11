import React from "react";

// style
import "../styles/contact.scss"

const Contact = () => {




    return (
        <section id="contact">


            <div
                data-aos="fade-right"
                data-aos-duration="700"

                className='contact-section'>

                <div className="contact-head font-p">
                    <h1 className="h2 text-center">Contact Me</h1>
                    <hr className='hr-line' />
                </div>

                {/* social media icons */}
                <div className="big-box div-flex">

                    <div
                        data-aos="fade-right"
                        data-aos-duration="100"
                        className="child-1 in-box">
                        <a href="mailto:saniyajmallik12@gmail.com" target="blank">
                   
                           
                            <i className="fa-solid fa-envelope social-icons" 
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            ></i>
                        </a>
                    </div>

                    <div
                        data-aos="fade-right"
                        data-aos-duration="400"
                        className="child-1 in-box">
                        <a href="https://www.linkedin.com/in/saniyaj-mallik-27809923a/" target="blank">
                            <i className="fa-brands fa-linkedin-in social-icons" 
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            ></i>
                        </a>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="500"
                        className="child-2 in-box">
                        <a href="https://www.facebook.com/saniyaj.mallik.7" target="blank">
                            <i className="fa-brands fa-facebook social-icons" 
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            ></i>
                        </a>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="900"
                        className="child-3 in-box">
                        <a href="https://github.com/Saniyaj21" target="blank">
                            <i className="fa-brands fa-github social-icons" 
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            ></i>
                        </a>

                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1300"
                        className="child-4 in-box">
                        <a href="https://www.instagram.com/saniyajmallik/" target="blank">
                            <i className="fa-brands fa-square-instagram social-icons" 
                            // <i className="fa-brands fa-instagram social-icons" style={faColors}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            ></i>
                        </a>

                    </div>

                </div>

                <div className="space"></div>



            </div >
        </section>

    )
}

export default Contact