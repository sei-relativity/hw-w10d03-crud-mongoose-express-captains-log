/****************************
 * Set up and Configuration *
 ****************************/
// Require NPM Packages
const express = require("express");
const mongoose = require("mongoose");
// cross-origin needs to be added

// Require routes files
const log = require("./app/routes/log_routes");

// Require DB configuration file
const db = require("./config/db");

// Assign value to the Port
const port = 5000;

// Create Express App
const app = express();

// Establish DB connection
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true  },
  () => {
    console.log("Connected to MongoDB");
  }
);

/**************
 * Middleware *
 **************/
// Add bodyparser middleware
app.use(express.json());

/**********
 * Routes *
 **********/
app.use(log);

// Run API on designated port
// app.listen(port, console.log(`Server started on port ${port}`));
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
