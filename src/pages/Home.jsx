import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// frammer motion
import { motion } from "framer-motion";

// type writer effect
import { Typewriter } from "react-simple-typewriter";

// home screen dp
import sani4 from "../media/dp-compre.webp";

// pages/components
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Qualification from "../pages/Qualification";
import Contact from "../pages/Contact";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

// style
import "../styles/home.scss";

// resumePDF
import resumePDF from "../media/resume.pdf";

import data from "../data.json";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [image, setImage] = useState();
	console.log(image);

	useEffect(() => {
		setImage(sani4)
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);

	// resume download
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resumePDF;
		link.setAttribute("download", "Saniyaj_resume.pdf"); // Replace with your desired filename and extension
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='home container'>
					<section id='home-section' data-aos='fade-up'>
						<div className='first-main div-flex'>
							<div className='first-box-left div-flex-2-width  '>
								<h2 className='home-head-1 h2 font-head'>Hi,</h2>
								<motion.h1
									initial={{ x: -100 }}
									animate={{ x: 0 }}
									transition={{
										type: "spring",
										stiffness: 260,
										damping: 20,
									}}
									className='home-head-2 h1  font-p'
								>
									I'm <span className='name  font-p'>Saniyaj mallik</span>
								</motion.h1>
								<h2 className='writer h2'>
									I am a{" "}
									<span
										className=''
										style={{ color: "blue", fontWeight: "bold" }}
									>
										<Typewriter
											words={["Developer", "Designer", "Student"]}
											loop={true}
											cursor
											cursorStyle='|'
											typeSpeed={60}
											// deleteSpeed={50}
											// delaySpeed={1000}
										/>
									</span>
								</h2>
								<p className='font-p text-fit '>
									Dedicated BCA graduate passionate about crafting innovative
									web experiences.
								</p>

								<div className='home-btn div-flex'>
									<a href='tel:9775348397'>
										<button className='btn btn-home-call'>
											Call Me <i className='fa-solid fa-phone'></i>
										</button>
									</a>
									<button className='btn resume-btn' onClick={handleDownload}>
										Resume{" "}
										<span>
											<i className='fa-solid fa-fade fa-download'></i>
										</span>
									</button>
								</div>
							</div>

							<div className='first-box-right div-flex-2-width '>
								<img className='banner logo-image' src={image} alt='' />
							</div>
						</div>
					</section>

					<div className='space'></div>

					<About />
					<Qualification />
					<Skills />
					<Projects data={data} />
					<Contact />
					<Footer />
				</div>
			)}
		</>
	);
};

export default Home;
