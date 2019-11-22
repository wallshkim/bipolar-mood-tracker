// Default dailyLogs state
const defaultState = [
    
]

/* Hold daily log*/
const dailyLogsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DAILY_LOG':
            return action.payload;
        default:
            return state;
    }
}

export default dailyLogsReducer;
