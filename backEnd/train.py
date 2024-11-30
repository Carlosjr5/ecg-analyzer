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

# Build CNN model
def build_cnn(input_shape, num_classes):
    inputs = Input(shape=input_shape, name="input_layer")
    x = Convolution1D(64, kernel_size=7, activation='relu', padding="same")(inputs)
    x = BatchNormalization()(x)
    x = MaxPool1D(pool_size=2, strides=2, padding="same")(x)
    x = Convolution1D(128, kernel_size=5, activation='relu', padding="same")(x)
    x = BatchNormalization()(x)
    x = MaxPool1D(pool_size=2, strides=2, padding="same")(x)
    x = Convolution1D(256, kernel_size=3, activation='relu', padding="same")(x)
    x = BatchNormalization()(x)
    x = MaxPool1D(pool_size=2, strides=2, padding="same")(x)
    x = Flatten()(x)
    x = Dense(128, activation='relu')(x)
    x = Dropout(0.4)(x)
    x = Dense(64, activation='relu')(x)
    x = Dropout(0.3)(x)
    outputs = Dense(num_classes, activation='softmax')(x)  # Multiclass or binary classification
    model = Model(inputs, outputs)
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model

# Preprocess data
def preprocess_data(X):
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    return X_scaled[..., np.newaxis]  # Add channel dimension

# Plot training history
def plot_training_history(history, dataset_name):
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
    plt.figure(figsize=(10, 7))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=classes, yticklabels=classes)
    plt.xlabel('Predicted Labels')
    plt.ylabel('True Labels')
    plt.title(f'Confusion Matrix for {dataset_name}')
    plt.savefig(f"confusion_matrix_{dataset_name}.png")

# Evaluate the model
def evaluate_model(model, X, y_true, class_names, dataset_name):
    y_pred_probs = model.predict(X)
    y_pred = np.argmax(y_pred_probs, axis=-1)
    y_true = np.argmax(y_true, axis=-1)

    # Count normal and abnormal predictions
    normal_count = np.sum(y_pred == 0)
    abnormal_count = len(y_pred) - normal_count

    print(f"\nEvaluation Results for {dataset_name}:")
    print(f"Number of Normal ECG signals: {normal_count}")
    print(f"Number of Abnormal ECG signals: {abnormal_count}")
    print(classification_report(y_true, y_pred, target_names=class_names))

    cm = confusion_matrix(y_true, y_pred)
    plot_confusion_matrix(cm, class_names, dataset_name)

    accuracy = np.mean(y_pred == y_true)
    print(f"Accuracy for {dataset_name}: {accuracy * 100:.2f}%")

# Main script
def train_and_evaluate():
    # MIT-BIH Dataset
    mitbih_train = pd.read_csv('mitbih_train.csv', header=None)
    mitbih_test = pd.read_csv('mitbih_test.csv', header=None)

    X_train_mitbih = mitbih_train.iloc[:, :-1].values
    y_train_mitbih = mitbih_train.iloc[:, -1].values
    X_test_mitbih = mitbih_test.iloc[:, :-1].values
    y_test_mitbih = mitbih_test.iloc[:, -1].values

    X_train_mitbih = preprocess_data(X_train_mitbih)
    X_test_mitbih = preprocess_data(X_test_mitbih)
    y_train_mitbih = to_categorical(y_train_mitbih, num_classes=5)
    y_test_mitbih = to_categorical(y_test_mitbih, num_classes=5)

    class_weights_mitbih = compute_class_weight('balanced', classes=np.unique(np.argmax(y_train_mitbih, axis=-1)), y=np.argmax(y_train_mitbih, axis=-1))
    class_weights_mitbih = dict(enumerate(class_weights_mitbih))

    mitbih_model = build_cnn(X_train_mitbih.shape[1:], num_classes=5)
    mitbih_callbacks = [
        EarlyStopping(monitor='val_loss', patience=5),
        ModelCheckpoint(filepath='best_model_mitbih.keras', save_best_only=True, monitor='val_loss'),
        ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3)
    ]

    history_mitbih = mitbih_model.fit(
        X_train_mitbih, y_train_mitbih,
        validation_data=(X_test_mitbih, y_test_mitbih),
        epochs=50, batch_size=64,
        class_weight=class_weights_mitbih,
        callbacks=mitbih_callbacks
    )

    plot_training_history(history_mitbih, "MIT-BIH")
    evaluate_model(mitbih_model, X_test_mitbih, y_test_mitbih, class_names=['Normal', 'S', 'V', 'F', 'Q'], dataset_name='MIT-BIH')

    # PTB Dataset
    ptbdb_abnormal = pd.read_csv('ptbdb_abnormal.csv', header=None)
    ptbdb_normal = pd.read_csv('ptbdb_normal.csv', header=None)

    ptbdb_data = pd.concat([ptbdb_abnormal, ptbdb_normal])
    X_ptb = ptbdb_data.iloc[:, :-1].values
    y_ptb = ptbdb_data.iloc[:, -1].values

    X_ptb = preprocess_data(X_ptb)
    y_ptb = to_categorical(y_ptb, num_classes=2)

    class_weights_ptb = compute_class_weight('balanced', classes=np.unique(np.argmax(y_ptb, axis=-1)), y=np.argmax(y_ptb, axis=-1))
    class_weights_ptb = dict(enumerate(class_weights_ptb))

    ptb_model = build_cnn(X_ptb.shape[1:], num_classes=2)
    ptb_callbacks = [
        EarlyStopping(monitor='val_loss', patience=5),
        ModelCheckpoint(filepath='best_model_ptb.keras', save_best_only=True, monitor='val_loss'),
        ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3)
    ]

    history_ptb = ptb_model.fit(
        X_ptb, y_ptb,
        validation_split=0.2,
        epochs=50, batch_size=64,
        class_weight=class_weights_ptb,
        callbacks=ptb_callbacks
    )

    plot_training_history(history_ptb, "PTB")
    evaluate_model(ptb_model, X_ptb, y_ptb, class_names=['Normal', 'Abnormal'], dataset_name='PTB')

if __name__ == "__main__":
    train_and_evaluate()
