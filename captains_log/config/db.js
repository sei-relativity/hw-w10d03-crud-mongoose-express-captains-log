'use strict';
const mongooseBaseName = "captains_log";
// createthe MongoDB URI for development and test
const database = {
    development: `mongodb://localhost:27017${mongooseBaseName}-development`,
    test: `mongodb://localhost:27017${mongooseBaseName}-test`
}
//process => func
// identify if current environment is test or development
const localDB = process.env.TESTENV ? database.test : database.development;
// check if environment variable MONGODB_uri is available
const currentDB = process.env.MONGODB_URI || localDB;
module.exports = currentDB;