// store creation
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
// import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga'
import tripReducer from '../reducers/tripReducers';
import vehicleReducer from '../reducers/vehicleReducer';
import driverReducer from '../reducers/driverReducer';
import vibeReducer from '../reducers/vibeReducer';

import rootSaga from '../sagas/sagas';

// will do the following in the index.js
// const store = configureStore();
export const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        // register each reducer here
        combineReducers({
            trip: tripReducer,
            vehicle: vehicleReducer,
            driver: driverReducer,
            vibe: vibeReducer
        }),
        // fromJS(initialState),
        composeEnhancers(applyMiddleware(sagaMiddleware))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

    sagaMiddleware.run(rootSaga);

    return store;
};



/* eslint-enable */

