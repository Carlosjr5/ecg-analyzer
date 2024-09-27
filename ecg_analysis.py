import cv2
import numpy as np
from scipy.signal import find_peaks


def analyze_ecg(image_path):
    # Load the image
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

    # Pre-process the image (denoising, binarization)
    processed_img = cv2.GaussianBlur(image, (5, 5), 0)
    _, binary_image = cv2.threshold(processed_img, 127, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find peaks using signal processing (e.g., find_peaks from scipy)
    signal = np.sum(binary_image, axis=0)  # Summing along rows to get the signal
    peaks, _ = find_peaks(signal, distance=50, height=0.6 * np.max(signal))  # Adaptive threshold

    num_peaks = len(peaks)

    if num_peaks > 1:
        rr_intervals = np.diff(peaks)
        avg_rr_interval = np.mean(rr_intervals) / 100
        heart_rate = int(60 / avg_rr_interval)

        is_normal_heart_rate = (55 <= heart_rate <= 85) or (60 <= heart_rate <= 100)

        if is_normal_heart_rate:
            rhythm = "Rhythm seems regular"
        else:
            # Calculate the standard deviation of RR intervals
            std_rr_intervals = np.std(rr_intervals)

            # Calculate the average magnitude of peaks
            avg_peak_magnitude = np.mean(np.abs(signal[peaks]))

            # If there are many peaks with similar magnitude, it may indicate a regular rhythm
            num_peaks_with_similar_magnitude = len(
                [peak for peak in peaks if abs(signal[peak] - avg_peak_magnitude) < 10])
            if num_peaks_with_similar_magnitude > 0.5 * num_peaks:
                rhythm = "Rhythm seems regular"
            else:
                # If there are many peaks with different magnitude, it may indicate an irregular rhythm
                if std_rr_intervals > 50 or len(peaks) < 20:
                    rhythm = "Irregular rhythm detected"
                elif (np.max(rr_intervals) - np.min(rr_intervals)) / np.mean(rr_intervals) > 0.5:
                    rhythm = "Irregular rhythm detected"
                else:
                    rhythm = "Unknown rhythm"

        analysis = [
            f"Number of detected peaks: {num_peaks}",
            f"Estimated heart rate: {heart_rate} beats per minute",
            rhythm
        ]

    else:
        analysis = [
            "Not enough data to determine heart rate and rhythm"
        ]

    return analysis