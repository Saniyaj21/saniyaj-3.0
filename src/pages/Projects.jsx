import React from "react";
import { useState } from "react";

import "../styles/project.scss";
// import { motion } from 'framer-motion';

const Projects = ({ data }) => {
	const [selectedOption, setSelectedOption] = useState("top");
	const [projects] = useState(data);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<section id='projects'>
			<div className='space'></div>
			<h2 className='h2 font-p text-center project-head'>Projects</h2>
			<hr className='hr-line' />

			<div className='project'>
				<div className='select-div'>
					<select
						className='tech-option font-p'
						value={selectedOption}
						onChange={handleOptionChange}
					>
						<option value='top'>Top Projects</option>
						<option value='all'>All</option>
						<option value='frontend'>Frontend</option>
						<option value='fullstack'>Full Stack</option>
					</select>
				</div>

				{projects.map((item, key) => {
					if (item.category.includes(selectedOption)) {
						const {
							id,
							name,
							desc,
							tags,
							location,
							liveLink,
							sourceCode,
							backend,
						} = item;

						return (
							<div className='center-div'>
								<div
									key={key}
									data-aos='fade-up'
									data-aos-offset='300'
									data-aos-delay="200"
									data-aos-duration='700'
									className='project-card div-flex'
								>
									<div className='project-details'>
										<h2 className='font-p'>{name}</h2>
										<p className="font-p">{desc}</p>
										<div className='buttons'>
											<div>
												<a href={sourceCode} target='blank'>
													Source Code
												</a>
											</div>
											<div>
												{backend && (
													<a href={backend} target='blank'>
														Backend
													</a>
												)}
											</div>

											<div>
												{liveLink !== null && (
													<a href={liveLink} target='blank'>
														Visit Live
													</a>
												)}
											</div>
										</div>
									</div>
									<div className='project-image'>
										<div className='image-project-box'>
											<img src={location} alt={name} />
										</div>
										<div className='tags'>
											{tags.map((tag, index) => (
												<div key={index} className='tags-span'>
													{tag}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</section>
	);
};

export default Projects;
