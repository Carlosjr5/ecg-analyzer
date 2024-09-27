from flask import Flask, request, render_template, redirect, url_for, send_from_directory
import os
from ecg_analysis import analyze_ecg

# Initialize Flask App
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Helper function to check file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Route to upload ECG file and view the results
@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # Check if file is part of the request
        if 'file' not in request.files:
            return 'No file part'
        file = request.files['file']
        if file.filename == '':
            return 'No selected file'
        if file and allowed_file(file.filename):
            # Save file to the server
            filename = file.filename
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            # Analyze the ECG image
            analysis_results = analyze_ecg(filepath)

            # Return results to the frontend
            return render_template('results.html', results=analysis_results, image=filename)
    return render_template('index.html')

# Route to serve the uploaded files
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Run the app
if __name__ == '__main__':
    # Create upload directory if not exists
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
