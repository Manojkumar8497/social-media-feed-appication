const mongoose = require('mongoose');

// Configuring the mongoURI
const config = require('config');
const db = config.get('mongoURI');
const dbName = config.get('mongoDBName');

// Configuring the DB connection
const connectDB = async () => {
    try {
        await mongoose.connect(`${db}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected.')
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;