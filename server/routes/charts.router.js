const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/seven', (req, res) => {
    const queryText = `SELECT "id", "user_id", to_char("date", 'Mon DD') as "date", "elevated", "depressed", "irritability", "anxiety", "sleep", "psychotic_symptoms", "therapy", "notes" 
        FROM "moods_per_day"
        WHERE "date" >= now() - interval '7 days'
        AND "user_id"=$1
        ORDER BY "date";`
    pool.query(queryText, [req.user.id])
        .then((results) => {
            console.log('in charts seven router get, results.rows is: ', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error on GET medications query: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;