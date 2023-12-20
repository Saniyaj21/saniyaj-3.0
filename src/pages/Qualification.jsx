import React from "react";
import "../styles/qualification.scss";

const Qualification = () => {
	return (
		<section id='qualification'>
			<h2 className='font-p text-center h2 q-head'>My Qualifications</h2>
			<hr className='hr-line' />
			<div
				data-aos='fade-up'
				data-aos-duration='700'
				className='div-flex q-box-main  '
			>
				{/* mca div */}
				<div
					data-aos='fade-up'
					data-aos-duration='400'
					className='q-item-boxes'
				>
					<h4 className='course font-p'>Post Graduate</h4>
					<p className='institute'>Haldia Institute Of Technology</p>
					<p className='subject'>Masters's in Computer Application (MCA)</p>
					<p className='year-marks font-p '>
						<div className='year'>2023 - 2025</div>
						<div className="marks">Present</div>
					</p>
					<div className='circle-point'></div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-duration='800'
					className='q-item-boxes '
				>
					<h4 className='course font-p'>Under Graduate</h4>
					<p className='institute'>Panskura Banamali College (Autonomous)</p>
					<p className='subject'>Bachelors's in Computer Application (BCA)</p>
					<p className='year-marks font-p'>
						<div className='year'>2020 - 2023</div>
						<div className='marks'>8.6 cgpa</div>
					</p>
					<div className='circle-point'></div>
				</div>
				<div
					data-aos='fade-up'
					data-aos-duration='1000'
					className='q-item-boxes '
				>
					<h4 className='course font-p'>High School</h4>
					<p className='institute'>Lachipur Binapani High School</p>
					<p className='subject'>Subject Including : Computer Application</p>
					<p className='year-marks font-p'>
						<div className='year'>2018 - 2020</div>
						<div className='marks'>90%</div>
					</p>
					<div className='circle-point'></div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
