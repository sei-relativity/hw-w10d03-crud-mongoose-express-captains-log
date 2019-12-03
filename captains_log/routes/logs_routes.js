// Require necessary NPM Packages
const express = require('express');
// Instantiate a router (mini app that only handle routes)
const router = express.Router();
// pull in mongoose model fr log
const Log = require('../models/log');
/** 
 * Action:          INDEX
 * Method:         GET
 * URI:            /logs
 * Description: Get all logs
*/
router.get('/logs', (req, res) =>{
    console.log("bluuuuuuuh");
    // Log.find({}, (error, logs) => {
        // return all logs
        // if(!error) {
        //     res.status(200).json({logs: logs})
        // } else {
        //     res.status(500).json ({error: error})
        // }
    // })
});
/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /logs
 * Description: Create new log
*/
router.post('/logs', (req, res) => {
    // res.json(req.body);
    res.json(req.body, (error, newlog) => {
        if(!error){
            res.status(201).json({log :log})
        } else {
        res.status(500).json({error: error})
        }
    })
});
/** 
 * Action:         SHOW
 * Method:         GET
 * URI:            /log/12
 * Description: get one log by ID
*/
router.get('/log/:id', (req, res) => {
    log.findById(req.params.id, (error, log) => {
        if(!error){
                // return true if exists
            if (log) {
                res.status(200).json({log: log});
            } else {
                // else if there is no log with matching ID
                res.status(404).json({
                    error: {
                        name:'DocumentNotFoundError',
                        message: 'The Provided id does\'t match any documents'
                    }
                })
            }
        } else {
            res.status(500).json({error: error})
        }
    })
});
/** 
 * Action:         UPDATE
 * Method:         PATCH
 * URI:            /log/12
 * Description: get one log by ID
*/
router.patch('/logs/:id', (req, res) => {
    log.findById(req.params.id, (error, log) => {
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
 * Action:          
 * Method:         GET
 * URI:            /logs/seed
 * Description: seed data to DB
*/
router.get('/logs/seed', (req, res) => {
    log.insertMany([
        {
            title: 'Hi, we f**ed up',
            entry: ' I dont know why they chose me as a captain',
            shipIsBroken: false
          },
          {
            title: 'I think we are gonna die',
            entry: ' Our ship has fallen apart. We crashed at Uranus',
            shipIsBroken: true
          },
          {
            title: 'Famous last words',
            entry: 'Sh******t, we dead',
            
          }
    ], (error, logs) => {
        if(!error){
            res.status(200).json({ logs: logs });
        } else {
            res.status(500).json({ error: error })
        }
    });
})
/** 
 * Action:         DESTROY 
 * Method:         DELETE
 * URI:            /logs/:id
 * Description: delete log by id
*/
router.delete('/logs/:id', (req,res) => {
    log.findById(req.params.id, (error, log) => {
        if (!error) {
            if (log) {
                log.remove(req.body, (error, log) => {
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
// export module
module.exports = router;