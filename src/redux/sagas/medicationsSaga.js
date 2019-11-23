import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
function* fetchMedications(action) {
    try {
        // console.log('in fetchMedications, action.payload is: ', action.payload);
        const response = yield axios.get(`/api/medications`);
        yield put({ type: 'SET_MEDICATIONS', payload: response.data });
        console.log('in fetchMedications, response.data is: ', response.data);
    } catch (error) {
        console.log('Medication get request failed', error);
    }
}

function* addNewMedication(action) {
    try {
        yield axios.post('/api/medications', action.payload);
        yield put({ type: 'FETCH_MEDICATIONS' });
    } catch (error) {
        console.log('Error in addNewMedication: ', error);
    }
}

function* deleteMedication(action) {
    console.log('in deleteMedication saga action.payload is: ', action.payload);
    
    try {
        yield axios.put(`/api/medications/${action.payload}`);
        yield put({ type: 'FETCH_MEDICATIONS' });
    } catch (error) {
        console.log('Error in deleteMedication', error);
    }
}

function* medicationsSaga() {
    yield takeLatest('FETCH_MEDICATIONS', fetchMedications);
    yield takeLatest('ADD_NEW_MEDICATION', addNewMedication);
    yield takeLatest('DELETE_MEDICATION', deleteMedication);
}

export default medicationsSaga;