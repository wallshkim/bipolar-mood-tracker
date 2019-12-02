
const selectedMedicationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_MEDICATION':
            return action.payload;
        case 'CLEAR_SELECTED_MEDICATION':
            return {};
        default:
            return state;
    }
}


export default selectedMedicationReducer;
