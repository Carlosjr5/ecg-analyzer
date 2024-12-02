
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import find_peaks, butter, filtfilt


# Preprocess the ECG signal
def preprocess_ecg(signal, fs=360):
    nyquist = fs / 2.0
    low = 0.5 / nyquist
    high = 45 / nyquist  # Broadened bandpass range
    b, a = butter(2, [low, high], btype='band')  # 2nd-order filter
    filtered_signal = filtfilt(b, a, signal)
    return filtered_signal


# Detect R-peaks
def detect_r_peaks(signal, fs=360):
    distance = int(0.4 * fs)  # Reduced minimum distance (0.4 seconds)
    peaks, properties = find_peaks(signal, distance=distance, height=np.mean(signal) * 0.3)  # Lower threshold
    print(f"Detected {len(peaks)} peaks at indices: {peaks}")
    return peaks, properties


# Calculate heart rate
def calculate_heart_rate(r_peaks, fs=360):
    if len(r_peaks) < 2:
        print("Not enough peaks detected. Unable to calculate heart rate.")
        return None
    rr_intervals = np.diff(r_peaks) / fs
    heart_rate = 60 / np.mean(rr_intervals)
    return heart_rate


# Add noise to the signal
def add_noise(signal, noise_level=0.1, baseline_wander=False, fs=360):
    noisy_signal = signal + noise_level * np.random.randn(len(signal))  # Add Gaussian noise
    if baseline_wander:
        t = np.linspace(0, len(signal) / fs, len(signal))
        wander = 0.1 * np.sin(2 * np.pi * 0.1 * t)  # Simulate low-frequency baseline wander
        noisy_signal += wander
    return noisy_signal


# Plot ECG with R-peaks
def plot_ecg_with_bpm(ecg_signal, r_peaks, heart_rate, fs=360, output_path="ecg_waveform_with_bpm_abnormal.png"):
    time = np.arange(len(ecg_signal)) / fs

    plt.figure(figsize=(15, 5))
    plt.plot(time, ecg_signal, label="Filtered ECG Signal", color="blue", linewidth=1)
    if len(r_peaks) > 0:
        plt.plot(r_peaks / fs, ecg_signal[r_peaks], "ro", label="R-peaks")
    if heart_rate:
        plt.title(f"ECG Signal with R-Peak Detection\nEstimated Heart Rate: {heart_rate:.2f} BPM")
    else:
        plt.title("ECG Signal with R-Peak Detection\nUnable to Estimate Heart Rate")
    plt.xlabel("Time (s)")
    plt.ylabel("Amplitude")
    plt.legend()
    plt.grid()
    plt.tight_layout()
    plt.savefig(output_path, dpi=300)
    plt.savefig("ecg_waveform_with_bpm_abnormal.png")
    print(f"Plot saved as {output_path}")


# Main function
if __name__ == "__main__":
    # Load ECG data
    data_path = "ptbdb_normal.csv"  # Replace with your file
    data = pd.read_csv(data_path, header=None)

    # Select the first ECG signal (excluding label column)
    ecg_signal = data.iloc[0, :-1].values
    fs = 125  # Replace with actual sampling frequency

    # Add noise to the signal
    noisy_signal = add_noise(ecg_signal, noise_level=0.2, baseline_wander=True, fs=fs)

    # Debug: Plot raw vs noisy signals
    plt.figure(figsize=(15, 5))
    plt.plot(ecg_signal, label="Original Signal", alpha=0.6)
    plt.plot(noisy_signal, label="Noisy Signal", color="orange")
    plt.title("Original vs Noisy ECG Signal")
    plt.xlabel("Sample Index")
    plt.ylabel("Amplitude")
    plt.legend()
    plt.grid()

    # Preprocess noisy ECG
    filtered_signal = preprocess_ecg(noisy_signal, fs)

    # Debug: Plot noisy vs filtered signals
    plt.figure(figsize=(15, 5))
    plt.plot(noisy_signal, label="Noisy Signal", alpha=0.6)
    plt.plot(filtered_signal, label="Filtered Signal", color="green")
    plt.title("Noisy vs Filtered ECG Signal")
    plt.xlabel("Sample Index")
    plt.ylabel("Amplitude")
    plt.legend()
    plt.grid()

    # Detect R-peaks
    r_peaks, _ = detect_r_peaks(filtered_signal, fs)

    # Calculate Heart Rate
    heart_rate = calculate_heart_rate(r_peaks, fs)
    if heart_rate:
        print(f"Estimated Heart Rate: {heart_rate:.2f} BPM")
    else:
        print("Unable to calculate heart rate due to insufficient peaks.")

    # Plot ECG with BPM
    plot_ecg_with_bpm(filtered_signal, r_peaks, heart_rate, fs)