// Require necessary NPM Packages
const express = require('express');

// Pull in Mongoose model for Log
const Log = require('../models/log');
// Instantiate a router (mini app that only handle routes)
const router = express.Router();

/** 
 * Action:         INDEX
 * Method:         GET
 * URI:            /logs
 * Description: Get all Logs
*/
router.get('/logs', (req, res) => {
    Log.find({}, (error, logs) => {
        // Return all logs 
        if (!error) {
            res.status(200).json({ logs: logs });
        } else {
            // if there area any errors
            res.status(500).json({ error: error })
        }
    });
});


/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /logs
 * Description: Create new Log
*/
router.post('/logs', (req, res) => {
    Log.create(req.body, (error, log) => {
        if (!error) {
            res.status(201).json({ log })
        } 
        else {
            res.status(500).json({ error: error })
        }
    })
});


/** 
 * Action:         SHOW
 * Method:         GET
 * URI:            /logs/12
 * Description: Get one log by ID
*/
router.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
            // return log if exist
            if (log) {
                res.status(200).json({ log: log });
            } else {
                // if there is no log with a matching id
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: 'The provided id doesn\'t match any document'
                    }
                })
            }
        } else {
            res.status(500).json({ error: error });
        }
    })
});
/** 
 * Action:         UPDATE
 * Method:         PATCH
 * URI:            /logs/:id
 * Description: Update log by id
*/
router.patch('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
            if (log) {
                log.update(req.body, (error, log) => {
                    if (!error) {
                        res.status(204).end();
                    } else {
                        res.status(500).json({ error: error })
                    }
                })
            } else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: 'The provided id doesn\'t match any document'
                    }
                })
            }
        } else {
            res.status(500).json({ error: error })
        }
    })
});
/** 
 * Action:         DESTROY
 * Method:         DELETE
 * URI:            /logs/:id
 * Description: Delete a log by id
*/
router.delete('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
            if (log) {
                log.remove((error, log) => {
                    if (!error) {
                        res.status(204).end();
                    } else {
                        res.status(500).json({ error: error })
                    }
                })
            } else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: 'The provided id doesn\'t match any document'
                    }
                })
            }
        } else {
            res.status(500).json({ error: error })
        }
    })
})

// logs SEED ROUTE
router.get('/logs/seed', (req, res) => {
    Log.insertMany([
      {
        title: 'Day 1',
        entry: 'This is Captain Kirk, yes I\'m Captain now, suck on that Spock' ,
      },
      {
        title: 'Day 2',
        entry: 'This is Captain Kirk, I transfered Ohura to a another ship to annoy Spock ',
      },
      {
        title: 'Day 3',
        entry: 'This is Captain Kirk, Spock is pissed I have to bring Ohura back',
      },
      {
        title: 'Day 4',
        entry: 'This is Captain Kirk, Scott and I tried to warp Spock into an abandoned planet it didnt go well',
      },
      {
        title: 'Day 5',
        entry: 'This is Captain Kirk, I hate Spock',
      },
      {
        title: 'Day 6',
        entry: 'This is Captain Kirk, I think I killed Spock',
      },
    ], (err, logs) => {
      res.json(logs);
    })
  });
module.exports = router;
