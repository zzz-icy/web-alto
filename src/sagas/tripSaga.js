import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../request';
import { loadTripSuccess, loadTripError } from '../actions/trip'
export function* fetchTrip() {

    // const requestURL = '/fakeapi/trip';
    const requestURL = 'http://localhost:3001/trip';
    try {
        // Call our request helper (see 'utils/request')
        // need to be fixed, if signed out, won't work
        const data = yield call(request, requestURL);
        console.log(data);
        yield put(loadTripSuccess(data));
    } catch (err) {
        yield put(loadTripError(err));
    }
}



function* tripSaga() {
    yield takeLatest("LOAD_TRIP_REQUEST", fetchTrip);

}

export default tripSaga;

