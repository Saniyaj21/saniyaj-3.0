import React from 'react'
import { useState } from 'react';

const Projects = ({ data }) => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (




        <div>

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

            })}</div>
    )
}

export default Projects