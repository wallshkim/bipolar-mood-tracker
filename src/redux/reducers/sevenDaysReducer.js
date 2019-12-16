/* Holds last 7 days of mood info */
const sevenDaysReducer = (state = [], action) => {
    console.log('in sevenDaysReducer, action.payload is: ', action.payload);
    switch (action.type) {
        case 'SET_SEVEN_DAYS':
            return action.payload
        default:
            return state;
    }
};

export default sevenDaysReducer;