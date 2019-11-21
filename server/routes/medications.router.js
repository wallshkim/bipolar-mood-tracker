const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user's medication information
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "medications" WHERE "user_id"=$1`
    pool.query(queryText, [req.user.id])
        .then((results) => {
            console.log('in medications router get, results.rows is: ', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error on GET medications query: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;