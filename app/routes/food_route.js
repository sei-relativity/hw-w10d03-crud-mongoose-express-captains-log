// Require necessary NPM Packages
const express = require('express');

// Instantiate a router (mini app that only handle routes)
const router = express.Router();

// pull in mongoose model fr food
const Food = require('../models/food');


/** 
 * Action:          INDEX
 * Method:         GET
 * URI:            /food
 * Description: Get all food
*/
router.get('/foods', (req, res) =>{
 Food.find({}, (error, foods) => {
        // return all foods
        if(!error) {
            res.status(200).json({foods: foods})
        } else {
            res.status(500).json ({error: error})
        }
    })
})



/** 
 * Action:         CREATE
 * Method:         POST
 * URI:            /logs
 * Description: Create new food
*/
router.post('/food', (req, res) => {
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
 * URI:            /food/12
 * Description: get one food by ID
*/
router.get('/logs/food/:id', (req, res) => {
 Food.findById(req.params.id, (error, food) => {
        if(!error){
                // return true if exists
            if (food) {
                res.status(200).json({food: food});
            } else {
                // else if there is no food with matching ID
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
 * URI:            /food/12
 * Description: get one food by ID
*/

router.patch('/food/:id', (req, res) => {
 Food.findById(req.params.id, (error, food) => {
        if (!error) {
            if (food) {
                food.update(req.body, (error, food) => {
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

router.delete('/food/:id', (req, res) => {
 Food.findById(req.params.id, (error, food) => {
        if (!error) {
            if (food) {
                food.remove(req, (error, food) => {
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