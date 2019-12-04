const express = require("express");

const Log = require("../models/log");

const router = express.Router();

router.get("/logs", (req, res) => {
  Log.find({}, (err, logs) => {
    if (!err) {
      res.status(200).json({ logs: logs });
    } else {
      res.status(500).json({
        error: err
      });
    }
  });
});

router.get("/logs/:id", (req, res) => {
  const logID = req.params.id;
  Log.findById(logID, (error, log) => {
    if (!error) {
      if (log) {
        res.status(200).json({ log: log });
      } else {
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided id doesn't match any document"
          }
        });
      }
    } else {
      res.status(500).json({ error: error });
    }
  });
});

router.post("/logs", (req, res) => {
  Log.create(req.body, (error, log) => {
    if (!error) {
      res.status(201).json({ log });
    } else {
      res.status(500).json({ error: error });
    }
  });
});

router.put("/logs/:id", (req, res) => {
  const logID = req.params.id;
  const updatedLog = req.body;

  Log.findOneAndUpdate({ _id: logID }, updatedLog, (error, log) => {
    if (!error) {
      res.status(200).end();
    } else {
      res.status(500).json({ error: error });
    }
  });
});

router.delete("/logs/:id", (req, res) => {
  const logID = req.params.id;

  Log.findByIdAndDelete(logID, (error, log) => {
    if (!error) {
      res.status(200).json({
        deletedLog: log
      });
    } else {
      res.status(500).json({
        error: error
      });
    }
  });
});

module.exports = router;
