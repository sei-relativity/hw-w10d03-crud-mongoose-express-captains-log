"use strict";

const mongooseBaseName = "express-mongoose-crud-app";

const database = {
  development: `mongodb://localhost:27017/${mongooseBaseName}-development`,
  test: `mongodb://localhost:27017/${mongooseBaseName}-test`
};

// identify if current environment is test or development
const localDB = process.env.TESTENV ? database.test : database.development;

// Check if the environment variable MONGODB_URI is available
const currentDB = process.env.MONGO_URI || localDB;

module.exports = currentDB;
