
const express = require('express');
const mongoose = require('mongoose');
const logRoutes = require('./routes/logs_routes')
const db = require('./config/db')
const port = 5051;
const app = express();
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log("Connected to MongoDB")});
app.use(express.json())
app.use(logRoutes);
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});