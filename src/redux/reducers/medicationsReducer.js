
/* Hold user's medications */
const medicationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDICATIONS':
            return action.payload;
        case 'SET_MEDICATIONS_TAKEN':
            return state.map(medication => {
                if(medication.id === action.payload.medId){
                    console.log('medication id and action.payload.medId are: ', medication.id, action.payload.medId);
                    medication.taken = action.payload.taken;
                    return medication;
                } else {
                    return medication;
                }
            })
        default:
            return state;
    }
}

export default medicationsReducer;
