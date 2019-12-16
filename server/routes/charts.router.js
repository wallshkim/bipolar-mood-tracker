const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* Get daily mood entries for last seven days */
router.get('/seven', (req, res) => {
    const queryText = `SELECT "id", "user_id", "date", to_char("date", 'Mon DD') as "date_display", "elevated", "depressed", "irritability", "anxiety", "sleep", "psychotic_symptoms", "therapy", "notes" FROM "moods_per_day"
        WHERE "date" >= now() - interval '7 days'
        AND "user_id"=$1
        ORDER BY "date" ASC;`
    pool.query(queryText, [req.user.id])
        .then((results) => {
            console.log('in charts seven router get, results.rows is: ', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error on GET seven query: ', error);
            res.sendStatus(500);
        });
});

/* Get daily mood entries for last thirty days */
router.get('/thirty', (req, res) => {
    const queryText = `SELECT "id", "user_id", "date", to_char("date", 'Mon DD') as "date_display", "elevated", "depressed", "irritability", "anxiety", "sleep", "psychotic_symptoms", "therapy", "notes" FROM "moods_per_day"
        WHERE "date" >= now() - interval '30 days'
        AND "user_id"=$1
        ORDER BY "date" ASC;`
    pool.query(queryText, [req.user.id])
        .then((results) => {
            console.log('in charts thirty router get, results.rows is: ', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error on GET thirty query: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;