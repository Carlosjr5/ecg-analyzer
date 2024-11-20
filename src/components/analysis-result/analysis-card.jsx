import React from 'react'
import { motion } from 'framer-motion'

// Components
import AnalysisRedSmallECG from './analysis-red-small-ecg'

// Images, SVG
import StatusNormalIcon from "../../images/status-normal-icon.svg"
import StatusAbnormalIcon from "../../images/status-abnormal-icon.svg"
import StatusWarningIcon from "../../images/status-warning-icon.svg"
import HeartIcon from "../../images/heart-icon.svg"
import SmallRedEcg from "../../images/small-red-ecg-background.png"
import ClickIcon from "../../images/click-icon.svg"
import DateIcon from "../../images/date-icon.svg"

const AnalysisCard = ({ status, heartRate, arrhythmia, date }) => {

    const statusIcon = { 'normal': StatusNormalIcon, 'abnormal': StatusAbnormalIcon, 'warning': StatusWarningIcon }
    const statusBgStyle = `w-full px-3 py-2 rounded-xl flex justify-start gap-2
                           ${status === "normal" && "bg-green-accent"}
                           ${status === "abnormal" && "bg-pink-accent"}
                           ${status === "warning" && "bg-yellow-accent"}
                           `
    const statusLabelStyle = `text-green-accent-dark text-base capitalize sm:text-base 
                              ${status === "normal" && "text-green-accent-dark"}
                              ${status === "abnormal" && "text-pink-accent-dark"}
                              ${status === "warning" && "text-yellow-accent-dark"}
                             `

    return (
        <div className='w-fit m-auto sm:w-[50%] md:w-[40%] md:m-0 lg:w-[30%]'>
            <div className='border border-[#3B6875] shadow-lg rounded-2xl p-3 relative h-fit'>
                <div className='flex flex-col gap-4 justify-between items-center md:flex-row md:p-1'>
                    <div className={statusBgStyle}>
                        <div className='pt-1'>
                            <img width="12px" src={statusIcon[status]} alt="status-con" />
                        </div>

                        <div>
                            <div className='flex flex-col'>
                                <label className='text-[12px] font-onest font-semibold text-green-accent-dark'>Overall Status</label>
                                <label className={statusLabelStyle}>
                                    {status}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex gap-2 justify-start items-center md:justify-end'>
                        <div className='pt-1'>
                            <motion.img
                                animate={{ opacity: [1, 1, 0.3, 1] }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                                src={HeartIcon} alt="heart-icon" />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-[12px] font-onest font-semibold text-primary-200'>Heart Rate</label>
                            <label className='text-primary-200 text-sm '>
                                {heartRate} BPM
                            </label>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img className="m-auto" width="80%" src={SmallRedEcg} alt="small-red-ecg" />
                    <AnalysisRedSmallECG />
                </div>


                <div className='flex flex-col justify-center items-center m-auto w-full pb-6'>
                    <label className='font-onest font-semibold text-primary-200 text-sm'>Arrhythmia Detection</label>
                    <p className='font-inter text-primary-200 text-base'>{arrhythmia}</p>
                </div>

                <div className='absolute w-full -bottom-4 text-sm left-0 flex justify-center'>
                    <motion.a className="font-onest font-bold text-primary-200 bg-primary-100 px-8 py-2 rounded-full relative text-base" href="/insight-review" whileHover={{ scale: 0.8, backgroundColor: '#E15A85', color: "#FFFFFF" }}>
                        View My Result
                        <img className="absolute right-3 top-6" src={ClickIcon} alt="click-icon" />
                    </motion.a>
                </div>
            </div >
            <label className='flex justify-center items-center mt-6'>
                <img src={DateIcon} alt="date-icon" />
                <p className='text-sm text-primary-200'>12 Oct 2024</p>
            </label>

        </div >
    )
}

export default AnalysisCard