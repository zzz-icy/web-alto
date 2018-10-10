// import { fromJS } from 'immutable';

// const initialState = fromJS({
//     fetching: false,
//     data: null,
//     error: null
// });

const initialState = {
    driver_fetching: false,
    driver: null,
    driver_error: null
};


const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DRIVER_REQUEST':
            // return state.set('fetching', true)
            //     .set('error', null);
            return { ...state, driver_fetchingfetching: true }
        case 'LOAD_DRIVER_SUCCESS':
            // return state.set('fetching', false)
            //     .set('data', action.data)
            //     .set('error', null);
            return { ...state, fetching: false, driver: action.data }
        case 'LOAD_DRIVER_FAILURE':
            // return state.set('fetching', false)
            //     .set('data', null)
            //     .set('error', action.error);
            return { ...state, data: null, driver_error: action.error }

        default:
            return state;
    }
};

export default driverReducer;