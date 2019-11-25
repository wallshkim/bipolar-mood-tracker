import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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
    try{
        console.log('in fetchDailyLog, action.payload is: ', action.payload);
        const response = yield axios.get(`/api/dailyLog/`, { params: {date: action.payload}});
        yield put({ type: 'SET_DAILY_LOG', payload: response.data});
        console.log('in fetchDailyLog, response is: ', response);
    } catch (error) {
        console.log('fetchDailyLog post request failed', error);
    }
}

function* dailyLogSaga() {
    yield takeLatest('ADD_DAILY_LOG', addDailyLog);
    yield takeLatest('FETCH_DAILY_LOG', fetchDailyLog);
}

export default dailyLogSaga;