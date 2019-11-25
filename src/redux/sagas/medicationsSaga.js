import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
function* fetchMedications() {
    try {
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


function* updateMedication(action) {
    console.log('in updateMedication saga, action.payload is: ', action.payload);
    try {
        yield axios.put(`/api/medications/edit/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_MEDICATIONS'});
        yield put({ type: 'FETCH_SELECTED', payload: action.payload});
    } catch (error) {
        console.log('Error in updateMedications saga: ', error);
    }
}

function* selectedMedication(action) {
    try{
        const medicationDetails = yield axios.get(`/api/medications/selected/${action.payload}`);
        console.log('selectedMedication saga medicationDetails.data: ', medicationDetails.data[0]);
        yield put({ type: 'SET_SELECTED_MEDICATION', payload: medicationDetails.data[0]});
    } catch(error){
        console.log('error in selectedMedication saga: ', error);
    }
}

function* medicationsSaga() {
    yield takeLatest('FETCH_MEDICATIONS', fetchMedications);
    yield takeLatest('ADD_NEW_MEDICATION', addNewMedication);
    yield takeLatest('DELETE_MEDICATION', deleteMedication);
    yield takeLatest('UPDATE_MEDICATION', updateMedication);
    yield takeLatest('FETCH_SELECTED', selectedMedication)
}

export default medicationsSaga;