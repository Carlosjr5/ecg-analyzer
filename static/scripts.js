document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file');
    const uploadButton = document.querySelector('button[type="submit"]');

    // Add an event listener for the file upload
    fileInput.addEventListener('change', function () {
        const fileName = fileInput.value.split('\\').pop();
        if (fileName) {
            uploadButton.disabled = false;  // Enable the upload button when a file is selected
        } else {
            uploadButton.disabled = true;   // Disable the button if no file is selected
        }
    });

    // Additional features can be added, like image preview or advanced validation checks
    console.log('ECG Analyzer script is loaded successfully.');
});
