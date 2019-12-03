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
    Log.find({}, (error, logs) => {
        // return all logs
        if(!error) {
            res.status(200).json({logs: logs})
        } else {
            res.status(500).json ({error: error})
        }
    })
})



/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /logs
 * Description: Create new log
*/
router.post('/log', (req, res) => {
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
 * URI:            /log/12
 * Description: get one log by ID
*/
router.get('/log/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
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

router.patch('/log/:id', (req, res) => {
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

router.delete('/log/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
            if (log) {
                log.remove(req, (error, log) => {
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