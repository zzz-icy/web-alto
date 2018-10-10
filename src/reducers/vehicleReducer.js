
const initialState = {
    vehicle_fetching: false,
    vehicle: null,
    vehicle_error: null
};


const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            // return state.set('fetching', true)
            //     .set('error', null);
            return { ...state, vehicle_fetching: true }
        case 'LOAD_VEHICLE_SUCCESS':
            // return state.set('fetching', false)
            //     .set('data', action.data)
            //     .set('error', null);
            return { ...state, vehicle_fetching: false, vehicle: action.data }
        case 'LOAD_DATA_FAILURE':
            // return state.set('fetching', false)
            //     .set('data', null)
            //     .set('error', action.error);
            return { ...state, data: null, vehicle_error: action.error }

        default:
            return state;
    }
};

export default vehicleReducer;