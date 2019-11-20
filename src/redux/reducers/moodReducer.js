/* Hold user's mood */
const moodReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOOD':
            return action.payload;
        default:
            return state;
    }
}

export default moodReducer;