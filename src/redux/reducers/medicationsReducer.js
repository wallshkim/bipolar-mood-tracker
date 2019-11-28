/* Hold user's medications */
const medicationsReducer = (state = [], action) => {
    // console.log('medications reducer hit');

    switch (action.type) {
        case 'SET_MEDICATIONS':
            console.log('in SET_MEDICATIONS action.payload is: ', action.payload);
            if (action.payload[0] === undefined) {
                return [];
            } else {
                return action.payload;
            }
        case 'SET_MEDICATIONS_TAKEN':
            return state.map(medication => {
                if (medication.id === action.payload.medId) {
                    console.log('medication id and action.payload.medId are: ', medication.id, action.payload.medId);
                    console.log('in SET_MEDS_TAKEN, action.payload.taken is: ', action.payload.taken);
                    medication.taken = action.payload.taken;
                    return medication;
                } else {
                    return medication;
                }
            })
        case 'UPDATE_MEDICATIONS_TAKEN':
            console.log('in medicationsReducer UPDATE, action.payload is: ', action.payload);
            if (action.payload.property === 'sleep') {
                return { ...state, sleep: action.payload.value };
            }
            else if (action.payload.property === 'elevated') {
                return { ...state, elevated: action.payload.value };
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default medicationsReducer;