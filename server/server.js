
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const medicationsRouter = require('./routes/medications.router');
const dailyLogRouter = require('./routes/dailyLog.router');

// CronJob
// const CronJob = require('../lib/cron.js').CronJob;
// const CronJob = require('cron').CronJob;
// const moment = require('moment');
// const axios = require('axios');
// const cron = require('node-cron');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/medications', medicationsRouter);
app.use('/api/dailyLog', dailyLogRouter);

// Serve static files
app.use(express.static('build'));

// create cronjob to run everyday at midnight CST
// console.log('Before job instantiation');
// const job = new CronJob('0 0 0 * * *',
//   function () {
//     const day = moment().format('L');
//     console.log('Midnight:', day);
//     // post request to send date to dailyLog.router
//     axios.post('http://localhost:5000/api/dailyLog/newDay', { date: day })
//       .then(res => {
//         console.log('response on post', res);
//       })
//       .catch(error => {
//         console.log('error on post: ', error);
//       });
//   },
//   'America/Chicago'
// );
// console.log('After job instantiation');
// job.start();

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
