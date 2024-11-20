import React from 'react'

// Images,SVG
import uploadEcgIcon from "../../images/upload-ecg-icon.svg";


const UploadEcgButton = ({ handleImageValidation }) => {
    return (
        <label
            htmlFor="upload-image"
            className="transform transition hover:-translate-y-2 text-[14px] outline-none rounded-lg cursor-pointer font-onest font-bold text-primary-200 bg-primary-100 px-2 py-4 flex justify-center items-center gap-2 heartbeat2 
            sm:text-[13px] sm:px-3 sm:py-2 
            md:text-[12px] md:px-3 md:py-3
            lg:text-[14px]"
        >
            <img src={uploadEcgIcon} alt="upload-ecg-svg" />
            UPLOAD ECG PHOTO
            <input type="file" id="upload-image" accept='image/*' onChange={handleImageValidation} className="hidden" />
        </label>

    )
}

export default UploadEcgButton