import moment from "moment";

// import moment from 'moment';

const today = moment();
const otherDay = new Date();

const currentDateReducer = (state = {today, otherDay}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default currentDateReducer;