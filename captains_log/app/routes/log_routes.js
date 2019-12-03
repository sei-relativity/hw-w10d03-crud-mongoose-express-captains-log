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
*/Log.create(req.body)
Log.create('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken= false;
    }
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
 * URI:            /logs/:id
 * Description: Get one log by ID
*/
log.get('/logs/:id', (req, res) => {
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
    Log.findByIdAndUpdate(req.params.id, (error, log) => {
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
 * URI:           /logs
 * Description: Delete a logs 
*/
router.delete('/logs', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (error, log) => {
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
/////////////////////////
/** 
* Action:         
 * Method:         GET
 * URI:            /logs/seed
 * Description: Seed data to database
*/
router.get('/logs/seed', (req, res) => {
    Logs.insertMany([
        {
            name: 'grapefruit',
            color: 'pink',
            readyToEat: true
        },
        {
            name: 'grape',
            color: 'purple',
            readyToEat: false
        },
        {
            name: 'avocado',
            color: 'green',
            readyToEat: true
        }
    ], (error, fruits) => {
        if (!error) {
            res.status(200).json({ fruits: fruits });
        } else {
            res.status(500).json({ error: error })
        }
    });
})
module.exports = router;