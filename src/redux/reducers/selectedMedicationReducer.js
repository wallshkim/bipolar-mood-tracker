/* Holds medication info for item in medication list that a user clicks to edit or delete */
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
