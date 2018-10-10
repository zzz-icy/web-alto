// store creation
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga'
import myReducer from '../reducers/reducers';
import mySaga from '../sagas/saga';

// will do the following in the index.js
// const store = configureStore();
export const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        // register each reducer here
        combineReducers({
            mainReducer: myReducer,
        }),
        // fromJS(initialState),
        // myReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

    sagaMiddleware.run(mySaga);

    return store;
};



/* eslint-enable */

