import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
function* addMoods(action) {
    try {
        console.log('in addMoods, action.payload is: ', action.payload);
        const response = yield axios.post(`/api/moods`, action.payload);
        // yield put({ type: 'ADD_MOODS', payload: response.data });
        console.log('in addMoods, response.data is: ', response.data);
    } catch (error) {
        console.log('addMoods post request failed', error);
    }
}

function* moodsSaga() {
    yield takeLatest('ADD_MOODS', addMoods);
}

export default moodsSaga;