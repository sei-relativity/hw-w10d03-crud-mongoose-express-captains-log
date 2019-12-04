/**************************
 * Database Configuration *
 **************************/
"use strict";

const mongooseBaseName = "captains_log";

// Create the MongoDB URI for development and test
const database = {
  development: `mongodb://localhost:27017/${mongooseBaseName}-development`,
  test       : `mongodb://localhost:27017/${mongooseBaseName}-test`
};

// Identify if current environment is test or development
const localDB = process.env.TESTENV ? database.test : database.development;

// Check if the Environment variable MONGODB_URI is available
const currentDB = process.env.MONGODB_URI || localDB;

module.exports = currentDB;