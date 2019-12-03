//require Mongoose 
const mongoose = require('mongoose');

// create Schema
const foodSchema = new mongoose.Schema({
  meal: {type: String , required: true},
  mainDish: {type: String , required: true},
  foodFinish: {type: Boolean , default: false}
},{timestamps: true});

//save the schema to a model
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;