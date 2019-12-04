// Require NPM Packeges
const express = require('express');
const mongoose = require('mongoose');
//Require routes files
const logRoutes = require('./app/routes/log_routes');
const Log = require('./app/models/Log');
// Require db congif file
const db = require('./config/db');

// port
const port = 3000;

// create express App
const app = express();

//Establish db connection

console.log(db);

mongoose.connect(`mongodb://localhost:27017/captian-log-development`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB")
});


// Middleware
// Add bodyParser middleware
app.use(express.json());

/*** Routes ***/
app.use(logRoutes);

// Run API on designated port
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});


// Log.insertMany([
//     {
//         title: 'grapefruit',
//         entry: 'pink',
//         shipIsBroken: false
//     },
//     {
//         title: 'saud',
//         entry: 'Alshamsi',
//     },
//     {
//         title: 'Moayad',
//         entry: 'Alnuawysir',
//         shipIsBroken: false
//     }
// ], (error, logs) => {
//     if (!error) {
//         console.log(logs);
        
//     } else {
//         console.error();
        
//     }
// });