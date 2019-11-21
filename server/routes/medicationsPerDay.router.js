const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax post to medications_per_day
router.post('/', (req, res) => {
    console.log('in medicationsPerDayRouter post req.user is: ', req.user);
    console.log('in medicationsPerDayRouter post req.body is: ', req.body);

    const queryText = `INSERT INTO "medications_per_day" ("date", "user_id", "medication_id") 
    VALUES ($1, $2, $3);`;
    const queryValues = [req.body.date, req.user.id, req.body.id ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error on POST medications_per_day query: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;