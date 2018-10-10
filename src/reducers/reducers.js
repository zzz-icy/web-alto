// import { fromJS } from 'immutable';

// const initialState = fromJS({
//     fetching: false,
//     data: null,
//     error: null
// });

const initialState = {
    fetching: false,
    data: null,
    error: null
};


const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            // return state.set('fetching', true)
            //     .set('error', null);
            return { ...state, fetching: true }
        case 'LOAD_DATA_SUCCESS':
            // return state.set('fetching', false)
            //     .set('data', action.data)
            //     .set('error', null);
            return { ...state, fetching: false, data: action.data }
        case 'LOAD_DATA_FAILURE':
            // return state.set('fetching', false)
            //     .set('data', null)
            //     .set('error', action.error);
            return { ...state, data: null, error: action.error }

        default:
            return state;
    }
};

export default myReducer;