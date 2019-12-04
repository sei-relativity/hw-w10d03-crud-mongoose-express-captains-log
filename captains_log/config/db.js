'use strict';

const mongooseBaseName = "crud-mongoose-express-captains-log";

const database = { 
    development: `mongodb://localhost:27017/${mongooseBaseName}-development`,
    test : `mongodb://localhost:27017/${mongooseBaseName}-test`
}
const localDB = process.env.TESTENV ? database.test : database.development
const currentDB = process.env.MONGODB_URI || localDB;
module.exports = currentDB;