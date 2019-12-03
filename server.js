//Require NPM Packages
const express = require('express');
const mongoose = require('mongoose');

//Require routes file
const logRoutes = require('./app/routes/log_routes');
const foodRoutes = require('./app/routes/foodlogs_routes');

//Require DB configratioin file
const db= require('./config/db');

// PORT
const port = 5000;

//create Express App
const app = express();


//Establish DB connection
mongoose.connect(db, {useNewUrlParser: true}, ()=> {
    console.log("Connected to MongoDB")
});

/****Middleware****/
//add body Parser middleware
//meaning to make all data in JSON
app.use(express.json());

/***Routes***/
app.use(logRoutes);
app.use(foodRoutes);


// Run API on designated Port
app.listen(port, ()=>{
  console.log(`App is listening at port ${port}`)
});
