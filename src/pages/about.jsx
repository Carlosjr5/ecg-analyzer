import React from 'react'
import AboutImage from '../images/about-image.svg';

const About = () => {
    return (
        <section className='w-[85%] m-auto mt-[10rem] flex gap-8 flex-col-reverse justify-between items-center md:flex-row'>
            <div className='w-full flex justify-center md:w-1/2'>
                <img width="60%" src={AboutImage} alt="about-image" />
            </div>
            <div className='flex flex-col gap-4 w-full md:w-1/2'>
                <label className='text-secondary font-medium font-inter text-[14px] flex items-center gap-2'>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L2 14" stroke="#E15A85" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    Aims and Goals
                </label>
                <h1 className='text-primary-200 font-onest font-bold mb-4 text-3xl lg:text-5xl'>ABOUT US</h1>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold font-onest text-primary-200 sm:text-lg lg:text-2xl'>VISION</h2>
                    <p className='font-inter sm:text-sm lg:text-base'>
                        Develop a software solution that enables healthcare professionals, especially fresh doctors, to quickly and accurately analyse ECG data from images.
                    </p>
                </div>
                <div className='flex flex-col gap-3 font-inter'>
                    <h2 className='font-semibold font-onest text-primary-200 sm:text-lg lg:text-2xl'>MISSION</h2>
                    <p className='sm:text-sm lg:text-base'>1. Reduce diagnostic errors.</p>
                    <p className='sm:text-sm lg:text-base'>2. Enhance the speed of cardiac assessments.</p>
                    <p className='sm:text-sm lg:text-base'>3. Support doctors in making informed decisions for improved patient outcomes</p>
                </div>
            </div>
        </section>
    )
}

export default About