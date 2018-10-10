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
            return { ...state, driver_fetching: true }
        case 'LOAD_DRIVER_SUCCESS':
            // return state.set('fetching', false)
            //     .set('data', action.data)
            //     .set('error', null);
            return { ...state, driver_fetching: false, driver: action.data }
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