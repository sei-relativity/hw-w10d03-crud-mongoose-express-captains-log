'use strict';
const mongooseBaseName = "captian-log";
const database = {
    development: `mongodb:localhost:27017/${mongooseBaseName}-development`,
    test: `mongodb:localhost:27017/${mongooseBaseName}-test`
};

const localDB = process.env.TESTENV? database.test : database.development

// check if environment variable MONGODB_URI is avaliable

const currentDB = process.env.MONGODB_URI || localDB;

module.exports = currentDB;