import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

/* saga fires on ADD_DAILY_LOG actions*/
function* addDailyLog(action) {
    try {
        console.log('in addDailyLog, action.payload is: ', action.payload);
        yield axios.post(`/api/dailyLog`, action.payload);
    } catch (error) {
        console.log('addDailyLog post request failed', error);
    }
}

function* dailyLogSaga() {
    yield takeLatest('ADD_DAILY_LOG', addDailyLog);
}

export default dailyLogSaga;