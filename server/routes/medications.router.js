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


router.post('/', (req, res) => {
    const newMedication = req.body;
    console.log('in medication router POST req.body is: ', newMedication);
    const queryText = `INSERT INTO "medications" ("user_id", "name", "dosage", "units", "frequency", "time") 
    VALUES ($1, $2, $3, $4, $5 , $6);`;
    const queryValues = [
        req.user.id,
        newMedication.medicationName,
        newMedication.dosage,
        newMedication.units,
        newMedication.frequency,
        newMedication.time,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT medication query', err);
            res.sendStatus(500);
        });
});

module.exports = router;