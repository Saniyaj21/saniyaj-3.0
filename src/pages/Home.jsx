import React from 'react'
import About from '../pages/About';

const Home = () => {
    return (
        <div className='home'>
            <section id='home-section'>
                <h3>Home</h3>
            </section>
            <section id='about-section'>
                <About />
            </section>
        </div >
    )
}

export default Home