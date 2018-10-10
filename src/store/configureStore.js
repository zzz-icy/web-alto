// store creation
import { createStore, combineReducers } from 'redux';
import myReducer from '../reducers/reducers';

// will do the following in the index.js
// const store = configureStore();

export default () => {
    const store = createStore(
        // register each reducer here
        combineReducers({
            mainReducer: myReducer,
        }),

        // composeEnhancers(applyMiddleware(thunk))
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
};
/* eslint-enable */

