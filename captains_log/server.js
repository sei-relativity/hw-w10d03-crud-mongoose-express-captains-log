// Require NPM Package
const express = require("express");
const mongoose = require("mongoose");
// Require routes files
const logRoutes = require("./app/routes/log_routes");
// Require DB configration file
const db = require("./config/db");
// PORT
const port = 5000;
// Create Express App
const app = express();
// Establish DB connection
console.log(db);
mongoose.connect(
  `mongodb://localhost:27017/captains_log`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
// mongoose.connect(db, { userNameUrlParser: true }, () => {
//     mongoose.connection('open', () => {
//         console.log("Conected to MongoDB");
//     })
// });
/****   Middleware   ****/
// Add bodyParser middlewarw
app.use(express.json());
/*** Routes ***/
app.use(logRoutes);
// Run API on designated port
app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
