//require Mongoose 
const mongoose = require('mongoose');

// create Schema
const logSchema = new mongoose.Schema({
  title: {type: String , required: true},
  entry: {type: String , required: true},
  shipIsBroken: {type: Boolean , default: false}
},{timestamps: true});

//save the schema to a model
const Log = mongoose.model('Log', logSchema);

module.exports = Log;