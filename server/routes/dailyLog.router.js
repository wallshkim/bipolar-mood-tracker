const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax get from moods_per_day, medications, and medications_per_day
// router.get('/', async (req, res) => {

//     // setup pool connect
//     const client = await pool.connect();

//     try {
//         // Create vars for both objects in req.body
//         // const medications = req.body.medications;
//         // const moods = req.body.moods;
//         // Set start incase of a error
//         await client.query('BEGIN')
//         // Moods query arguments
//         const moodsQueryText = `SELECT * FROM "moods_per_day"
//         WHERE "date"=$1 AND "user_id"=$2;`;
//         // query to moods_per_day
//         await client.query(moodsQueryText, [])

//         const medicationsQueryText= `SELECT "medications"."id" as "medications_per_day_id", "medications_per_day"."date", "medications_per_day"."user_id", "medications_per_day"."taken", "medications"."id" as "medications_id", "medications"."name", "medications"."dosage", "medications"."units", "medications"."frequency", "medications"."time" FROM "medications_per_day"
//         JOIN "medications"
//         ON "medications_per_day"."medication_id" = "medications"."id"
//         WHERE "date" = '2019-11-20' AND "medications_per_day"."user_id" = 1;`;
//         await client.query(medicationsQueryText, [])

//         await client.query('COMMIT')
//         res.sendStatus(201)
//     }
//     catch (error) {
//         await client.query('ROLLBACK');
//         console.log('Error in dailyLogRouter POST: ', error);
//         res.sendStatus(500);
//     }
//     finally {
//         client.release();
//     }
// });


// Handles Ajax post to moods_per_day and medications_per_day
router.post('/', async (req, res) => {
    console.log('in dailyLogRouter post req.user is: ', req.user);
    console.log('in dailyLogRouter post req.body is: ', req.body);

    // setup pool connect
    const client = await pool.connect();

    try {
        // Create vars for both objects in req.body
        const medications = req.body.medications;
        const moods = req.body.moods;
        // Set start incase of a error
        await client.query('BEGIN')
        // Moods query arguments
        const moodsQueryText = `INSERT INTO "moods_per_day" ("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy", "notes") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
        const moodQueryValues = [req.user.id, moods.date, moods.elevated, moods.depressed, moods.sleep, moods.irritability, moods.anxiety, moods.psychoticSymptoms, moods.therapy, moods.notes]
        // query to moods_per_day
        await client.query(moodsQueryText, moodQueryValues)
        // query to medications_per_day for every medication attached to user
        await Promise.all( 
            medications.map(medication => {
                const queryText = `INSERT INTO "medications_per_day" ("date", "user_id", "medication_id", "taken") 
                VALUES ($1, $2, $3, $4);`;
                let queryValues = [req.body.moods.date, req.user.id, medication.id, medication.taken];
                return client.query(queryText, queryValues)
            })
        )
        await client.query('COMMIT')
        res.sendStatus(201)
    }
    catch (error){
        await client.query('ROLLBACK');
        console.log('Error in dailyLogRouter POST: ', error);
        res.sendStatus(500);
    } 
    finally {
        client.release();
    }
});

module.exports = router;