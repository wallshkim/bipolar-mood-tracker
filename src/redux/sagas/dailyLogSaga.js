import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
// function* addMoods(action) {
//     try {
//         console.log('in addMoods, action.payload is: ', action.payload);
//         const response = yield axios.post(`/api/moods`, action.payload);
//         // yield put({ type: 'ADD_MOODS', payload: response.data });
//         console.log('in addMoods, response.data is: ', response.data);
//     } catch (error) {
//         console.log('addMoods post request failed', error);
//     }
// }

// function* addDailyMoods(action) {
//     try {
//         console.log('in addDailyMoods, action.payload.moods is: ', action.payload.moods);
//         yield axios.post(`/api/moodsPerDay`, action.payload.moods);
//         // yield put({ type: 'ADD_MOODS', payload: response.data });
//         // console.log('in addDailyMoods, response.data is: ', response.data);
//     } catch (error) {
//         console.log('addDailyMoods post request failed', error);
//     }
// }

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
// function* addDailyMedications(action) {
//     try {
//         console.log('in addDailyMedications, action.payload is: ', action.payload);
//         yield axios.post(`/api/medicationsPerDay`, action.payload);
//         // yield put({ type: 'ADD_MOODS', payload: response.data });
//         // console.log('in addDailyMedications, response.data is: ', response.data);
//     } catch (error) {
//         console.log('addDailyMedications post request failed', error);
//     }
// }

function* addDailyLog(action) {
    try {
        console.log('in addDailyLog, action.payload is: ', action.payload);
        yield axios.post(`/api/dailyLog`, action.payload);
        // yield put({ type: 'ADD_MOODS', payload: response.data });
        // console.log('in addDailyMedications, response.data is: ', response.data);
    } catch (error) {
        console.log('addDailyLog post request failed', error);
    }
}

function* dailyLogSaga() {
    yield takeLatest('ADD_DAILY_LOG', addDailyLog);
    // yield takeLatest('ADD_DAILY_LOG', addDailyMedications);
}

export default dailyLogSaga;