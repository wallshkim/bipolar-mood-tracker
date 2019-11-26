// Default dailyLogs state
const defaultState = {
    sleep: 0,
    elevated: 0,
    depressed: 0,
    irritability: 0,
    anxiety: 0,
    psychoticSymptoms: '',
    therapy: '',
    notes: '',
}

/* Hold daily log*/
const dailyLogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DAILY_LOG':
            console.log('in dailyLogs reducer, action.payload is: ', action.payload);
            if (action.payload.moodsDailyLog === {}){
                return state;
            } else{
                return action.payload.moodsDailyLog;
            }
        default:
            return state;
    }
}

export default dailyLogsReducer;
