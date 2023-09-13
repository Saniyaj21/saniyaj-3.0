import React from "react";

// import aboutMe from "../media/about-reduced.png";
// import aboutMe from '../media/about-nav-lite.png'
import newPic from '../media/newPic.jpg'

// style
import "../styles/about.scss";

const About = () => {
	return (
		<section>
			<h2 className='h2 font-p text-center p-top about-head'>About Me</h2>
			<hr className='hr-line' />
			<div className='main-about'>
				<div className='about-box div-flex'>
					<div className='about-info w-50 '>
						<div
							data-aos='zoom-in'
							data-aos-duration='800'
							className='img-container-about'
						>
							<img loading='lazy' src={newPic} alt='' />
						</div>
					</div>
					<div
						data-aos='fade-right'
						data-aos-duration='800'
						className='para w-50'
					>
						<p className='text-fit font-p'>
							I have recently graduated with a Bachelor of Computer Applications
							(BCA) from Panskura Banamali College. Throughout my studies, I
							focused on web development and became proficient in full-stack
							development. Known for my consistent delivery of high-quality work
							and strong work ethic, I am confident that my solid education and
							practical experience have prepared me to make a valuable
							contribution in the field of web development.
						</p>
                        <br />
						<a href='#contact'>
							<button className='btn btn-about-contact'>
							 Contact Me
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
