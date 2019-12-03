// Require necessary NPM Packages
const express = require('express');
// Pull in Mongoose model for food
const Food = require('../model/food');
// Instantiate a router (mini app that only handle routes)
const router = express.Router();
/** 
 * Action:         INDEX
 * Method:         GET
 * URI:            /foods
 * Description: Get all foods
*/
router.get('/foods', (req, res) => {
    Food.find({}, (error, foods) => {
        // Return all foods 
        if (!error) {
            res.status(200).json({ foods: foods });
        } else {
            // if there area any errors
            res.status(500).json({ error: error })
        }
    });
});
/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /foods
 * Description: Create new food
*/
router.post('/foods', (req, res) => {
    Food.create(req.body, (error, food) => {
        if (!error) {
            res.status(201).json({ food })
        } else {
            res.status(500).json({ error: error })
        }
    })
});
/** 
 * Action:         SHOW
 * Method:         GET
 * URI:            /foods/12
 * Description: Get one food by ID
*/
router.get('/foods/:id', (req, res) => {
    Food.findById(req.params.id, (error, food) => {
        if (!error) {
            // return food if exist
            if (food) {
                res.status(200).json({ food: food });
            } else {
                // if there is no food with a matching id
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
 * URI:            /foods/:id
 * Description: Update food by id
*/
router.patch('/foods/:id', (req, res) => {
    Food.findById(req.params.id, (error, food) => {
        if (!error) {
            if (food) {
                Food.update(req.body, (error, food) => {
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
 * URI:            /foods/:id
 * Description: Delete a food by id
*/
router.delete('/foods/:id', (req, res) => {
    Food.findById(req.params.id, (error, food) => {
        if (!error) {
            if (food) {
                Food.remove((error, food) => {
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
 * URI:            /foods/seed
 * Description: Seed data to database
*/
router.get('/foods/seed', (req, res) => {

    Food.insertMany([
        {
            meal: 'lunch',
            mainDish: 'egg',
            foodFinish: false
        },
        {
            meal: 'overslept breakfast',
            mainDish: '??',
            foodFinish: false
        },
        {
            meal: 'last dinner',
            mainDish: 'nothing',
            foodFinish: true
        },
    ], (error, foods) => {
        if (!error) {
            res.status(200).json({ foods: foods });
        } else {
            res.status(500).json({ error: error })
        }
    });
})
module.exports = router;