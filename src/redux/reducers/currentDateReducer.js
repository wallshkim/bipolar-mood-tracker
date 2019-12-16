import moment from "moment";

// const today = moment();
// const otherDay = new Date();

// const currentDateReducer = (state = {today, otherDay}, action) => {
const currentDateReducer = (state = moment(), action) => {
    console.log('in currentDateReducer, state is: ', state);
    switch (action.type) {
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default currentDateReducer;