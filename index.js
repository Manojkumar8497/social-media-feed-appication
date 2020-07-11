const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const logger = require('./util/logger');
// DB Connection
const connectDB = require('./config/db');
// routes import
const feedRoutes = require('./routes/feed');

const app = express();

// Middleware
app.use(morgan('dev'));

// For CORS origin
app.use(cors({ origin: '*' }));

// Routes
app.use('/api/v1.0.0', feedRoutes);

// To set the static access to images
app.use('/images', express.static(path.join(__dirname, 'images')));

// To set the static access to client
app.use(express.static(__dirname + '/client/dist/client'));

// For the client connection
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

// Error Handling middleware
app.use((error, req, res, next) => {
    const message = error.message;
    const statusCode = error.statusCode || 500;
    const errLocation = error.location || 'Unidentified path';
    // Store the error in logger file
    logger.error(`${errLocation}: IP - ` + req.connection.remoteAddress + " " + error.message);
    res.status(statusCode).json({ message: message, path: errLocation });
})

// Port config
const port = process.env.PORT || 3000;

app.listen(port, () => {
    // Connect to database
    connectDB();
    console.log(`Server running on the port: ${port}`);
})