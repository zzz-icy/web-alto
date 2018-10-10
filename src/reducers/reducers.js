
const initialState = {
    fetching: false,
    data: null,
    error: null
};


export const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            return { ...state, fetching: true, error: null };
        case 'LOAD_DATA_SUCCESS':
            return { ...state, fetching: false, data: action.data, error: null };
        case 'LOAD_DATA_FAILURE':
            return { ...state, fetching: false, data: null, error: action.error };
        default:
            return state;
    }
};

export default myReducer;