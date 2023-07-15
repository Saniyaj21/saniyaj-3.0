import React, { useEffect, useState } from "react";
import Loading from '../components/Loading';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// style
import "../styles/contact.scss"

const Contact = () => {
    const [loading, setLoading] = useState(true);

    const faColors = {
        color: 'white',
    };

    useEffect(() => {

        AOS.init();

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? <Loading /> :
                <div
                    data-aos="slide-up"
                    data-aos-duration="700"

                    className='contact-section'>

                    <div className="contact-head font-p">
                        <h1 className="h2 text-center">Contact Me</h1>
                    </div>

                    {/* social media icons */}
                    <div className="big-box div-flex">

                        <div
                            data-aos="fade-right"
                            data-aos-duration="100"
                            className="child-1 in-box">
                            <a href="https://www.linkedin.com/in/saniyaj-mallik-27809923a/" target="_blank">
                                <i class="fa-brands fa-linkedin-in social-icons" style={faColors}
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                ></i>
                            </a>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="500"
                            className="child-2 in-box">
                            <a href="https://www.facebook.com/saniyaj.mallik.7" target="_blank">
                                <i class="fa-brands fa-facebook-f social-icons" style={faColors}
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                ></i>
                            </a>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="900"
                            className="child-3 in-box">
                            <a href="https://github.com/Saniyaj21" target="_blank">
                                <i class="fa-brands fa-github social-icons" style={faColors}
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                ></i>
                            </a>

                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1300"
                            className="child-4 in-box">
                            <a href="https://www.instagram.com/saniyajmallik/" target="_blank">
                                <i class="fa-brands fa-instagram social-icons" style={faColors}
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                ></i>
                            </a>

                        </div>

                    </div>

                    <div className="space"></div>



                </div >
            }
        </>
    )
}

export default Contact