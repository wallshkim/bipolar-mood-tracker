const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for mood information
router.get('/:id', (req, res) => {
    const queryText = `SELECT "medication"."name", "mood"."date", "mood"."id" as "mood_id", "mood"."user_id", "mood"."manic", "mood"."depressed", "mood"."sleep", "mood"."irritability", "mood"."anxiety", "mood"."psychotic", "mood"."therapy", "mood"."exercise", "mood"."alcohol", "mood"."substance_use", "mood"."weight" FROM "medication"
        JOIN "medications_moods"
        ON "medication"."id"="medications_moods"."medication_id"
        JOIN "mood"
        ON "medications_moods"."mood_id"="mood"."id"
        WHERE "mood"."id"=$1;`
    pool.query(queryText, [req.params.id])
        .then((results) => {
            console.log('in mood router get, results.rows is: ', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error on GET mood query: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;