/****************************************************************
 * #	Action 	URL      	 HTTP Verb	mongoose method             *
 * 1	Index  	/logs    	 GET      	Log.find({})                *
 * 2	Show   	/logs/:id	 GET      	Log.findById(req.params.id) *
 * 3	Create 	/logs    	 POST     	Log.create(req.body)        *
 * 4	Update 	/logs/:id	 PUT      	Log.findByIdAndUpdate()     *
 * 5	Destroy	/logs    	 DELETE   	Log.findByIdAndRemove()     *
 ****************************************************************/

/****************************
 * Set up and Configuration *
 ****************************/
// Require NPM Packages
const express = require("express");

// Pull in Mongoose model for Log to use it for data processes
const Log = require("../models/log");

// Initiate a router (mini app that only handle routes)
const router = express.Router();

/*****************************
 * Action     : INDEX        *
 * Method     : GET          *
 * URI        : /logs        *
 * Description: Get all logs *
 *****************************/
router.get("/logs", (request, response) => {
  Log.find({}, (error, logs) => {
    // Return all logs
    if (!error) {
      response.status(200).json({ logs });
    } else {
      // If there are any errors
      response.status(500).json({ error });
    }
  });
});

/***********************************
 * Action     : SHOW               *
 * Method     : GET                *
 * URI        : /logs/:id          *
 * Description: Get one log by _id *
 ***********************************/
router.get("/logs/:id", (request, response) => {
  const id = request.params.id;
  Log.findById(id, (error, log) => {
    // server failure case
    if (!error) {
      // Return log if exist or error if there is no log with a matching _id
      if (log) {
        response.status(200).json({ log });
      } else {
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided id doesn't match any document"
          }
        });
      }
    } else {
      response.status(500).json({ error });
    }
  });
});

/*********************************
 * Action     : CREATE           *
 * Method     : POST             *
 * URI        : /logs          *
 * Description: Create new log *
 *********************************/
router.post("/logs", (request, response) => {
  const createdLog = request.body;
  Log.create(createdLog, (error, log) => {
    if (!error) {
      response.status(201).json({ log });
    } else {
      response.status(500).json({ error });
    }
  });
});

/**************************************
 * Action     : UPDATE                *
 * Method     : PATCH                 *
 * URI        : /logs/:id             *
 * Description: Update one log by _id *
 **************************************/
router.patch("/logs/:id", (request, response) => {
  const id         = request.params.id;
  const updatedLog = request.body;

  Log.findByIdAndUpdate(id, updatedLog, (error, log) => {
    if (!error) {
      if (log) {
        response.status(204).json({ log });
      } else {
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided id doesn't match any document"
          }
        });
      }
    } else {
      response.status(500).json({ error });
    }
  });
});

/**************************************
 * Action     : DESTROY               *
 * Method     : DELETE                *
 * URI        : /logs/:id             *
 * Description: Delete one log by _id *
 **************************************/
router.delete("/logs/:id", (request, response) => {
  const id = request.params.id;

  Log.findByIdAndRemove(id, (error, log) => {
    if (!error) {
      if (log) {
        response.status(204).json({ log });
      } else {
        response.status(404).json({
          error: {
            name   : "DocumentNotFoundError",
            message: "The provided id doesn't match any document"
          }
        });
      }
    } else {
      response.status(500).json({ error });
    }
  });
});

// IMPORTANT: export the router so it can be accessible
module.exports = router;
