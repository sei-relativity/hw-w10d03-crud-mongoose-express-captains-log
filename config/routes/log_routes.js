const express = require('express');
const Log = require('../../models/log');
const router = express.Router();

// INDEX
router.get('/logs', (req, res) => {
    Log.find({}, (err, logs) => {
        res.status(200).json({ logs })
    })
})

//Show
router.get('/logs/:id', (req, res) => {
    const id = req.params.id
    Log.findById(id, (err, log) => {
        res.status(200).json({ log })
    })
})

// Create
router.post("/logs", (request, response) => {
    Log.create(request.body, (error, log) => {
        if (!error) {
            response.status(201).json({ log: log });
        } else {
            response.status(500).json({ error: error });
        }
    });
});

//Update
router.patch('/logs/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, (err, log) => {
        res.status(200).json({ log })
    })
})

//Destroy
router.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, log) => {
        res.status(204).json({ log })
    })
})


module.exports = router;