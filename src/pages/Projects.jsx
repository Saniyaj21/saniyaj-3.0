import React from 'react'
import { useState } from 'react';
import data from '../data.json'
// import { motion } from 'framer-motion';

const Projects = () => {


    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (



        <section id="projects">

<h2 className='h2 font-p text-center'>Projects</h2>
            <hr className='hr-line' />
            <div className='project'>

                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="">Select Tech</option>
                    <option value="all">All</option>
                    <option value="python">Python</option>
                    <option value="django">Django</option>
                    <option value="react">React</option>
                </select>

                {data.map((item) => {

                    if (item.tags.includes(selectedOption)) {

                        return (
                            <div key={item.id}>
                                <h2>{item.name}</h2>

                                {item.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}

                            </div>
                        );
                    };

                })}
            </div>
        </section>
    )
}

export default Projects