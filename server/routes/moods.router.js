const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax post to moods_per_day
router.post('/', (req, res) => {
    console.log('in /moods router.post req.user is: ', req.user);
    console.log('in /moods router.post req.body is: ', req.body);

    
    const queryText = `INSERT INTO "moods_per_day" ("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy", "notes") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
    const queryValues = [req.user.id, req.body.date, req.body.elevated, req.body.depressed, req.body.sleep, req.body.irritability, req.body.anxiety, req.body.psychoticSymptoms, req.body.therapy, req.body.notes]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error on POST moods query: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;