const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    meal: {type: String, required:true},
    food: {type: String, required:true},
}, {timestamps: true});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;