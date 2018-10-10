import { fork } from 'redux-saga/effects';
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

export default function* rootSage() {
    yield sagas.map(saga => fork(saga));
}