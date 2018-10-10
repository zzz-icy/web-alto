// import { fromJS } from 'immutable';

// const initialState = fromJS({
//     fetching: false,
//     data: null,
//     error: null
// });

const initialState = {
    trip_fetching: false,
    trip: null,
    trip_error: null
};


const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            // return state.set('fetching', true)
            //     .set('error', null);
            return { ...state, trip_fetching: true }
        case 'LOAD_TRIP_SUCCESS':
            // return state.set('fetching', false)
            //     .set('data', action.data)
            //     .set('error', null);
            return { ...state, trip_fetching: false, trip: action.data }
        case 'LOAD_DATA_FAILURE':
            // return state.set('fetching', false)
            //     .set('data', null)
            //     .set('error', action.error);
            return { ...state, data: null, trip_error: action.error }

        default:
            return state;
    }
};

export default tripReducer;