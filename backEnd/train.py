import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.utils.class_weight import compute_class_weight
from sklearn.preprocessing import StandardScaler
from keras.models import Model
from keras.layers import Dense, Convolution1D, MaxPool1D, Flatten, Input, BatchNormalization, Dropout
from keras.callbacks import EarlyStopping, ModelCheckpoint, ReduceLROnPlateau
from keras.utils import to_categorical
import seaborn as sns
from scipy.signal import butter, filtfilt

# Band-pass filter for noise reduction
def bandpass_filter(signal, lowcut, highcut, fs=125, order=4):
    """
    Applies a band-pass filter to the signal to remove noise.
    Keeps frequencies between `lowcut` and `highcut`.
    """
    nyquist = 0.5 * fs  # Nyquist frequency is half the sampling rate
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')  # Create filter coefficients
    return filtfilt(b, a, signal, axis=0)  # Apply the filter

# Preprocess data
def preprocess_data(X, fs=125):
    """
    Preprocesses the input data by:
    1. Applying band-pass filtering to remove noise.
    2. Standardizing features for zero mean and unit variance.
    3. Adding a channel dimension for CNN compatibility.
    """
    # Apply noise reduction
    X_filtered = np.apply_along_axis(bandpass_filter, axis=1, arr=X, lowcut=0.5, highcut=50, fs=fs)
    # Standardize the data
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X_filtered)
    return X_scaled[..., np.newaxis]  # Add channel dimension

# Build CNN model
def build_cnn(input_shape, num_classes):
    """
    Builds a 1D Convolutional Neural Network for ECG classification.
    Consists of convolutional layers, max-pooling, batch normalization, and dense layers.
    """
    inputs = Input(shape=input_shape, name="input_layer")
    x = Convolution1D(64, kernel_size=7, activation='relu', padding="same")(inputs)
    x = BatchNormalization()(x)  # Normalize intermediate feature maps
    x = MaxPool1D(pool_size=2, strides=2, padding="same")(x)  # Downsample features
    x = Convolution1D(128, kernel_size=5, activation='relu', padding="same")(x)
    x = BatchNormalization()(x)
    x = MaxPool1D(pool_size=2, strides=2, padding="same")(x)
    x = Convolution1D(256, kernel_size=3, activation='relu', padding="same")(x)
    x = BatchNormalization()(x)
    x = MaxPool1D(pool_size=2, strides=2, padding="same")(x)
    x = Flatten()(x)  # Flatten feature maps into a single vector
    x = Dense(128, activation='relu')(x)
    x = Dropout(0.4)(x)  # Dropout for regularization
    x = Dense(64, activation='relu')(x)
    x = Dropout(0.3)(x)
    outputs = Dense(num_classes, activation='softmax')(x)  # Output layer for classification
    model = Model(inputs, outputs)
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])  # Compile the model
    return model

# Plot training history
def plot_training_history(history, dataset_name):
    """
    Plots the training and validation accuracy over epochs.
    """
    plt.figure(figsize=(12, 6))
    plt.plot(history.history['accuracy'], label='Train Accuracy')
    plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
    plt.xlabel('Epochs')
    plt.ylabel('Accuracy')
    plt.legend()
    plt.title(f'Training and Validation Accuracy for {dataset_name}')
    plt.savefig(f"training_history_{dataset_name}.png")

# Plot confusion matrix
def plot_confusion_matrix(cm, classes, dataset_name):
    """
    Plots the confusion matrix using seaborn heatmap.
    """
    plt.figure(figsize=(10, 7))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=classes, yticklabels=classes)
    plt.xlabel('Predicted Labels')
    plt.ylabel('True Labels')
    plt.title(f'Confusion Matrix for {dataset_name}')
    plt.savefig(f"confusion_matrix_{dataset_name}.png")

# Evaluate the model
def evaluate_model(model, X, y_true, class_names, dataset_name):
    """
    Evaluates the trained model and prints performance metrics including confusion matrix and accuracy.
    """
    y_pred_probs = model.predict(X)
    y_pred = np.argmax(y_pred_probs, axis=-1)  # Predicted class labels
    y_true = np.argmax(y_true, axis=-1)  # True class labels

    # Count normal and abnormal predictions
    normal_count = np.sum(y_pred == 0)
    abnormal_count = len(y_pred) - normal_count

    print(f"\nEvaluation Results for {dataset_name}:")
    print(f"Number of Normal ECG signals: {normal_count}")
    print(f"Number of Abnormal ECG signals: {abnormal_count}")
    print(classification_report(y_true, y_pred, target_names=class_names))  # Detailed classification report

    cm = confusion_matrix(y_true, y_pred)  # Confusion matrix
    plot_confusion_matrix(cm, class_names, dataset_name)

    accuracy = np.mean(y_pred == y_true)  # Calculate accuracy
    print(f"Accuracy for {dataset_name}: {accuracy * 100:.2f}%")

# Main script
def train_and_evaluate():
    """
    Main function to train and evaluate the CNN model on two datasets: MIT-BIH and PTB.
    """
    # MIT-BIH Dataset
    mitbih_train = pd.read_csv('mitbih_train.csv', header=None)  # Load training data
    mitbih_test = pd.read_csv('mitbih_test.csv', header=None)  # Load testing data

    # Split data into features (X) and labels (y)
    X_train_mitbih = mitbih_train.iloc[:, :-1].values
    y_train_mitbih = mitbih_train.iloc[:, -1].values
    X_test_mitbih = mitbih_test.iloc[:, :-1].values
    y_test_mitbih = mitbih_test.iloc[:, -1].values

    # Preprocess data
    X_train_mitbih = preprocess_data(X_train_mitbih)
    X_test_mitbih = preprocess_data(X_test_mitbih)
    y_train_mitbih = to_categorical(y_train_mitbih, num_classes=5)  # One-hot encode labels
    y_test_mitbih = to_categorical(y_test_mitbih, num_classes=5)

    # Compute class weights to handle imbalanced classes
    class_weights_mitbih = compute_class_weight('balanced', classes=np.unique(np.argmax(y_train_mitbih, axis=-1)), y=np.argmax(y_train_mitbih, axis=-1))
    class_weights_mitbih = dict(enumerate(class_weights_mitbih))

    # Build and train the model
    mitbih_model = build_cnn(X_train_mitbih.shape[1:], num_classes=5)
    mitbih_callbacks = [
        EarlyStopping(monitor='val_loss', patience=5),  # Stop early if no improvement
        ModelCheckpoint(filepath='best_model_mitbih.keras', save_best_only=True, monitor='val_loss'),  # Save the best model
        ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3)  # Adjust learning rate on plateau
    ]

    # Train the model
    history_mitbih = mitbih_model.fit(
        X_train_mitbih, y_train_mitbih,
        validation_data=(X_test_mitbih, y_test_mitbih),
        epochs=50, batch_size=64,
        class_weight=class_weights_mitbih,
        callbacks=mitbih_callbacks
    )

    # Plot and evaluate results
    plot_training_history(history_mitbih, "MIT-BIH")
    evaluate_model(mitbih_model, X_test_mitbih, y_test_mitbih, class_names=['Normal', 'S', 'V', 'F', 'Q'], dataset_name='MIT-BIH')

    # PTB Dataset
    ptbdb_abnormal = pd.read_csv('ptbdb_abnormal.csv', header=None)  # Load abnormal data
    ptbdb_normal = pd.read_csv('ptbdb_normal.csv', header=None)  # Load normal data

    # Combine data and split into features and labels
    ptbdb_data = pd.concat([ptbdb_abnormal, ptbdb_normal])
    X_ptb = ptbdb_data.iloc[:, :-1].values
    y_ptb = ptbdb_data.iloc[:, -1].values

    # Preprocess data
    X_ptb = preprocess_data(X_ptb)
    y_ptb = to_categorical(y_ptb, num_classes=2)

    # Compute class weights for the PTB dataset
    class_weights_ptb = compute_class_weight('balanced', classes=np.unique(np.argmax(y_ptb, axis=-1)), y=np.argmax(y_ptb, axis=-1))
    class_weights_ptb = dict(enumerate(class_weights_ptb))

    # Build and train the PTB model
    ptb_model = build_cnn(X_ptb.shape[1:], num_classes=2)
    ptb_callbacks = [
        EarlyStopping(monitor='val_loss', patience=5),
        ModelCheckpoint(filepath='best_model_ptb.keras', save_best_only=True, monitor='val_loss'),
        ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3)
    ]

    # Train the model
    history_ptb = ptb_model.fit(
        X_ptb, y_ptb,
        validation_split=0.2,
        epochs=50, batch_size=64,
        class_weight=class_weights_ptb,
        callbacks=ptb_callbacks
    )

    # Plot and evaluate results
    plot_training_history(history_ptb, "PTB")
    evaluate_model(ptb_model, X_ptb, y_ptb, class_names=['Normal', 'Abnormal'], dataset_name='PTB')

if __name__ == "__main__":
    train_and_evaluate()
