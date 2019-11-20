import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_MEDICATIONS" actions
function* fetchMood(action) {
    try {
        console.log('in fetchMood, action.payload is: ', action.payload);
        const response = yield axios.get(`/api/mood/${action.payload}`);
        yield put({ type: 'SET_MOOD', payload: response.data });
        console.log('in fetchMood, response.data is: ', response.data);
    } catch (error) {
        console.log('Mood get request failed', error);
    }
}

function* moodSaga() {
    yield takeLatest('FETCH_MOOD', fetchMood);
}

export default moodSaga;