import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';

function* fetchSevenDays() {
    try {
        console.log('in fetchSevenDays');
        const response = yield axios.get('/api/charts/seven');
        yield put({ type: 'SET_SEVEN_DAYS', payload: response.data});
    } catch (error) {
        console.log('fetchSevenDays get request failed', error);
    }
}


function* chartsSaga() {
    yield takeLatest('FETCH_SEVEN_DAYS', fetchSevenDays);
}

export default chartsSaga;