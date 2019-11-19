import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


class MoodLog extends Component {


    render() {

        let weekday = moment().format('dddd');
        console.log(weekday);
        let todaysDate = moment().format('MMMM Do, YYYY');
        console.log(todaysDate);
        let yesterday = moment().add(-1, 'days')
        console.log(yesterday);
        
        return (
            <div>
                <h3>{weekday}</h3>
                <h6>{todaysDate}</h6>


            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MoodLog);
