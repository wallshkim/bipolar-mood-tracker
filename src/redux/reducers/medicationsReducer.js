/* Hold user's medications */
const medicationsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDICATIONS':
            return action.payload;
        default:
            return state;
    }
}

export default medicationsReducer;
