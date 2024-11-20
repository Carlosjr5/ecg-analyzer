import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

// Components
import AnalysisCard from '../components/analysis-result/analysis-card'

// Images, SVG
import NewAnalysisIcon from "../images/new-analysis-icon.svg"

import DashedLine from "../images/dashed-line.svg"

const AnalysisResult = () => {
    return (
        <section className='w-[85%] m-auto mt-[10rem] flex flex-col gap-12'>
            <h1 className='text-xl text-primary-200 font-onest font-bold 
            sm:text-4xl
            md:text-3xl
            '>My Analysis Results</h1>

            <motion.div
                animate={{ scale: [1, 0.9, 1] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className='w-fit m-auto md:m-0 border-primary-200 hover:scale-90 transition-all transform ease-in-out relative
                
                    '>
                <label htmlFor="uploadFile1" className="cursor-pointer">
                    <img className="w-[24rem] md:w-[20rem] lg:w-[24rem] md:h-full" src={DashedLine} alt="dashed-line" />
                    <div className='absolute m-auto top-0 bottom-0 w-full h-[10rem] flex flex-col justify-center items-center gap-2'>
                        <img className="w-[3rem]" src={NewAnalysisIcon} alt="new-analysis-icon" />
                        <h2 className='font-onest font-bold text-sm text-primary-200 sm:text-base md:text-lg'>Make New Analysis</h2>
                    </div>
                    <input type="file" id='uploadFile1' accept='image/*' className="hidden" />
                </label>
            </motion.div>
            <div className='w-full m-auto flex flex-col gap-8 md:flex-row md:flex-wrap'>

                <AnalysisCard status="normal" heartRate="104" arrhythmia="No Arrhythmia Detection" date="20" />
                <AnalysisCard status="normal" heartRate="104" arrhythmia="No Arrhythmia Detection" date="20" />
                <AnalysisCard status="normal" heartRate="104" arrhythmia="No Arrhythmia Detection" date="20" />
                <AnalysisCard status="normal" heartRate="104" arrhythmia="No Arrhythmia Detection" date="20" />

            </div>
        </section>
    )
}

export default AnalysisResult