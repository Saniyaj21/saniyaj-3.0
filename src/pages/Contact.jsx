import React, { useEffect, useState } from "react";
import Loading from '../components/Loading';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// style
import "../styles/contact.scss"

const Contact = () => {
    const [loading, setLoading] = useState(true);

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

                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="200"
                            className="child-2 in-box">

                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="300"
                            className="child-3 in-box">

                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="400"
                            className="child-4 in-box">

                        </div>

                    </div>

                    <div className="space"></div>



                </div >
            }
        </>
    )
}

export default Contact