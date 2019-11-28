import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';

function* fetchSevenDays(action) {
    try {
        console.log('in fetchSevenDays, action.payload is: ', action.payload);
        
    } catch (error) {
        console.log('fetchSevenDays get request failed', error);
    }
}

function* chartsSaga() {
    yield takeLatest('FETCH_SEVEN_DAYS', fetchSevenDays);
}

export default chartsSaga;