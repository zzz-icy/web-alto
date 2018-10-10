// LOAD_TRIP
export const loadData = (pageName) => ({
    type: 'LOAD_DATA_REQUEST',
    pageName
});

export const loadDataSuccess = (data) => ({
    type: 'LOAD_DATA_SUCCESS',
    data
});

export const loadDataError = (error) => ({
    type: 'LOAD_DATA_FAILURE',
    error
});
