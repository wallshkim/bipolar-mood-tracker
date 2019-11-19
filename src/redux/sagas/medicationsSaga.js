import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
function* fetchMedications(action) {
    try {
        console.log('in fetchMedications, action.payload is: ', action.payload);
        const response = yield axios.get('/api/medications', action.payload);
        yield put({ type: 'SET_MEDICATIONS', payload: response.data });
    } catch (error) {
        console.log('Medication get request failed', error);
    }
}

function* medicationsSaga() {
    yield takeLatest('FETCH_MEDICATIONS', fetchMedications);
}

export default medicationsSaga;