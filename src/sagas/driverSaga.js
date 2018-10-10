import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../request';
import { loadDriverSuccess, loadDriverError } from '../actions/driver'



export function* fetchDriver() {

    // const requestURL = '/fakeapi/trip';
    const requestURL = 'http://localhost:3001/driver';
    try {
        // Call our request helper (see 'utils/request')
        // need to be fixed, if signed out, won't work
        const data = yield call(request, requestURL);
        console.log(data);
        yield put(loadDriverSuccess(data));
    } catch (err) {
        yield put(loadDriverError(err));
    }
}



function* driverSaga() {
    yield takeLatest("LOAD_DRIVER_REQUEST", fetchDriver);

}

export default driverSaga;

