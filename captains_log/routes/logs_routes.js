const express = require('express');

const Log= require('../models/log'); 
const router=express.Router(); 

// GET ALL LOGS 
router.get('/logs',(req,res)=> {
    Log.find({},(error,logs)=> {
        if (!error) {
            res.status(200).json({ logs: logs });
        } else {
            res.status(500).json({ error: error })
    }});
}); 

// SHOW LOGS BY ID 
router.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
        if (log) {
         res.status(200).json({ log: log });
 } else {
        res.status(404).json({
        error: {
        name: 'DocumentNotFoundError',
        message: 'The provided id doesn\'t match any document'
                    }
                })
            }
        } else {
            res.status(500).json({ error: error });
        } })    });

// CREATE NEW LOG 
router.post('/logs', (req, res) => {
    Log.create(req.body, (error, log) => {
        if (!error) {
            res.status(201).json({ log })
        } else {
            res.status(500).json({ error: error })
        }
    })
});

//UPDATE BY ID 

router.patch('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
        if (log) {
        log.update(req.body, (error, log) => {
        if (!error) {
        res.status(204).end();
    } else {
        res.status(500).json({ error: error })  }})
    } else {
        res.status(404).json({
        error: {
        name: 'DocumentNotFoundError',
        message: 'The provided id doesn\'t match any document'}})}
        } else {
        res.status(500).json({ error: error })
        }
    })
});

//DELETE LOG BY ID 
router.delete('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (!error) {
            if (log) {
            log.remove((error, log) => {
            if (!error) {
            res.status(204).end();
        } else {
            res.status(500).json({ error: error })}
            })
        } else {
            res.status(404).json({
            error: {
            name: 'DocumentNotFoundError',
            message: 'The provided id doesn\'t match any document' }})
            }
        } else {
            res.status(500).json({ error: error })
        }
    })
})

module.exports = router;