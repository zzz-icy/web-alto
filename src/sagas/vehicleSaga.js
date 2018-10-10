import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../request';
import { loadVehicleSuccess, loadVehicleError } from '../actions/vehicle'


export function* fetchVehicle() {

    // const requestURL = '/fakeapi/trip';
    const requestURL = 'http://localhost:3001/vehicle';
    try {
        // Call our request helper (see 'utils/request')
        // need to be fixed, if signed out, won't work
        const data = yield call(request, requestURL);
        console.log(data);
        yield put(loadVehicleSuccess(data));
    } catch (err) {
        yield put(loadVehicleError(err));
    }
}




function* vehicleSaga() {
    yield takeLatest("LOAD_VEHICLE_REQUEST", fetchVehicle);
}

export default vehicleSaga;

