
const initialState = {
    vibe_fetching: false,
    vibe: null,
    vibe_error: null
};


const vibeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            // return state.set('fetching', true)
            //     .set('error', null);
            return { ...state, vibe_fetching: true }
        case 'LOAD_VIBE_SUCCESS':
            // return state.set('fetching', false)
            //     .set('data', action.data)
            //     .set('error', null);
            return { ...state, vibe_fetching: false, vibe: action.data }
        case 'LOAD_DATA_FAILURE':
            // return state.set('fetching', false)
            //     .set('data', null)
            //     .set('error', action.error);
            return { ...state, data: null, vibe_error: action.error }

        default:
            return state;
    }
};

export default vibeReducer;