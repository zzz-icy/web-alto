import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import AppRouter from './routes/AppRouter';

import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import './index.css';
import configureStore from './store/configureStore';
// import { loadData } from './actions/trip';
// import sagaMiddleware from './store/configureStore';
// import mySaga from './sagas/saga';

const store = configureStore();

// store.dispatch(loadData());

// const state = store.getState();
// console.log(state.data);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
