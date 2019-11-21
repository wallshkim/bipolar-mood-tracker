import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
function* addMedicationsPerDay(action) {
    try {
        console.log('in addMedicationsPerDay, action.payload is: ', action.payload);
        const response = yield axios.post(`/api/medicationsPerDay`, action.payload);
        // yield put({ type: 'ADD_MOODS', payload: response.data });
        console.log('in addMedicationsPerDay, response.data is: ', response.data);
    } catch (error) {
        console.log('addMedicationsPerDay post request failed', error);
    }
}

function* medicationsPerDaySaga() {
    yield takeLatest('ADD_MEDICATION_PER_DAY', addMedicationsPerDay);
}

export default medicationsPerDaySaga;