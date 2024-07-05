const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory ,must have uploads dictionary when use
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage });



// Serve the HTML form for file upload
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res, next) => {
  if (!req.file) {
    return next(new Error('No file uploaded.'));
  }

  // Access the uploaded file information
  const uploadedFile = req.file;
  console.log('Uploaded file:', uploadedFile);

  res.send('File '+uploadedFile.originalname+' uploaded!');
});

// Serve uploaded files using express.static middleware
app.use('/file', express.static('uploads'));

// Catch-all middleware for handling undefined routes/endpoints
app.all("*", (req, res, next) => {
    // Create a new Error object with a descriptive message and status
    const err = new Error(`Cannot find the URL ${req.originalUrl} in this application. Please check.`);

    // Set custom status and statusCode properties for the error
    err.status = "Endpoint Failure";
    err.statusCode = 404;

    // Pass the error to the next middleware to trigger error handling
    next(err);
});

// Error handling middleware for Express
app.use((err, req, res, next) => {
    // Set default status code and status message if not provided in the error object
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Error";

    // Log the error stack to the console for debugging purposes
    console.log(err.stack);

    // Respond to the client with a JSON object containing error details
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});