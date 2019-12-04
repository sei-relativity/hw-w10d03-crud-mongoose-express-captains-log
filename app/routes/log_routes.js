const express = require('express');
const Log = require('../models/Log');
const router = express.Router();


// Index
router.get('/logs', (req, res) => {
    Log.find({}, (err, logs) => {
        if (!err) {
            res.status(200).json({ logs: logs });
        } else {
            res.status(500).json({ err: err });
        }
    });
});

// Show
router.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, log) => {
        if (!err) {
            if (log) {
                res.status(200).json({ log: log });
            } else {
                res.status(404).json({
                    err: {
                        name: 'DocumentNotfountError',
                        message: 'The provided id does not match any document'
                    }
                });
            }
        } else {
            res.status(500).json({ err: err });
        }
    });
});

// Create

router.post('/logs', (req, res) => {
    Log.create(req.body, (err, log) => {
        if (!err) {
            res.status(201).json({ log })
        } else {
            res.status(500).json({ err: err })
        }
    });
});

// Update

router.patch('/logs/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        if (!err) {
            res.status(204).end();
        } else {
            res.status(500).json({ err: err })
        }
    });
});


// Delete

router.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
        if (!err) {
            res.status(204).end();
        } else {
            res.status(500).json({ error: error })
        }
    });
});
module.exports = router;