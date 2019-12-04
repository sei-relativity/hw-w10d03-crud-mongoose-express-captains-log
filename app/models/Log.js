const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LogShema = new Schema({
  title: String,
  entry: String,
  shipIsBroken: { type: Boolean, default: true },
}, { timestamps: true });

const Log = mongoose.model('Log', LogShema);
module.exports = Log;