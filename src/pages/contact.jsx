import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
    return (
        <section className='w-[85%] m-auto mt-[10rem] flex flex-col gap-8 justify-between items-start lg:flex-row'>
            <div className='flex flex-col gap-4 w-full lg:w-1/2'>
                <label className='text-secondary font-medium font-inter text-[14px] flex items-center gap-2'>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L2 14" stroke="#E15A85" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    Contact Us
                </label>
                <h1 className='text-primary-200 font-onest font-bold mb-4 text-3xl lg:text-5xl'>GET IN TOUCH</h1>
                <p className='font-inter text-lg text-balance'>
                    Your Questions Matter. Our Expertise Awaits. We're Here to Support
                    Your Cardiac Analysis Journey.
                </p>
            </div>
            <form className='w-full lg:w-1/2 flex flex-col gap-6'>
                <h2 className='text-2xl md:text-3xl font-onest font-bold text-primary-200'>Contact Form</h2>

                {/* Name, Email */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 w-full'>
                        <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="name">Name</label>
                        <input className="border-2 border-primary-200 rounded-md p-4" type="text" placeholder='James Gun' required />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="email">Email</label>
                        <input className="border-2 border-primary-200 rounded-md p-4" type="email" placeholder='name124@gmail.com' required />
                    </div>
                </div>

                {/* Phone, Project Name */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="phone-number">Phone Number</label>
                        <input className="border-2 border-primary-200 rounded-md p-4" type="number" placeholder='0729819344' required />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="project">Project Name</label>
                        <input className="border-2 border-primary-200 rounded-md p-4" type="text" placeholder='ECG analysis' required />
                    </div>
                </div>

                {/* Subject and Messages */}
                <div className='flex flex-col gap-4'>
                    <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="subject">Subject</label>
                    <input className="border-2 border-primary-200 rounded-md p-4" type="text" placeholder='describe subject' required />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className="text-lg font-onest text-primary-200 font-bold" htmlFor="messages">Messages</label>
                    <textarea className="border-2 border-primary-200 rounded-md p-4 h-[300px]" type="text" placeholder='What you want to tell us...' required />
                </div>
                <motion.button className='bg-my-secondary font-onest font-bold text-white rounded-md py-4 text-sm md:text-lg' whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.8 }}>
                    SEND MESSAGE NOW
                </motion.button>
            </form>
        </section>
    )
}

export default Contact