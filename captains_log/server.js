// Require NPM Packages
const express = require('express');
const mongoose = require('mongoose');
// Require routes files
const logRoutes = require('./routes/log_routes')
// PORT
const port = 5000;
// Create Express App
const app = express();
// Establish DB connection
mongoose.connect("mongodb://localhost:27017/log-development", { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB")
});
/*** Middleware ***/
// Add bodyParser middleware
app.use(express.json())
/*** Routes ***/
app.use(logRoutes);
// Run API on designated port
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});