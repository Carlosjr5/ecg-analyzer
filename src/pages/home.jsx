import React from 'react'

// Components
import Hero from "../components/home/hero"
import BeyondService from "../components/home/beyond-service"
import ProcessFlow from '../components/home/process-flow';
import Testimonial from '../components/home/testimonial';


// Images, SVG

const Home = () => {
    return (
        <section className='m-auto
        sm:w-[96%] sm:mt-32 
        md:w-[90%] 
        lg:w-[85%]'
        >
            <Hero />
            <BeyondService />
            <ProcessFlow />
            <Testimonial />

        </section >
    )
}

export default Home