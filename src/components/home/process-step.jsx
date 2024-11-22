import { motion } from 'framer-motion'
import React from 'react'

// Components
import StepNumber from './step-number'

const ProcessStep = ({ num, title, content }) => {

    const style = `border-2 border-primary-200 p-8 rounded-xl flex flex-col w-full gap-8 opacity-0 sm:w-2/3 sm:m-auto ${num === "1" && 'md:w-1/3 md:m-0'} ${num === "2" && 'md:w-1/3 md:m-auto'} ${num === "3" && 'md:w-1/3 md:m-0 md:ml-auto'}`

    return (
        <motion.div className={style}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: -40,
                transition: {
                    type: "spring",
                }
            }}
            viewport={{
                amount: 0.9,
            }}
        >
            <StepNumber num={num} />
            <label className='font-onest font-medium text-md flex flex-col gap-2'>
                <p className='text-secondary font-inter font-medium uppercase text-lg'>{title}</p>
                <p className='text-balance text-sm'>
                    {content}
                </p>
            </label>
        </motion.div>
    )
}

export default ProcessStep