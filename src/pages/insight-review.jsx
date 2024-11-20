import React from 'react'
import RedBigECGBackground from "../images/red-ecg-background.svg"
import WaveIcon from "../images/wave.svg"
import { motion } from 'framer-motion'

const InsightReview = () => {
    return (
        <section className='w-[85%] m-auto mt-[10rem] flex flex-col gap-12'>

            <div className='mb-4'>
                <h1 className='text-2xl text-primary-200 font-onest font-bold
                sm:text-3xl
                '>My ECG Insight Review</h1>
            </div>

            <div className='w-full flex flex-col gap-10 md:flex-row'>
                <div className='flex flex-col justify-start w-full md:w-1/2 lg:w-2/3'>
                    <h2 className='text-primary-200 font-onest font-medium text-lg sm:text-xl'>ECG Record</h2>
                    <div className="relative">
                        <img width="100%" src={RedBigECGBackground} alt="full-insight" />
                        <motion.svg className="absolute top-0 bottom-0 left-0 right-0 m-auto w-2/3" viewBox="0 0 817 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                animate={{ pathLength: [0, 1], opacity: [1, 0.8, 0.9, 0] }}
                                transition={{
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                strokeWidth={4}
                                strokeDasharray="0 1"
                                fill="none"
                                d="M2 119.268H50.8476C51.5975 119.268 52.2843 118.849 52.6268 118.181L66.4805 91.1987C67.2728 89.6555 69.5196 89.7837 70.1313 91.407L85.7241 132.788C86.4495 134.713 89.259 134.421 89.5723 132.387L107.479 16.1973C107.83 13.9148 111.129 13.9464 111.437 16.2353L135.312 193.691C135.623 196.004 138.968 196.001 139.276 193.688L150.649 108.28C150.93 106.168 153.878 105.901 154.534 107.928L161.101 128.219C161.751 130.227 164.665 129.99 164.982 127.903L177.677 44.1679C178.008 41.9817 181.118 41.8704 181.605 44.0273L198.166 117.401C198.632 119.466 201.566 119.487 202.062 117.43L211.711 77.3881C212.185 75.4208 214.947 75.3212 215.561 77.2493L225.363 108.004C225.628 108.833 226.398 109.397 227.269 109.397H273H324.282C325.03 109.397 325.716 108.979 326.059 108.314L340.987 79.399C341.774 77.8749 343.988 77.9833 344.622 79.5769L359.851 117.844C360.6 119.725 363.348 119.431 363.682 117.435L381.392 11.5991C381.768 9.34877 385.014 9.38283 385.343 11.6406L409.564 177.723C409.895 179.997 413.174 180.008 413.52 177.735L425.311 100.306C425.624 98.2546 428.469 97.978 429.171 99.9311L435.371 117.185C436.07 119.13 438.901 118.866 439.228 116.824L452.314 35.0389C452.663 32.8533 455.779 32.7705 456.244 34.9344L472.114 108.728C472.563 110.818 475.537 110.84 476.018 108.757L485.945 65.7398C486.395 63.7863 489.12 63.6372 489.782 65.5298L501.521 99.1289C501.807 99.9466 502.586 100.487 503.452 100.469L593.826 98.5252C594.551 98.5097 595.21 98.1031 595.55 97.4627L610.36 69.5351C611.177 67.9949 613.436 68.1643 614.014 69.8091L629.372 113.521C630.061 115.481 632.911 115.222 633.235 113.17L650.435 4.09822C650.792 1.83161 654.063 1.85353 654.39 4.12473L678.051 168.464C678.38 170.746 681.67 170.753 682.009 168.473L693.796 89.1098C694.103 87.0382 696.984 86.7728 697.665 88.7535L703.457 105.602C704.13 107.56 706.97 107.33 707.32 105.289L720.401 28.8436C720.766 26.7118 723.785 26.5957 724.312 28.6931L741.136 95.5869C741.638 97.5835 744.465 97.6104 745.005 95.6238L755.195 58.1415C755.72 56.2096 758.443 56.1623 759.035 58.0748L769.564 92.0914C769.823 92.9289 770.598 93.5 771.475 93.5H815.5" stroke="#EA384E" strokeOpacity="0.8" strokeLinecap="round" />
                        </motion.svg>
                    </div>


                </div>

                {/* Patient Records */}
                <div className='flex flex-col md:w-1/2 lg:w-1/3'>
                    <h2 className='text-primary-200 font-onest font-medium text-lg sm:text-xl'>Patient Record</h2>
                    <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                    </svg>

                    <div className='flex flex-col md:flex-row md:gap-20'>

                        {/* Name, Gender, Records */}
                        <div className='flex flex-col gap-4 p-4'>
                            <span>
                                <label className='font-onest font-semibold text-md text-primary-200'>Name</label>
                                <p className='font-inter text-base text-primary-200'>Dave John</p>
                            </span>

                            <span>
                                <label className='font-onest font-semibold text-md text-primary-200'>Gender</label>
                                <p className='font-inter text-base text-primary-200'>Male</p>
                            </span>

                            <span>
                                <label className='font-onest font-semibold text-md text-primary-200'>Previous Records</label>
                                <p className='font-inter text-base text-primary-200'>Not Found</p>
                            </span>
                        </div>

                        {/* Age, Date */}
                        <div className='flex flex-col gap-4 px-4 md:px-0 md:p-4'>
                            <span>
                                <label className='font-onest font-semibold text-md text-primary-200'>Age</label>
                                <p className='font-inter text-base text-primary-200'>49</p>
                            </span>

                            <span>
                                <label className='font-onest font-semibold text-md text-primary-200'>Analysis Date</label>
                                <p className='font-inter text-base text-primary-200'>20 Oct 2024</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <section className='w-full flex flex-col-reverse gap-10 md:flex-row'>

                {/* Support Documents */}
                <div className='w-full flex flex-col gap-10 md:w-1/2 lg:w-2/3'>
                    {/* Summary Report */}
                    <div>
                        <h3 className='font-onest font-medium text-xl text-primary-200 mb-2'>Summary Report</h3>
                        <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                        </svg>
                        <p className='mt-8 font-inter text-sm text-balance'>
                            The ECG analysis shows normal heart function. No signs of significant abnormalities such as atrial
                            fibrillation, ventricular tachycardia, or ischemic changes were detected. The heart rate and rhythm
                            are within the normal range, and there are no signs of acute myocardial infarction. The user’s heart
                            health is considered to be good based on this analysis.
                        </p>
                    </div>

                    {/* Educational Resources */}
                    <div>
                        <h3 className='font-onest font-medium text-xl text-primary-200 mb-2'>Educational Resources</h3>
                        <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                        </svg>
                        <p className='mt-8 font-inter text-base'>
                            <a href="https://www.nhs.uk/conditions/electrocardiogram/" className='text-primary-200 flex gap-2'>
                                <span className='pt-1'>
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.29335 5.79202C8.72657 5.99886 9.10382 6.30664 9.39342 6.68951C9.68302 7.07238 9.87651 7.51916 9.95764 7.99232C10.0388 8.46548 10.0052 8.9512 9.85963 9.40867C9.71411 9.86614 9.46093 10.282 9.12135 10.6214L6.12135 13.6213C5.55874 14.184 4.79567 14.5 4.00002 14.5C3.20436 14.5 2.4413 14.184 1.87869 13.6213C1.31607 13.0587 1 12.2957 1 11.5C1 10.7044 1.31607 9.9413 1.87869 9.37868L3.05002 8.20735M11.95 7.79268L13.1213 6.62135C13.684 6.05874 14 5.29567 14 4.50002C14 3.70436 13.684 2.9413 13.1213 2.37869C12.5587 1.81607 11.7957 1.5 11 1.5C10.2044 1.5 9.4413 1.81607 8.87868 2.37869L5.87868 5.37868C5.53911 5.71802 5.28593 6.13389 5.14041 6.59137C4.99488 7.04884 4.96127 7.53456 5.0424 8.00772C5.12352 8.48087 5.31701 8.92765 5.60661 9.31053C5.89621 9.6934 6.27347 10.0012 6.70669 10.208" stroke="#3B6875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <label className='flex flex-col gap-2 min-w-0'>
                                    What is an ECG?
                                    <span className='break-words'>https://www.nhs.uk/conditions/electrocardiogram</span>
                                </label>
                            </a>

                        </p>

                        <p className='mt-8 font-inter text-base'>
                            <a href="https://geekymedics.com/how-to-read-an-ecg/" className='text-primary-200 flex gap-2'>
                                <span className='pt-1'>
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.29335 5.79202C8.72657 5.99886 9.10382 6.30664 9.39342 6.68951C9.68302 7.07238 9.87651 7.51916 9.95764 7.99232C10.0388 8.46548 10.0052 8.9512 9.85963 9.40867C9.71411 9.86614 9.46093 10.282 9.12135 10.6214L6.12135 13.6213C5.55874 14.184 4.79567 14.5 4.00002 14.5C3.20436 14.5 2.4413 14.184 1.87869 13.6213C1.31607 13.0587 1 12.2957 1 11.5C1 10.7044 1.31607 9.9413 1.87869 9.37868L3.05002 8.20735M11.95 7.79268L13.1213 6.62135C13.684 6.05874 14 5.29567 14 4.50002C14 3.70436 13.684 2.9413 13.1213 2.37869C12.5587 1.81607 11.7957 1.5 11 1.5C10.2044 1.5 9.4413 1.81607 8.87868 2.37869L5.87868 5.37868C5.53911 5.71802 5.28593 6.13389 5.14041 6.59137C4.99488 7.04884 4.96127 7.53456 5.0424 8.00772C5.12352 8.48087 5.31701 8.92765 5.60661 9.31053C5.89621 9.6934 6.27347 10.0012 6.70669 10.208" stroke="#3B6875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <label className='flex flex-col gap-2'>
                                    How to Read Your ECG Reports?
                                    <span>https://geekymedics.com/how-to-read-an-ecg/</span>
                                </label>

                            </a>

                        </p>

                        <p className='mt-8 font-inter text-base '>
                            <a href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/ecg-test" className='text-primary-200 flex gap-2'>
                                <span className='pt-1'>
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.29335 5.79202C8.72657 5.99886 9.10382 6.30664 9.39342 6.68951C9.68302 7.07238 9.87651 7.51916 9.95764 7.99232C10.0388 8.46548 10.0052 8.9512 9.85963 9.40867C9.71411 9.86614 9.46093 10.282 9.12135 10.6214L6.12135 13.6213C5.55874 14.184 4.79567 14.5 4.00002 14.5C3.20436 14.5 2.4413 14.184 1.87869 13.6213C1.31607 13.0587 1 12.2957 1 11.5C1 10.7044 1.31607 9.9413 1.87869 9.37868L3.05002 8.20735M11.95 7.79268L13.1213 6.62135C13.684 6.05874 14 5.29567 14 4.50002C14 3.70436 13.684 2.9413 13.1213 2.37869C12.5587 1.81607 11.7957 1.5 11 1.5C10.2044 1.5 9.4413 1.81607 8.87868 2.37869L5.87868 5.37868C5.53911 5.71802 5.28593 6.13389 5.14041 6.59137C4.99488 7.04884 4.96127 7.53456 5.0424 8.00772C5.12352 8.48087 5.31701 8.92765 5.60661 9.31053C5.89621 9.6934 6.27347 10.0012 6.70669 10.208" stroke="#3B6875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <label className='flex flex-col gap-2 min-w-0'>
                                    Common Heart Conditions Detected by ECG
                                    <span className='break-words'>https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/ecg-test</span>
                                </label>


                            </a>

                        </p>
                    </div>

                    {/* Medical Disclaimers */}
                    <div>
                        <h3 className='font-onest font-medium text-2xl text-primary-200 mb-2'>Legal Disclaimer</h3>
                        <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                        </svg>
                        <span className='mt-8  block'>
                            <label className='text-primary-200 font-onest font-semibold text-xl'>Medical Information Disclaimer</label>
                            <p className='mt-4 font-inter text-md'>
                                The content and analysis provided by this ECG analysis web application are for informational purposes only and are not a replacement for professional medical advice, diagnosis, or treatment. While we aim for accuracy, the results are algorithm-based and should not be solely relied upon for medical decisions.
                            </p>
                        </span>

                        <span className='mt-8  block'>
                            <label className='text-primary-200 font-onest font-semibold text-xl'>Consult a Healthcare Professional</label>
                            <p className='mt-4 font-inter text-md'>
                                Always seek the advice of a qualified healthcare provider with any questions you may have regarding your heart health, ECG results, or any medical condition. Do not disregard professional medical advice or delay seeking medical treatment based on information provided by this application. In the event of a medical emergency, contact your physician or emergency services immediately.
                            </p>
                        </span>

                    </div>

                </div>

                {/* ECG Info */}
                <div className='w-full md:w-1/2 lg:w-1/3'>

                    {/* Heart Rate and Rhythm */}
                    <span className='flex items-center gap-3 mb-3'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.395 17.9101L9.388 17.9071L9.366 17.8951C9.23729 17.8243 9.10961 17.7516 8.983 17.6771C7.46081 16.7726 6.03827 15.71 4.739 14.5071C2.438 12.3601 0 9.17407 0 5.25007C0 2.32207 2.464 7.09512e-05 5.438 7.09512e-05C6.26475 -0.00397847 7.08178 0.178412 7.82832 0.533676C8.57486 0.888941 9.2317 1.40794 9.75 2.05207C10.2684 1.40781 10.9254 0.888729 11.6721 0.533459C12.4189 0.178188 13.2361 -0.00412905 14.063 7.09512e-05C17.036 7.09512e-05 19.5 2.32207 19.5 5.25007C19.5 9.17507 17.062 12.3611 14.761 14.5061C13.4617 15.709 12.0392 16.7716 10.517 17.6761C10.3904 17.7509 10.2627 17.8239 10.134 17.8951L10.112 17.9071L10.105 17.9111L10.102 17.9121C9.99356 17.9695 9.87271 17.9995 9.75 17.9995C9.62729 17.9995 9.50644 17.9695 9.398 17.9121L9.395 17.9101Z" fill="#F59BA6" />
                        </svg>
                        <label className='font-onest font-semibold text-primary-200 text-lg'>Heart Rate and Rhythm</label>
                    </span>
                    <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                    </svg>
                    <div className='flex p-8 gap-20'>
                        <span>
                            <label className='font-onest text-sm text-primary-200'>Heart Beat</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>84 BPM</p>
                        </span>

                        <span>
                            <label className='font-onest text-sm text-primary-200'>Heart Rhythm</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>Atrial Fibrillation</p>
                        </span>
                    </div>

                    {/* RR Intervals */}
                    <span className='flex items-center gap-3 mb-3'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4V10H14.5M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#3B6875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <label className='font-onest font-semibold text-primary-200 text-lg'>RR Intervals</label>
                    </span>
                    <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                    </svg>
                    <div className='flex p-8 gap-20'>
                        <span>
                            <label className='font-onest text-sm text-primary-200'>RR Interval</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>----</p>
                        </span>

                        <span>
                            <label className='font-onest text-sm text-primary-200'>HRV</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>1.41</p>
                        </span>
                    </div>

                    {/* PQRST */}
                    <span className='flex items-center gap-3 mb-3'>
                        <img src={WaveIcon} alt="wave-icon" />
                        <label className='font-onest font-semibold text-primary-200 text-lg'>PQRST Information</label>
                    </span>
                    <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                    </svg>
                    <div className='flex p-8 gap-[100px]'>
                        <span>
                            <label className='font-onest text-sm text-primary-200'>P-Wave</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>----</p>
                        </span>

                        <span>
                            <label className='font-onest text-sm text-primary-200'>T-wave</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>1.41</p>
                        </span>
                    </div>

                    {/* Arrhythmia Detection */}
                    <span className='flex items-center gap-3 mb-3'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.395 17.9101L9.388 17.9071L9.366 17.8951C9.23729 17.8243 9.10961 17.7516 8.983 17.6771C7.46081 16.7726 6.03827 15.71 4.739 14.5071C2.438 12.3601 0 9.17407 0 5.25007C0 2.32207 2.464 7.09512e-05 5.438 7.09512e-05C6.26475 -0.00397847 7.08178 0.178412 7.82832 0.533676C8.57486 0.888941 9.2317 1.40794 9.75 2.05207C10.2684 1.40781 10.9254 0.888729 11.6721 0.533459C12.4189 0.178188 13.2361 -0.00412905 14.063 7.09512e-05C17.036 7.09512e-05 19.5 2.32207 19.5 5.25007C19.5 9.17507 17.062 12.3611 14.761 14.5061C13.4617 15.709 12.0392 16.7716 10.517 17.6761C10.3904 17.7509 10.2627 17.8239 10.134 17.8951L10.112 17.9071L10.105 17.9111L10.102 17.9121C9.99356 17.9695 9.87271 17.9995 9.75 17.9995C9.62729 17.9995 9.50644 17.9695 9.398 17.9121L9.395 17.9101Z" fill="#F59BA6" />
                        </svg>
                        <label className='font-onest font-semibold text-primary-200 text-lg'>Arrhythmia Detection</label>
                    </span>
                    <svg className='w-fit' viewBox="0 0 446 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H445" stroke="#3B6875" strokeLinecap="round" />
                    </svg>
                    <div className='flex p-8 gap-20'>
                        <span>
                            <label className='font-onest text-sm text-primary-200'>Type of Arrhythmia</label>
                            <p className='font-inter font-regular text-lg text-primary-200'>----</p>
                        </span>
                    </div>


                </div>

            </section>


        </section >
    )
}

export default InsightReview