'use strict';

const mongooseBaseName = "express-mongoose-crud-app";

// Create the MongoDB URI for develpment and test
const database = {
  development: `mongodb://localhost:27017/${mongooseBaseName}-development`,
  test: `mongodb://localhost:27017/${mongooseBaseName}-test`
}

// Identify if current environment is test or development
const localDB = process.env.TESTENV ? database.test : database.development;


// check if Environment variable MONGODB_URO is available

const currentDB = process.env.MONGODB_URI || localDB;

module.exports = currentDB;