const currentDateReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_DATE':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default currentDateReducer;