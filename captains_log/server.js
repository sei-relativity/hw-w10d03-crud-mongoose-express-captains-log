// Require NPM Packages
const express = require('express');
const mongoose = require('mongoose');
// Require routes files
const logRoutes = require('./routes/logs_routes')
//Require db configuration file
const db = require('./config/db')
// PORT
const port = 5000;
// Create Express App
const app = express();

//establish db connection
mongoose.connect(db, 
{useNewUrlParser: true}, ()=> {
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