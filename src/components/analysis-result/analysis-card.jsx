import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import AnalysisRedSmallECG from "./analysis-red-small-ecg";
import { useToast } from "@/hooks/use-toast";
import { AuthContext } from "@/contexts/auth-context";

// Images, SVG
import StatusNormalIcon from "../../images/status-normal-icon.svg";
import StatusAbnormalIcon from "../../images/status-abnormal-icon.svg";
import StatusWarningIcon from "../../images/status-warning-icon.svg";
import HeartIcon from "../../images/heart-icon.svg";
import SmallRedEcg from "../../images/small-red-ecg-background.png";

const AnalysisCard = () => {
    const { toast } = useToast();
    const { user } = useContext(AuthContext);

    const [status, setStatus] = useState("");
    const [arrhythmia, setArrhythmia] = useState("");
    const [heartRate, setHeartRate] = useState("--");
    const [history, setHistory] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const statusIcon = {
        normal: StatusNormalIcon,
        abnormal: StatusAbnormalIcon,
        warning: StatusWarningIcon,
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            setFilename(e.target.files[0].name);
            setError("");
        }
    };

    const handleUpload = async () => {
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

        if (!name || !age || !symptoms) {
            setError("Please fill out all fields (Name, Age, Symptoms).");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
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
                    heartRate: "104",
                    date: new Date().toLocaleDateString(),
                };

                setHistory((prev) => [...prev, analysisData]);

                setStatus(analysisData.status);
                setArrhythmia(analysisData.arrhythmia);
                setHeartRate(analysisData.heartRate);

                toast({
                    variant: "success",
                    title: "Analysis Complete",
                    description: "The ECG analysis was successfully completed.",
                });

                setShowModal(false);
                setFile(null);
                setName("");
                setAge("");
                setSymptoms("");
            } else {
                throw new Error(response.data.message || "Unknown error occurred.");
            }
        } catch (err) {
            setError(err.response?.data?.error || err.message || "Error uploading file.");
            toast({
                variant: "destructive",
                title: "Upload Failed",
                description: "There was an issue with your upload.",
            });
        } finally {
            setLoading(false);
        }
    };

    const statusBgStyle = (status) =>
        `w-full px-3 py-2 rounded-xl flex justify-start gap-2 ${status === "normal" && "bg-green-accent"
        } ${status === "abnormal" && "bg-pink-accent"} ${status === "warning" && "bg-yellow-accent"
        }`;

    const statusLabelStyle = (status) =>
        `text-green-accent-dark text-base capitalize sm:text-base ${status === "normal" && "text-green-accent-dark"
        } ${status === "abnormal" && "text-pink-accent-dark"} ${status === "warning" && "text-yellow-accent-dark"
        }`;

    return (
        <div className="w-full px-4">
            <h2 className="text-2xl font-bold text-primary-200 text-center mb-6">
                My Analysis Results
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                <div
                    className="border-dashed border-2 border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-gray-100"
                    onClick={() => setShowModal(true)}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                        className="text-primary-200 text-3xl font-bold"
                    >
                        +
                    </motion.div>
                    <p className="text-primary-200 font-semibold mt-2">Make a New Analysis</p>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md w-96 shadow-lg">
                        <h3 className="text-lg font-bold mb-4">New Analysis</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Age</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Symptoms</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md p-2"
                                value={symptoms}
                                onChange={(e) => setSymptoms(e.target.value)}
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Upload CSV File</label>
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-300 text-black rounded-md px-4 py-2"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-accent text-white rounded-md px-4 py-2"
                                onClick={handleUpload}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Analyze"}
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default AnalysisCard;
