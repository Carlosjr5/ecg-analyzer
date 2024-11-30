from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import os
import joblib

# Initialize Flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Enable CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:5176"}})

# Load models Arrytmia
mitbih_model = load_model('best_model_mitbih.keras')
ptb_model = load_model('best_model_ptb.keras')

# Preload scaler based on training set distribution
global_scaler = StandardScaler()
# Assuming training data is available
train_data = pd.read_csv('mitbih_train.csv', header=None).iloc[:, :-1].values
global_scaler.fit(train_data)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'csv'


def preprocess_data(X, expected_features=187):
    try:
        # Log original input shape for debugging
        print(f"Original input shape: {X.shape}")

        # Adjust feature size dynamically
        if X.shape[1] > expected_features:
            print(f"Input has {X.shape[1]} features, trimming to {expected_features} features.")
            X = X[:, :expected_features]  # Trim to expected feature size
        elif X.shape[1] < expected_features:
            print(f"Input has {X.shape[1]} features, padding to {expected_features} features.")
            padding = np.zeros((X.shape[0], expected_features - X.shape[1]))
            X = np.hstack((X, padding))  # Pad with zeros to match expected size

        # Scale the data
        X_scaled = global_scaler.transform(X)

        # Add channel dimension for compatibility with the model
        return X_scaled[..., np.newaxis]
    except Exception as e:
        raise ValueError(f"Error in preprocessing data: {e}")

def diagnose_ecg(file_path, model, class_names):
    try:
        # Read the uploaded file
        data = pd.read_csv(file_path, header=None)

        # Log the shape for debugging
        print(f"Uploaded data shape: {data.shape}")

        # Preprocess the input data
        X = preprocess_data(data.values)

        # Log the processed shape for debugging
        print(f"Processed input shape: {X.shape}")

        # Make predictions
        predictions = model.predict(X)
        predicted_classes = np.argmax(predictions, axis=-1)

        # Map class indices to labels
        predicted_labels = [class_names[i] for i in predicted_classes]

        # Count predictions
        normal_count = np.sum(predicted_classes == 0)  # Assuming class 0 is "Normal"
        abnormal_count = len(predicted_classes) - normal_count

        # Debugging output
        print(f"Normal count: {normal_count}, Abnormal count: {abnormal_count}")
        print(f"Predicted labels sample: {predicted_labels[:10]}")  # Sample for debugging

        # Determine diagnosis
        diagnosis = "Arrhythmia - Abnormal Condition Detected" if abnormal_count > normal_count else "Normal Condition"
        print(f"Diagnosis: {diagnosis}")

        # Return structured results
        return {
            "normal_count": int(normal_count),
            "abnormal_count": int(abnormal_count),
            "predicted_labels": predicted_labels,  # Optional: Include detailed predictions
            "diagnosis": diagnosis
        }
    except Exception as e:
        print(f"Error in diagnose_ecg: {e}")
        return {"error": str(e)}



@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"success": False, "message": "No file provided"}), 400

    file = request.files['file']
    if file.filename == '' or not allowed_file(file.filename):
        return jsonify({"success": False, "message": "Invalid file type"}), 400

    try:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        # Diagnose using both models
        mitbih_result = diagnose_ecg(file_path, mitbih_model, ['Normal', 'S', 'V', 'F', 'Q'])
        ptb_result = diagnose_ecg(file_path, ptb_model, ['Normal', 'Abnormal'])

        print("MIT-BIH Results:", mitbih_result)  # Debugging
        print("PTB Results:", ptb_result)         # Debugging

        return jsonify({
            "success": True,
            "results": {
                "mitbih_result": mitbih_result,
                "ptb_result": ptb_result
            }
        }), 200

    except Exception as e:
        print(f"Error in upload_file: {e}")  # Debugging
        return jsonify({"success": False, "message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
