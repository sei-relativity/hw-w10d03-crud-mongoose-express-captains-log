const mongoose = require('mongoose');

//Schema set up
const logSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true }
}, { timestamps: true });

//Compile model for the schema
const Log = mongoose.model('Log', logSchema)

module.exports = Log