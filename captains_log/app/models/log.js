/****************************
 * Set up and Configuration *
 ****************************/
// Require NPM Packages
const mongoose = require("mongoose");

// Schema
const logSchema = new mongoose.Schema(
  {
    title       : String,
    entry       : String,
    shipIsBroken: { type: Boolean, default: true }
  },
  { timestamps: true }
);

// Compile Model for the Schema
const Log = mongoose.model("Log", logSchema);

// IMPORTANT: export the model so it can be accessible
module.exports = Log;
