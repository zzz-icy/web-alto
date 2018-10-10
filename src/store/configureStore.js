// store creation
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import myReducer from '../reducers/reducers';

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

        composeEnhancers(applyMiddleware(sagaMiddleware))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
};



/* eslint-enable */

