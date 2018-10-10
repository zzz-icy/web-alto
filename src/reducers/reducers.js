const myReducerDefaultState = [];
export const myReducer = (state = myReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_TRIP':
            return action.trip;
        case 'LOAD_DRIVER':
            return action.driver;
        case 'LOAD_VEHICLE':
            return action.vehicle;
        case 'VIBE':
            return action.vibe;
        default:
            return state;
    }
};

export default myReducer;