import React from 'react'
import { motion } from 'framer-motion';

// Images, SVG
import SolutionIcon from '../../images/solution-icon.svg';
import DocumentIcon from '../../images/document-icon.svg';
import TrainingIcon from '../../images/training-icon.svg';
import DataIcon from '../../images/data-icon.svg';


const BeyondService = () => {
    return (
        <section className='flex flex-col mt-10 p-5 md:p-0'>

            <motion.div className='flex flex-col gap-4'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        type: "spring",
                        damping: 10,
                        stiffness: 100
                    }
                }}
                viewport={{ once: true }}
            >
                <label className='text-secondary font-medium font-inter text-[11px] flex items-center gap-2'>
                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L2 14" stroke="#E15A85" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    OUR SERVICE
                </label>
                <h1 className='text-primary-200 font-onest font-bold text-3xl
                sm:text-4xl
                md:text-5xl
                '>Beyond the Beat</h1>
                <p className='text-balance text-sm leading-relaxed font-inter font-light mt-2
                sm:text-sm
                md:text-base
                '>Transforming complex cardiac signals into meaningful insights through <br />advanced ECG analysis technology.</p>
            </motion.div>

            <div className='mt-14
            sm:flex sm:gap-4
            md:w-[90%] md:m-auto md:mt-14
            lg:w-[80%] lg:p-8
            '>
                <motion.div className='w-full flex flex-col gap-4 service-gradient-down rounded-2xl px-5 py-8 opacity-0
                '
                    whileInView={{
                        opacity: 1,
                        y: -30,
                        transition: {
                            type: "spring",
                        }
                    }}
                    viewport={{
                        once: true,
                        amount: 0.8,
                    }}
                >
                    <div className='w-[80px]'>
                        <img className="slide-bottom" width="60%" src={SolutionIcon} alt="solution-icon" />
                    </div>

                    <label className='font-onest font-semibold text-primary-200 text-lg'>ECG Analysis Solution</label>
                    <p className='text-balance text-primary-200 font-inter text-sm'>
                        Professional rhythm interpretation with detailed
                        cardiac assessment and custom analysis reports
                    </p>
                </motion.div>

                <motion.div className='w-full flex flex-col gap-4 service-gradient-down rounded-2xl px-5 py-8 opacity-0'
                    whileInView={{
                        opacity: 1,
                        y: -30,
                        transition: {
                            type: "spring",
                        }
                    }}
                    viewport={{
                        once: true,
                        amount: 0.8,
                    }}
                >
                    <div className='w-[80px]'>
                        <img className="flip-2-hor-bottom-bck" width="50%" src={DocumentIcon} alt="document-icon" />
                    </div>

                    <label className='font-onest font-semibold text-primary-200 text-lg'>Report Generation</label>
                    <p className='text-balance text-primary-200 font-inter text-sm'>
                        The detailed analysis report provided for you cardiac
                        to get insight about your heart problems.
                    </p>
                </motion.div>
            </div>

            <div className='mt-8
            sm:flex sm:gap-4
            md:w-[90%] md:m-auto md:mt-0
            lg:w-[80%] lg:p-8
            '>
                <motion.div className='w-full flex flex-col gap-4 service-gradient-up rounded-2xl px-5 py-8 opacity-0'
                    whileInView={{
                        opacity: 1,
                        y: -30,
                        transition: {
                            type: "spring",
                        }
                    }}
                    viewport={{
                        once: true,
                        amount: 0.8,
                    }}
                >
                    <div className='w-[80px]'>
                        <img className="wobble-hor-bottom" width="60%" src={TrainingIcon} alt="training-icon" />
                    </div>

                    <label className='font-onest font-semibold text-primary-200 text-lg'>Training Support</label>
                    <p className='text-balance text-primary-200 font-inter text-sm'>
                        Pattern recogination workshops and useful resource links
                        to learn and know about ECG.
                    </p>
                </motion.div>

                <motion.div className='w-full flex flex-col gap-4 service-gradient-up rounded-2xl px-5 py-8 opacity-0'
                    whileInView={{
                        opacity: 1,
                        y: -30,
                        transition: {
                            type: "spring",
                        }
                    }}
                    viewport={{
                        once: true,
                        amount: 0.8,
                    }}
                >
                    <div className='w-[80px]'>
                        <img className="heartbeat" width="30%" src={DataIcon} alt="data-icon" />
                    </div>

                    <label className='font-onest font-semibold text-primary-200 text-lg'>Data Management</label>
                    <p className='text-balance text-primary-200 font-inter text-sm'>
                        Secure ECG storage and historical data analysis as well as patient record organization.
                    </p>
                </motion.div>
            </div>

        </section>
    )
}

export default BeyondService