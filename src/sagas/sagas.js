import { fork, all } from 'redux-saga/effects';
import tripSaga from './tripSaga';
import driverSaga from './driverSaga';
import vehicleSaga from './vehicleSaga';
import vibeSaga from './vibeSaga';


const sagas = [
    tripSaga,
    vibeSaga,
    vehicleSaga,
    driverSaga
];
// [...effects] has been deprecated in favor of all([...effects]), please update your code
// added all([effects...])
export default function* rootSage() {
    yield all(sagas.map(saga => fork(saga)));
}