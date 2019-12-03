// Require necessary NPM Packages
const express = require('express');
// Pull in Mongoose model for Log
const Log = require('../model/log');
// Instantiate a router (mini app that only handle routes)
const router = express.Router();
/** 
 * Action:         INDEX
 * Method:         GET
 * URI:            /logs
 * Description: Get all logs
*/
router.get('/logs', (req, res) => {
    console.log('logs')
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
 * Description: Create new log
*/
router.post('/logs', (req, res) => {
    Log.create(req.body, (error, log) => {
        if (!error) {
            res.status(201).json({ log })
        } else {
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
                Log.update(req.body, (error, log) => {
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
                Log.remove((error, log) => {
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
/////////////////////////
/** 
* Action:         
 * Method:         GET
 * URI:            /logs/seed
 * Description: Seed data to database
*/
router.get('/logs/seed', (req, res) => {

    Log.insertMany([
        {
            title: 'WTH',
            entry: 'what the h*** is this?',
            shipIsBroken: false
        },
        {
          title: '??',
          entry: 'still lost',
          shipIsBroken: false
      },
      {
        title: 'last one hopefully',
        entry: 'I broke the ship',
        shipIsBroken: true
    },
    ], (error, logs) => {
        if (!error) {
            res.status(200).json({ logs: logs });
        } else {
            res.status(500).json({ error: error })
        }
    });
})
module.exports = router;