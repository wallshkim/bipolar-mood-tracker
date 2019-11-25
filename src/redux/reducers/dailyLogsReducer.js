// Default dailyLogs state
// const defaultState = [
    
// ]

/* Hold daily log*/
const dailyLogsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DAILY_LOG':
            console.log('in dailyLogs reducer, action.payload is: ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default dailyLogsReducer;
