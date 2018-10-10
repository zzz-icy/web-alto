// LOAD_TRIP
export const loadData = () => ({
    type: 'LOAD_DATA_REQUEST',
});

export const loadDataSuccess = (data) => ({
    type: 'LOAD_DATA_SUCCESS',
    data
});

export const loadDataErro = (error) => ({
    type: 'LOAD_DATA_FAILURE',
    error
});

export const loadTrip = (trip) => ({
    type: 'LOAD_TRIP',
    trip
});

// LOAD_VIBE

export const loadVibe = (vibe) => ({
    type: 'LOAD_VIBE',
    vibe
});

// LOAD_VEHICLE

export const loadVehicle = (vehicle) => ({
    type: 'LOAD_VEHICLE',
    vehicle
});

// LOAD_DRIVER

export const loadDriver = (driver) => ({
    type: 'LOAD_DRIVER',
    driver
});