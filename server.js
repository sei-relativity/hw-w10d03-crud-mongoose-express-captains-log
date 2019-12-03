const express = require('express')
const mongoose = require('mongoose')
const logRoutes = require('./config/routes/log_routes')

// Create Express App
const app = express();

// Set PORT
const port = 3000

app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})
const mongooseBaseName = "captains-log"
mongoose.connect(`mongodb://localhost:27017/${mongooseBaseName}-development`, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB")
});


/**** Middleware ****/
// Add bodyParser middleware to convert it to json
app.use(express.json())

/***** ROUTES *****/
app.use(logRoutes)