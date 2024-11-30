import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { AuthContext } from "@/contexts/auth-context";

const UploadEcgButton = ({ style = "none", children }) => {
    const { toast } = useToast();
    const { user } = useContext(AuthContext);

    // Dialog State
    const [isOpen, setIsOpen] = useState(false);

    // File Upload States
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState(null);

    // Upload and Result States
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [result, setResult] = useState(null);

    // Handle File Change
    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
            setError("");
            setSuccess("");
            setResult(null);
        }
    };

    // Handle File Upload
    const handleUpload = async (e) => {
        e.preventDefault();

        if (!user) {
            setError("Please login first before uploading.");
            return;
        }

        if (!file) {
            setError("Please select a file first.");
            return;
        }

        if (!file.name.endsWith(".csv")) {
            setError("Only CSV files are supported.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                setResult(response.data.results);
                setSuccess("File uploaded successfully!");
                toast({
                    variant: "success",
                    title: "Analysis Done",
                    description: "The analysis is successfully completed.",
                });
            } else {
                throw new Error(response.data.message || "Unknown error occurred.");
            }
        } catch (err) {
            setError(err.response?.data?.error || err.message || "Error uploading file.");
            toast({
                variant: "destructive",
                title: "Something went wrong.",
                description: "There was a problem with your request.",
            });
        } finally {
            setLoading(false);
            setIsOpen(false);
        }
    };

    // Style Class for Default Button
    const uploadStyle =
        style === "default"
            ? "transform transition text-[14px] outline-none rounded-lg cursor-pointer font-onest font-bold text-primary-200 bg-primary-100 px-2 py-4 flex justify-center items-center gap-2 heartbeat2 sm:text-[13px] sm:px-3 sm:py-2 md:text-[12px] md:px-3 md:py-3 lg:text-[14px]"
            : null;

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger className={uploadStyle}>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="font-onest text-2xl text-primary-200 mb-4">
                            Patient Information
                        </DialogTitle>
                        <DialogDescription>
                            <form
                                className="flex flex-col gap-4"
                                method="POST"
                                onSubmit={handleUpload}
                            >
                                {/* Patient Info Fields */}
                                <div className="flex flex-col gap-2 lg:flex-row">
                                    <div className="flex flex-col w-full lg:w-2/3">
                                        <label
                                            className="text-lg font-onest text-primary-200 font-bold"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="border-2 border-primary-200 rounded-md p-3"
                                            type="text"
                                            placeholder="James Gun"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-1/3">
                                        <label
                                            className="text-lg font-onest text-primary-200 font-bold"
                                            htmlFor="age"
                                        >
                                            Age
                                        </label>
                                        <input
                                            className="border-2 border-primary-200 rounded-md p-3"
                                            type="number"
                                            placeholder="37"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Symptoms */}
                                <div className="flex flex-col">
                                    <label
                                        className="text-lg font-onest text-primary-200 font-bold"
                                        htmlFor="symptoms"
                                    >
                                        Symptoms
                                    </label>
                                    <input
                                        className="border-2 border-primary-200 rounded-md p-3"
                                        type="text"
                                        placeholder="- Irregular pulse, Shortness of breath, Chest pain or discomfort"
                                        required
                                    />
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label
                                        className="text-lg font-onest text-primary-200 font-bold"
                                        htmlFor="file-upload"
                                    >
                                        ECG Data (CSV Format)
                                    </label>
                                    <div className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
                                        <div className="grid gap-1">
                                            <svg
                                                className="mx-auto"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 40 40"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="File">
                                                    {/* Icon Path */}
                                                </g>
                                            </svg>
                                            <span className="text-center text-gray-400 text-xs leading-4">
                                                {filename ? filename : "CSV format only, smaller than 15MB"}
                                            </span>
                                        </div>
                                        <div className="grid gap-2">
                                            <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
                                                Drag and Drop your file here or
                                            </h4>
                                            {error && (
                                                <span className="text-center text-red-500 font-bold font-inter">
                                                    {error}
                                                </span>
                                            )}
                                            <div className="flex items-center justify-center">
                                                <label>
                                                    <input
                                                        type="file"
                                                        accept=".csv"
                                                        onChange={handleFileChange}
                                                        hidden
                                                    />
                                                    <div className="flex w-28 h-9 px-2 flex-col bg-primary-200 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                                                        Choose File
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Upload Button */}
                                {loading ? (
                                    <button
                                        className="bg-slate-300 font-onest font-bold text-white rounded-md py-4 text-sm md:text-lg flex justify-center items-center gap-2"
                                        disabled
                                    >
                                        Processing...
                                    </button>
                                ) : (
                                    <motion.button
                                        className="bg-my-secondary font-onest font-bold text-white rounded-md py-4 text-sm md:text-lg"
                                        type="submit"
                                        whileHover={{ scale: 0.8 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        ANALYZE NOW
                                    </motion.button>
                                )}
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            {/* Results */}
            {result && (
                <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-green-800">Analysis Results:</h3>
                  {/*   <p className="text-sm mt-2">MIT-BIH Results:</p>*/}
                  {/*  <p className="text-sm">Diagnosis: {result.mitbih_result.diagnosis}</p>*/}
                  {/*   <p className="text-sm mt-4">PTB Results:</p>*/}
                    <strong className="text-sm">Diagnosis: {result.ptb_result.diagnosis}</strong>
                </div>
            )}
        </>
    );
};

export default UploadEcgButton;