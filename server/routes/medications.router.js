const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles request for user's medication information
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "medications" WHERE "user_id"=$1 AND "disabled"=FALSE ORDER BY "id";`
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

// Gets info for selected medication
    router.get(`/selected/:id`, (req, res) => {
        const queryText = `SELECT * FROM "medications" WHERE "id"=$1 ORDER BY "id";`;
        pool.query(queryText, [req.params.id])
            .then(result => {
                res.send(result.rows);
            })
            .catch(error => {
                console.log('Error completing SELECT medication details: ', error);
                res.sendStatus(500);
            })
    })

// Handles request to add user's new medication information
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

/* Soft delete in medications table */
router.put('/:id', (req, res) => {
    const queryText = `UPDATE "medications" SET "disabled"=TRUE WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE medication query', err);
            res.sendStatus(500);
        });
});

/* Edit selected medication */
router.put('/edit/:id', (req, res) => {
    const updatedMedication = req.body;
    const queryText = `UPDATE "medications" SET "name"=$1, "dosage"=$2, "units"=$3, "frequency"=$4, "time"=$5 WHERE "id"=$6;`;
    const queryValues = [updatedMedication.name, updatedMedication.dosage, updatedMedication.units, updatedMedication.frequency, updatedMedication.time, req.params.id];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE medication query', err);
            res.sendStatus(500);
        });
});

module.exports = router;