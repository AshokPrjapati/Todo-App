// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing the "dotenv" library to load environment variables from a .env file
require("dotenv").config();

// Setting the "strictQuery" option to false. This allows Mongoose to handle undefined fields in queries without throwing an error.
mongoose.set('strictQuery', false);

// Establishing a connection to the MongoDB database
const connection = mongoose.connect(process.env.DB_URL);

// Exporting the Mongoose connection object
module.exports = connection;
