// Default dailyLogs state
import moment from 'moment'

const defaultState = {
    sleep: 0,
    elevated: 0,
    depressed: 0,
    irritability: 0,
    anxiety: 0,
    psychoticSymptoms: false,
    therapy: false,
    notes: '',
    date: moment().format('L')
}

/* Hold daily log*/
const dailyLogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DAILY_LOG':
            console.log('in dailyLogsReducer SET, action.payload is: ', action.payload);
            if (action.payload.sleep === undefined){
                return defaultState;
            } else{
                return action.payload;
            }
        case 'UPDATE_DAILY_LOG':
            console.log('in dailyLogsReducer UPDATE, action.payload is: ', action.payload);
            if (action.payload.property === 'sleep'){
                return { ...state, sleep: action.payload.newValue};
            } 
            else if (action.payload.property === 'elevated') {
                return { ...state, elevated: action.payload.newValue }
            } 
            else if (action.payload.property === 'depressed') {
                return { ...state, depressed: action.payload.newValue }
            } 
            else if (action.payload.property === 'irritability') {
                return { ...state, irritability: action.payload.newValue }
            } 
            else if (action.payload.property === 'anxiety') {
                return { ...state, anxiety: action.payload.newValue }
            } 
            else if (action.payload.property === 'psychoticSymptoms') {
                return { ...state, psychoticSymptoms: action.payload.newValue }
            } 
            else if (action.payload.property === 'therapy') {
                return { ...state, therapy: action.payload.newValue }
            } 
            else if (action.payload.property === 'notes') {
                return { ...state, notes: action.payload.newValue }
            } 
            else {
                return state;
            }
        default:
            return state;
    }
}

export default dailyLogsReducer;
