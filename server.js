// Require NPM Packages
const express = require('express');
const mongoose = require('mongoose')

// Require routes files
const logRoutes = require('./app/routes/log_route')


// require  DB configration file
const db = require('./config/db')
// PORT
const port = 3000;


// Create Express App
const app = express();


/*** Middleware ***/
// Add bodyParser middleware
app.use(express.json())


// establish DB connection
mongoose.connect(db, {useNewUrlParser: true}, ()=> {
    console.log("Connected to MongoDB")
});


/*** Routes ***/
app.use(logRoutes);


// Run API on designated port
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});