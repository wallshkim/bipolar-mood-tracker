
const selectedMedicationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_MEDICATION':
            return action.payload;
        default:
            return state;
    }
}


export default selectedMedicationReducer;
