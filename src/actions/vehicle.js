// LOAD_DRIVER

export const loadVehicle = () => ({
    type: 'LOAD_VEHICLE_REQUEST',
});

export const loadVehicleSuccess = (data) => ({
    type: 'LOAD_VEHICLE_SUCCESS',
    data
});

export const loadVehicleError = (error) => ({
    type: 'LOAD_VEHICLE_FAILURE',
    error
});