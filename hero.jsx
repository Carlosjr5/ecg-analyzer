import React, { useState } from "react";

// Components
import RedSmallEcgSVG from "../home/red-small-ecg";
import UploadEcgButton from "../home/upload-ecg-button";
import CaptureEcgButton from "../home/capture-ecg-button";

// Images,SVG
import heroImage from "../../images/hero-image.png";
import ecgBackground from "../../images/ecg-background.jpg";

const Hero = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState('');

    const handleImageValidation = (event) => {
        const file = event.target.files[0];
        const validImageTypes = ['image/jpeg', 'image/png'];

        // Validate the file type
        if (file && validImageTypes.includes(file.type)) {
            setSelectedImage(URL.createObjectURL(file));
            setError('');
        } else {
            setError('Please upload a valid image file (JPEG, PNG).');
            setSelectedImage(null);
        }
    };

    return (
        <section className="hero-section bg-slae-400 flex flex-col justify-center items-center lg:h-screen
        sm:flex-col sm:h-full
        md:flex-row
        ">
            <div className="w-full h-full flex flex-col gap-6 justify-center relative
            sm:w-full
            ">
                <img className="absolute" src={ecgBackground} alt="ecg-background" />
                <h1 className="text-balance text-3xl text-center text-primary-200 font-onest font-bold leading-tight z-10 relative  
                sm:text-4xl sm:text-center
                md:text-left md:text-5xl
                lg:text-5xl
                ">
                    Welcome to ECG Analysis
                    Platform.
                </h1>
                <p className="text-balance w-full m-auto text-center text-sm z-10 font-inter font-light leading-relaxed relative 
                sm:text-center sm:w-2/3 sm:m-auto
                md:text-base md:text-full md:w-full md:text-left
                lg:w-2/3 lg:m-0">
                    Transform your ECG data into valuable
                    insights with our cutting-edge analysis tools.
                    <RedSmallEcgSVG />
                </p>
                <div className="flex flex-col gap-4 z-10 justify-center w-fit m-auto
                md:flex-row md:m-0
                ">
                    <UploadEcgButton handleImageValidation={handleImageValidation} />
                    <CaptureEcgButton handleImageValidation={handleImageValidation} />
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold text-[13px]">{error}</strong>
                    </div>
                )}

            </div>
            <div className="w-full
            sm:w-2/3
            ">
                <img className="lg:w-full" src={heroImage} alt="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
