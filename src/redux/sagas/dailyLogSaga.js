import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';


/* saga fires on ADD_DAILY_LOG actions*/
function* addDailyLog(action) {
    try {
        console.log('in addDailyLog, action.payload is: ', action.payload);
        yield axios.post(`/api/dailyLog`, action.payload);
    } catch (error) {
        console.log('addDailyLog post request failed', error);
    }
}

function* fetchDailyLog(action) {
    try {
        console.log('in fetchDailyLog, action.payload is: ', action.payload);
        const response = yield axios.get(`/api/dailyLog/`, { params: { date: action.payload } });
        console.log('in fetchDailyLog, response.data is: ', response.data);
        yield put({ type: 'SET_DAILY_LOG', payload: response.data.moodsDailyLog });
        if (response.data.medsDailyLog.length !== 0) {
            // check if it's a previously logged medication day
            console.log(response.data.medsDailyLog.length !== 0);
            yield put({ type: 'SET_MEDICATIONS', payload: response.data.medsDailyLog });
        } else {
            // else send back active medications
            yield put({ type: 'FETCH_MEDICATIONS' });
        }
        console.log('in fetchDailyLog', response.data.medsDailyLog);
    } catch (error) {
        console.log('fetchDailyLog post request failed', error);
    }
}


function* changeDailyLog(action) {
    console.log('in changeDailyLog, action.payload is: ', action.payload);
    // Get today's date from currentDateReducer to use below
    let today = yield select(reduxState => reduxState.currentDateReducer);
    // console.log('in changeDailyLog today is: ', today);

    try {
        /* Update the daysBackReducer */
        if (action.payload === 'increment') {
            yield put({ type: 'INCREMENT_DAYS_BACK' });
        }
        else if (action.payload === 'decrement') {
            yield put({ type: 'DECREMENT_DAYS_BACK' });
        }
        // Get the updated daysBackReducer value
        let dayOffset = yield select(reduxState => reduxState.daysBackReducer);
        // 
        const format = today.today.format('L')
        let newDay = moment(format).subtract(dayOffset, "days").format('L');

        console.log('in changeDailyLog, today.today is: ', today.today);
        console.log('in changeDailyLog, newDay is: ', newDay);
        yield put({
            type: 'FETCH_DAILY_LOG',
            payload: newDay
        })
    } catch (error) {
        console.log('fetchDailyLog post request failed', error);
    }
}


function* dailyLogSaga() {
    yield takeLatest('ADD_DAILY_LOG', addDailyLog);
    yield takeLatest('FETCH_DAILY_LOG', fetchDailyLog);
    yield takeLatest('CHANGE_DAILY_LOG', changeDailyLog);
    // yield takeLatest('SET_DATE', setDate);
}

export default dailyLogSaga;