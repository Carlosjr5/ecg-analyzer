import React, { useState } from "react";
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
import AnalysisRedSmallECG from "@/components/analysis-result/analysis-red-small-ecg";

// Sample Status Icons
import StatusNormalIcon from "@/images/status-normal-icon.svg";
import StatusAbnormalIcon from "@/images/status-abnormal-icon.svg";
import HeartIcon from "@/images/heart-icon.svg";
import SmallRedEcg from "@/images/small-red-ecg-background.png";
import AnalysisCard from "@/components/analysis-result/analysis-card";


const AnalysisResult = () => {
    const [history, setHistory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);

    const statusIcon = {
        normal: StatusNormalIcon,
        abnormal: StatusAbnormalIcon,
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
            setError("");
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setFilename(droppedFile.name);
            setError("");
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            setError("Please select or drop a file first.");
            return;
        }

        if (!file.name.endsWith(".csv")) {
            setError("Only CSV files are supported.");
            return;
        }

        if (!name || !age || !symptoms) {
            setError("Please fill out all fields (Name, Age, Symptoms).");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setUploading(true);
        setError("");

        try {
            const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.success) {
                const ptbResult = response.data.results.ptb_result;

                const analysisData = {
                    id: new Date().getTime(),
                    name,
                    age,
                    symptoms,
                    status: ptbResult.diagnosis.toLowerCase().includes("abnormal")
                        ? "abnormal"
                        : "normal",
                    arrhythmia: ptbResult.diagnosis,
                    heartRate: "104", // Example BPM value
                    date: new Date().toLocaleDateString(),
                };

                setHistory((prev) => [...prev, analysisData]);
                setIsOpen(false);
                setFile(null);
                setName("");
                setAge("");
                setSymptoms("");
            } else {
                throw new Error(response.data.message || "Unknown error occurred.");
            }
        } catch (err) {
            setError(err.response?.data?.error || err.message || "Error uploading file.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <section className="w-[85%] m-auto mt-[10rem] flex flex-col gap-12">
            <h1 className="text-xl text-primary-200 font-onest font-bold sm:text-4xl md:text-3xl text-center">
                My Analysis Results
            </h1>

            {/* Modal Trigger */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <motion.div
                        className="w-[300px] h-[100px] flex items-center justify-center border border-primary-200 rounded-lg text-primary-200 cursor-pointer hover:bg-primary-200/10 transition-all m-auto"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                    >
                        <p className="font-semibold text-center">Upload ECG Data</p>
                    </motion.div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="font-onest text-2xl text-primary-200 mb-4">
                            Patient Information
                        </DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleUpload} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4 lg:flex-row">
                                    <div className="flex flex-col w-full lg:w-2/3">
                                        <label className="text-lg font-onest text-primary-200 font-bold">
                                            Name
                                        </label>
                                        <input
                                            className="border-2 border-primary-200 rounded-md p-3"
                                            type="text"
                                            placeholder="James Gun"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-1/3">
                                        <label className="text-lg font-onest text-primary-200 font-bold">
                                            Age
                                        </label>
                                        <input
                                            className="border-2 border-primary-200 rounded-md p-3"
                                            type="number"
                                            placeholder="37"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-lg font-onest text-primary-200 font-bold">
                                        Symptoms
                                    </label>
                                    <input
                                        className="border-2 border-primary-200 rounded-md p-3"
                                        type="text"
                                        placeholder="- Irregular pulse, Shortness of breath, Chest pain or discomfort"
                                        value={symptoms}
                                        onChange={(e) => setSymptoms(e.target.value)}
                                        required
                                    />
                                </div>

                                <div
                                    className="flex flex-col items-center justify-center w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 border-dashed"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        type="file"
                                        accept=".csv"
                                        onChange={handleFileChange}
                                        hidden
                                        id="file-upload"
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="w-full h-12 max-w-[300px] flex items-center justify-center bg-primary-200/10 text-primary-200 border border-primary-200 rounded-md text-sm font-semibold cursor-pointer hover:bg-primary-200/20"
                                    >
                                        {filename || "Drag & Drop or Choose File"}
                                    </label>
                                </div>

                                {error && <p className="text-red-500">{error}</p>}

                                <div className="flex justify-between">
                                    <button
                                        className="bg-gray-300 text-black rounded-md px-4 py-2"
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-primary-200 text-white rounded-md px-4 py-2"
                                        disabled={uploading}
                                        type="submit"
                                    >
                                        {uploading ? "Uploading..." : "Analyze"}
                                    </button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* <AnalysisCard status="normal" heartRate="104" arrhythmia="No Arrhythmia Detection" date="20" /> */}

                {history.map((item) => (
                    <motion.div
                        key={item.id}
                        className="border border-[#3B6875] shadow-lg rounded-2xl p-3 relative h-fit"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex gap-4 justify-between items-center md:flex-row md:p-1">
                            <div className={`flex flex-col p-3 items-center gap-2 rounded-xl w-full ${item.status === "abnormal" ? "bg-pink-accent" : "bg-green-accent"}`}>
                                <p className="text-sm ">Diagonsis</p>
                                <div className="flex gap-2 items-center">
                                    <img src={statusIcon[item.status]} alt="status-icon" className="w-4 h-4" />
                                    <p className="font-regular text-primary-200 text-sm capitalize">{item.status}</p>
                                </div>

                            </div>
                        </div>
                        <div className="relative">
                            <img
                                className="m-auto"
                                width="80%"
                                src={SmallRedEcg}
                                alt="small-red-ecg"
                            />
                            <AnalysisRedSmallECG />
                        </div>
                        <div className="flex flex-col m-auto w-full pb-6">
                            <label className="font-onest font-semibold text-primary-200 text-lg">
                                Patient Information
                            </label>
                            <div>
                                <p className="font-inter">Name: {item.name}</p>
                                <p className="font-inter">Age: {item.age}</p>
                                <p className="font-inter">Symptoms: {item.symptoms}</p>
                            </div>
                            {/* <p className="font-inter text-primary-200 text-base">{item.arrhythmia}</p> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AnalysisResult;

