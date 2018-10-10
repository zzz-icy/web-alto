// LOAD_TRIP
// export const loadData = (pageName) => ({
//     type: 'LOAD_DATAREQUEST',
//     pageName
// });

export const loadTrip = (pageName) => ({
    type: 'LOAD_TRIP_REQUEST',
    pageName
});

export const loadTripSuccess = (data) => ({
    type: 'LOAD_TRIP_SUCCESS',
    data
});

export const loadTripError = (error) => ({
    type: 'LOAD_TRIP_FAILURE',
    error
});

// export const loadDataError = (error) => ({
//     type: 'LOAD_DATA_FAILURE',
//     error
// });
