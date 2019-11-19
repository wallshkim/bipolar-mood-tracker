const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for medication information
router.get('/', (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.sendStatus(200);
});

module.exports = router;
