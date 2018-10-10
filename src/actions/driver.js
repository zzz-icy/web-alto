// LOAD_DRIVER

export const loadDriver = () => ({
    type: 'LOAD_DRIVER_REQUEST',
});

export const loadDriverSuccess = (data) => ({
    type: 'LOAD_DRIVER_SUCCESS',
    data
});

export const loadDriverError = (error) => ({
    type: 'LOAD_DRIVER_FAILURE',
    error
});