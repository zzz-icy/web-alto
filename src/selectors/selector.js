import { createSelector } from 'reselect';

// const selectGlobal = state => state.get('global');

// export const makeSelectData = () =>
//     createSelector(selectGlobal, globalState => globalState.get('auth'));


// selector
const getData = (state) => state.data;
// reselect function
export const getDataState = createSelector(
    [getData],
    (data) => data
)