import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../request';
import { loadVibeSuccess, loadVibeError } from '../actions/vibe'

export function* fetchVibe() {

    // const requestURL = '/fakeapi/trip';
    const requestURL = 'http://localhost:3001/vibe';
    try {
        // Call our request helper (see 'utils/request')
        // need to be fixed, if signed out, won't work
        const data = yield call(request, requestURL);
        console.log(data);
        yield put(loadVibeSuccess(data));
    } catch (err) {
        yield put(loadVibeError(err));
    }
}


function* vibeSaga() {

    yield takeLatest("LOAD_VIBE_REQUEST", fetchVibe);

}

export default vibeSaga;

