# ECG Analyzer Web Application

A web-based ECG analysis tool built with Python, Flask, React and Vite, designed to analyze and visualize ECG data.

## 🚀 Features

- Interactive data analysis
- User-friendly interface
- Comprehensive report generation
- Multi-language support

## 🎨 Technologies Used in Front-End

- React 18
- Vite
- Tailwind CSS
- Chart.js
- React Router DOM
- Axios

## 🛠️ Technologies Used in Back-End

The following libraries and technologies were utilized in the project:

#### Python Libraries
1. **pandas**
   - Used for data manipulation and analysis.
2. **numpy**
   - Utilized for numerical computations and array operations.
3. **matplotlib**
   - For creating static, interactive, and animated visualizations.
4. **seaborn**
   - Built on top of matplotlib for statistical data visualization.

#### Machine Learning & Data Preprocessing
5. **sklearn (scikit-learn)**
   - Modules used:
     - `classification_report`, `confusion_matrix`: For evaluating classification models.
     - `compute_class_weight`: To handle imbalanced datasets.
     - `StandardScaler`: For standardizing features by removing the mean and scaling to unit variance.

#### Deep Learning Framework
6. **Keras** (TensorFlow backend)
   - Modules and functionalities:
     - `Model`: For building and training deep learning models.
     - Layers:
       - `Dense`: Fully connected layers.
       - `Convolution1D`: For 1D convolutional layers.
       - `MaxPool1D`: For pooling operations in 1D data.
       - `Flatten`: To flatten the input.
       - `Input`: For input specification.
       - `BatchNormalization`: To normalize the activations.
       - `Dropout`: For regularization to prevent overfitting.
     - Callbacks:
       - `EarlyStopping`: To stop training when performance stops improving.
       - `ModelCheckpoint`: To save the model with the best performance.
       - `ReduceLROnPlateau`: To reduce learning rate when the metric has stopped improving.
     - `to_categorical`: For one-hot encoding of labels.

7. **Flask**
   - A micro web framework used to create the server for handling requests and responses.
   - Provides endpoints for model inference and data handling.

8. **Flask-CORS**
   - Used to enable Cross-Origin Resource Sharing (CORS) for the Flask application, allowing it to interact with front-end applications hosted on different domains.

9. **Keras**
    - Utilized for loading pre-trained models for deep learning tasks.

10. **pandas**
    - Provides functionalities for data manipulation and analysis.

11. **numpy**
    - Supports numerical computations and array operations.

12. **scikit-learn**
    - Modules used:
      - `StandardScaler`: For standardizing numerical features to improve model performance.

13. **os**
    - Used for interacting with the operating system for file handling and path manipulations.


### Summary
These technologies are collectively used to:
- These libraries collectively support tasks like data processing, visualization, model evaluation, and building advanced deep learning models.
- Build and deploy a Flask-based API for handling machine learning model predictions.
- Preprocess input data using pandas, numpy, and scikit-learn.
- Load pre-trained models using Keras and joblib.
- Ensure compatibility with front-end applications using Flask-CORS.
- Use of open-source dataset for training and evaluation of the CNN(Convolutional Neural Network) model.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm or yarn
- Git

## ⚙️ Installation in 10 steps!

1. Clone the repository
```bash
git clone https://github.com/Carlosjr5/ecg-analyzer.git
```

2. Navigate to the project directory
```bash
cd ecg-analyzer
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Build for production
```bash
npm run build
# or
yarn build
```

6. Start Virtual Environment. (The first line 'bash' usually only for Windows OS, need git Bash "https://git-scm.com/downloads")
```bash
bash
python3 -m venv ECGenv
source ./ECGenv/bin/activate

```

7. Go to the backEnd directory and install the libraries needed.
```bash
cd backEnd
pip install pandas 
pip install numpy 
pip install matplotlib 
pip install scikit-learn 
pip install keras 
pip install seaborn 
pip install tensorflow 
pip install flask 
pip install flask_cors
```

8. In the same directory 'backEnd' Train model.
```bash
python train.py
```

9. Finally, run flask application.
```bash
python app.py
```

10. Go on the development server link & Analyze your patients ECG!

## 🚀 Usage

1. Upload your ECG data file
2. Select analysis parameters
3. View the results and generate reports
4. Export or save your analysis

## 📝 License

This project is licensed under the MIT License

## 👥 Authors

- Minn.
- Carlos.
- Mohanad.
- Ahmed.
- Chirag.


## Dataset Reference

The dataset used for this project is sourced from Kaggle. Specifically, it is related to ECG arrhythmia classification using CNN models. You can find more details and access the dataset at the following link:

[Arrhythmia on ECG - Classification Using CNN](https://www.kaggle.com/code/gregoiredc/arrhythmia-on-ecg-classification-using-cnn)

Make sure to download the `mitbih_train.csv`, `mitbih_test.csv`, `ptdbd_abnormal.csv` and ` ptdbd_normal.csv`   files and place them in the appropriate directory (e.g., `backEnd/`) before running the application.

## Disclaimer

This system is currently under development and is intended for educational purposes only. It should not be used in production or for real-world diagnostic applications.

## CNN Model Results 

### MIT-BIH Accuracy
![MIT-BIH_Accuracy.png](backEnd%2Fresults%2Fmit-bih_accuracy.png)
### PTB Accuracy
![PTB_Accuracy.png](backEnd%2Fresults%2FPTB_Accuracy.png)

### Confusion Matrix & Training History
![confusion_matrix_MIT-BIH.png](backEnd%2Fresults%2Fconfusion_matrix_MIT-BIH.png)
![Training History_PTB.png](backEnd%2Fresults%2Fconfusion_matrix_PTB.png)
![training_history_MIT-BIH.png](backEnd%2Fresults%2Ftraining_history_MIT-BIH.png)
![training_history_PTB.png](backEnd%2Fresults%2Ftraining_history_PTB.png)
