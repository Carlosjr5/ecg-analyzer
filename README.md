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

#### Summary
These libraries collectively support tasks like data processing, visualization, model evaluation, and building advanced deep learning models.


## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm or yarn
- Git

## ⚙️ Installation

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

## 📧 Web Page

Project Link: [ECG Analyzer](https://github.com/yourusername/ecg-analyzer)
