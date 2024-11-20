import React from 'react'
import AppLogo from '../images/app-logo.svg'
import EmailIcon from '../images/email-icon.svg'
import PhoneIcon from '../images/phone-icon.svg'
import LegalIcon from '../images/footer-legal-disclaimer-icon.svg'

const Footer = () => {
    return (
        <>
            <footer className='bg-primary-100 p-5 pt-10 flex flex-col gap-10 items-start mt-[4rem]
            md:flex-row
            lg:p-10'>
                <a href="/">
                    <img className="w-20" width="100px" src={AppLogo} alt="app-logo" />
                </a>
                <ul className='font-onest flex gap-4 text-sm font-semibold text-primary-200
                md:flex-col
                '>
                    <li className='hover:text-secondary transition-colors ease-out'>
                        <a href="/">HOME</a>
                    </li>
                    <li className='hover:text-secondary transition-colors ease-out'>
                        <a href="/about">ABOUT</a>
                    </li>
                    <li className='hover:text-secondary transition-colors ease-out'>
                        <a href="/contact">CONTACT</a>
                    </li>
                    <li className='hover:text-secondary transition-colors ease-out'>
                        <a href="/analysis-result">ANALYSIS</a>
                    </li>
                </ul>

                <div className='w-full flex flex-col gap-8 lg:flex-row'>
                    <div className='flex flex-col gap-5'>

                        <div className='flex gap-4 items-start'>
                            <img className="pt-1" width="20px" src={EmailIcon} alt="email-icon" />
                            <div className='w-full'>
                                <label className='text-lg font-medium font-onest flex gap-2 text-primary-200'>
                                    Email
                                </label>
                                <p className='text-sm'>
                                    Reach out to our support team via email at <strong><u>support@ecganalysisapp.com.</u></strong> We typically respond within 24-48 hours.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 items-start'>
                            <img className="pt-1" width="20px" src={PhoneIcon} alt="phone-icon" />
                            <div>
                                <label className='text-lg font-medium font-onest flex gap-2 text-primary-200'>
                                    Phone
                                </label>
                                <p className='text-sm'>
                                    Call us at <strong><u>+1-800-123-4567.</u></strong>Our phone lines are open from 9 AM to 6 PM (EST), Monday through Friday.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className='lg:w-2/3'>
                        <div className='flex gap-4 items-start'>
                            <img className="pt-1" width="24px" src={LegalIcon} alt="legal-icon" />
                            <div>
                                <label className='text-lg font-medium font-onest flex gap-2 text-primary-200'>
                                    Legal Disclaimer
                                </label>
                                <p className='text-sm text-balance'>
                                    The content, analysis, and information provided by this ECG analysis web application are intended for informational and educational purposes only. This platform is not a substitute for professional medical advice, diagnosis, or treatment.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>

            <div className='p-5 flex flex-col justify-between bg-primary-100 gap-1 text-center md:flex-row md:text-left'>
                <p className='text-sm'><strong className='text-secondary'>© ECG Analysis Platform</strong>, All Right Reserved, 2024.</p>
                <p className='text-sm'>Designed By <strong className='text-secondary'>Group-04</strong></p>
            </div>
        </>

    )
}

export default Footer