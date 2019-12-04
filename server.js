const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import Schema for logs
const logRoutes = require("./routes/log_routes");
// import the db config file
const db = require("./congif/db");
// PORT
const PORT = 5051;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to MongoDB");
  }
);

// Middleware
app.use(express.json());

app.use(logRoutes);

app.listen(PORT, () => {
  console.log(`App is listening at port  ${PORT}`);
});
