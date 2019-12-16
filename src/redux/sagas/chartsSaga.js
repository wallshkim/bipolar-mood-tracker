import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSevenDays() {
    try {
        console.log('in fetchSevenDays');
        const response = yield axios.get('/api/charts/seven');
        yield put({ type: 'SET_SEVEN_DAYS', payload: response.data});
    } catch (error) {
        console.log('fetchSevenDays get request failed', error);
    }
}

function* fetchThirtyDays() {
    try {
        console.log('in fetchThirtyDays');
        const response = yield axios.get('/api/charts/thirty');
        yield put({ type: 'SET_THIRTY_DAYS', payload: response.data });
    } catch (error) {
        console.log('fetchThirtyDays get request failed', error);
    }
}

function* chartsSaga() {
    yield takeLatest('FETCH_SEVEN_DAYS', fetchSevenDays);
    yield takeLatest('FETCH_THIRTY_DAYS', fetchThirtyDays);
}

export default chartsSaga;