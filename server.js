const express = require('express')
const mongoose = require('mongoose')

const app = express();

const port = 3000

app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})
const mongooseBaseName = "captains-log"
mongoose.connect(`mongodb://localhost:27017/${mongooseBaseName}-development`, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB")
});