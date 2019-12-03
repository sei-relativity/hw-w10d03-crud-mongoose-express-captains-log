// Require NPM Package
const express = require('express');
const mongoose = require('mongoose');
//Require routes files
const logRoutes = require('./app/routes/log_routes');
//Require DB configuration file 
const db = require ('./config/db')
//define port as varibale 
//Port 
const port = 5000;
// Create Express App 
const app = express();
//Establish DB connection 
mongoose.connect(db, {useNewUrlParser: true}, ()=> {
    console.log("Connected to MongoDB")
});
/*Middleware */
// add bodyParser middleware
app.use(express.json())
// // Routes
// app.post('/logs',(req, res)=> {
//     res.json(req.body)
//     });  // move it to log_routes
/***** Routes ****/
app.use(logRoutes);
// RUN API on designated port 
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
});