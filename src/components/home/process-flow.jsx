import { motion } from 'framer-motion'
import React from 'react'

// Components
import ProcessStep from './process-step'

const ProcessFlow = () => {
    return (
        <section className='mt-[4rem] flex flex-col gap-2 justify-center'>
            <div className='flex flex-col gap-3'>
                <label className='text-my-secondary font-medium font-inter text-[11px] flex flex-col items-center'>
                    PROCESS FLOW
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L2 2" stroke="#E15A85" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </label>
                <h1 className='text-primary-200 font-onest font-bold text-3xl text-center
                sm:text-4xl
                md:text-5xl
                '>From Signals to Solutions</h1>

                <section className='flex flex-col gap-8 mt-20 p-4'>
                    <ProcessStep num="1" title="Capture" content="Capture your rhythm with your phone or upload ECG image." />
                    <ProcessStep num="2" title="Analyze" content="Advanced algorithms analyze each beat, delivering precise pattern detection." />
                    <ProcessStep num="3" title="Review" content="Our detailed reports make understanding results straightforward." />
                </section>

            </div>
        </section >
    )
}

export default ProcessFlow