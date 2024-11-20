import React, { useState } from 'react'

// Images,SVG
import cameraEcgIcon from "../../images/camera-ecg-icon.svg";



const CaptureEcgButton = ({ handleImageValidation }) => {

    return (
        <label
            htmlFor="capture-image"
            className="hover:bg-primary-100 transform transition hover:-translate-y-2 text-[14px] outline-none rounded w-max cursor-pointer font-onest font-bold  text-primary-200 px-2 py-4 border-dashed border-2 border-primary-200 flex justify-center items-center gap-2 
            sm:text-[13px] sm:px-3 sm:py-2 
            md:text-[12px] md:px-3 md:py-3
            lg:text-[15px]"
        >
            <img src={cameraEcgIcon} alt="camera-ecg-svg" />
            CAPTURE ECG PHOTO
            <input type="file" id="capture-image" accept='image/*' onChange={handleImageValidation} className="hidden" capture />
        </label>

    )
}

export default CaptureEcgButton