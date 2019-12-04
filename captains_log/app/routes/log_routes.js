// Require NPM Package
const express = require("express");
// Pull in m=Mongoose Model for Log
const Log = require("../models/log");
// Instantiate a router (mini app that only handle routes)
const router = express.Router();
/**
 * Action:         INDEX
 * Method:         GET
 * URI:            /logs
 * Description: Get all Logs
 */
router.get("/logs", (req, res) => {
  Log.find({}, (error, logs) => {
    // Return all logs
    if (!error) {
      res.status(200).json({ logs: logs });
    } else {
      // if there area any errors
      res.status(500).json({ error: error });
    }
  });
});

/**
 * Action:      SEED
 * Method:      Get
 * URI:         /logs/seed
 * Description: seed data to the database
 */
router.get("/logs/seed", (req, res) => {
  Log.insertMany(
    [
      {
        title: "helloo",
        entry: "boom",
        shipIsBroken: true
      },
      {
        title: "space",
        entry: "man",
        shipIsBroken: false
      },
      {
        title: "green",
        entry: "order",
        shipIsBroken: true
      }
    ],
    (error, logs) => {
      if (!error) {
        res.status(200).json({ logs: logs });
      } else {
        res.status(500).json({ error: error });
      }
    }
  );
});

/*
 * Action:       CREATE
 * Method:       POST
 * URI:          /loges
 * Description:  create new Log
 */
router.post("/logs", (req, res) => {
  Log.create(req.body, (error, log) => {
    if (!error) {
      res.status(201).json({ log: log });
    } else {
      res.status(500).json({ error: error });
    }
  });
});

/**
 * Action:      SHOW
 * Method:      Get
 * URI:         /logs/:id
 * Description: Get one log by id
 */
router.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, log) => {
    if (!error) {
      //  return log if exist
      if (log) {
        res.status(200).json({ log: log });
      } else {
        //  if there is no log with a matching id
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "the provided id doesn't match any document"
          }
        });
      }
    } else {
      res.status(500).json({ error: error });
    }
  });
});

/**
 * Action:         UPDATE
 * Method:         PATCH
 * URI:            /logs/:id
 * Description: Update log by id
 */
router.patch("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, log) => {
    if (!error) {
      if (log) {
        log.update(req.body, (error, log) => {
          if (!error) {
            res.status(204).end();
          } else {
            res.status(500).json({ error: error });
          }
        });
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

/**
 * Action:         DESTROY
 * Method:         DELETE
 * URI:            /logs/:id
 * Description: destroy log by id
 */
router.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    if (err) {
      console.log(err);
    }
    res.json(deletedLog);
  });
});

module.exports = router;
