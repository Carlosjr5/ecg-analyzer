import { motion } from 'framer-motion'
import React from 'react'

// Images, SVG
import DoctorAvatar1 from '../../images/doctor-avatar-1.png';
import DoctorAvatar2 from '../../images/doctor-avatar-2.png';
import QuoteIcon from '../../images/quote.svg';

const Testimonial = () => {
    return (
        <section section className='mt-[4rem] flex flex-col gap-8 justify-center items-center p-5 md:p-0' >
            <motion.div className='flex flex-col gap-4 opacity-0'
                whileInView={{
                    opacity: 1,
                    y: -30,
                }}
            >
                <label className='text-secondary font-medium font-inter text-[11px] flex items-center gap-2'>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L2 14" stroke="#E15A85" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    Testimonial
                </label>

                <h1 className='text-primary-200 font-onest font-bold text-3xl text-balance
                sm:text-4xl
                md:text-5xl
                '>Voice of Medical Experts</h1>

                <p className='text-sm leading-relaxed font-inter font-light mt-2 text-balance
                md:text-base
                '>
                    Listen the voice of real Experiences from Leading Cardiologists and
                    transforming modern cardiac analysis.
                </p>

            </motion.div>

            <motion.div className='flex justify-center mt-8 opacity-0'
                whileInView={{
                    opacity: 1,
                    y: -20,
                    transition: {
                        type: "spring",
                    }
                }}
            >
                <div className='w-full bg-[#DFF1F6] py-8 px-6 rounded-xl flex flex-col gap-4 relative
                md:w-[90%]
                lg:w-1/2
                '>
                    <img className="absolute -top-[14px]" width="40px" src={QuoteIcon} alt="quote-icon" />

                    <div className='flex gap-4 items-center'>
                        <div>
                            <img width="60px" src={DoctorAvatar1} alt="doctor-profile" />
                        </div>
                        <label>
                            <p className='font-inter font-medium text-sm'><i>Dr. Sarah Chen</i></p>
                            <p className='text-gray-400 font-inter text-sm'><i>New York, USA</i></p>
                        </label>
                    </div>
                    <p className='font-inter text-[13px] text-balance
                    sm:text-sm
                    md:text-base
                    '>
                        <i>" The platform's precision in pattern recognition has transformed our diagnostic approach, making complex ECG interpretation more efficient and accurate."
                        </i>
                    </p>
                </div>
            </motion.div>

            <motion.div className='flex justify-center mt-8 opacity-0'
                whileInView={{
                    opacity: 1,
                    y: -40,
                    transition: {
                        type: "spring",
                    }
                }}
            >
                <div className='w-full bg-[#DFF1F6] py-8 px-6 rounded-xl flex flex-col gap-4 relative
                md:w-[90%]
                lg:w-1/2
                '>
                    <img className="absolute -top-[14px]" width="40px" src={QuoteIcon} alt="quote-icon" />

                    <div className='flex gap-4 items-center'>
                        <div>
                            <img width="60px" src={DoctorAvatar2} alt="doctor-profile" />
                        </div>
                        <label>
                            <p className='font-inter font-medium text-sm'><i>Dr. Michael Roberts</i></p>
                            <p className='text-gray-400 font-inter text-sm'><i>London, UK</i></p>
                        </label>
                    </div>
                    <p className='font-inter text-[13px] text-balance
                    sm:text-sm
                    md:text-base
                    '>
                        <i>
                            " In emergency scenarios where every second counts, having reliable ECG analysis makes a crucial difference. This platform delivers consistently when it matters most."
                        </i>
                    </p>
                </div>
            </motion.div>
        </section >
    )
}

export default Testimonial