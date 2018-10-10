import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../request';
import { loadDataSuccess, loadDataError } from '../actions/trip'
export function* fetchData(action) {

    // const requestURL = '/fakeapi/trip';
    const requestURL = `http://localhost:3001/${action.pageName}`;
    try {
        // Call our request helper (see 'utils/request')
        // need to be fixed, if signed out, won't work
        const data = yield call(request, requestURL);
        console.log(data);
        yield put(loadDataSuccess(data));
    } catch (err) {
        yield put(loadDataError(err));
    }
}


function* mySaga() {
    yield takeLatest("LOAD_DATA_REQUEST", fetchData);
}

export default mySaga;

