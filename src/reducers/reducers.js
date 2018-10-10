
const initialState = {
    fetching: false,
    data: null,
    error: null
};


export const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            return state.set('fetching', true)
                .set('error', null);
        case 'LOAD_DATA_SUCCESS':
            return state.set('fetching', false)
                .set('data', action.data)
                .set('error', null);
        case 'LOAD_DATA_FAILURE':
            return state.set('fetching', false)
                .set('data', null)
                .set('error', action.error);
        default:
            return state;
    }
};

export default myReducer;