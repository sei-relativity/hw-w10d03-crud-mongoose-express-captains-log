'use strict';
const mongooseBaseName = "express-mongoose-crud-app";
// Create the MongoDB URI for development and test
const database = { 
    development: `mongodb://localhost:27017/
    ${mongooseBaseName}-development`,
    test : `mongodb://localhost/${mongooseBaseName}-test`
}
// Identify if current environment is test or development
const localDB = process.env.TESTENV ? database.test : database.development; // like if else if TESTENV true so database.test  if it false database.development
// Check if Environment variable MONGODB_URI is  available
const currentDB = process.env.MONGODB_URI || localDB;
module.exports = currentDB;