
const daysBackReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_DAYS_BACK':
                console.log('in increment state is: ', state);

            return state + 1;
        case 'DECREMENT_DAYS_BACK':
            if (state > 0) {
                console.log('in decrement state is: ', state);
                return state - 1;
            } else {
                return 0;
            }
        default:
            return state;
    }
}

export default daysBackReducer;