/* Holds last 30 days of mood info */
const thirtyDaysReducer = (state = [], action) => {
    console.log('in thirtyDaysReducer, action.payload is: ', action.payload);
    switch (action.type) {
        case 'SET_THIRTY_DAYS':
            return action.payload
        default:
            return state;
    }
};

export default thirtyDaysReducer;