import React, { Component } from 'react';
import { connect } from 'react-redux';


class MoodLog extends Component {

    render() {
        return (
            <div>
                <h1>Today</h1>
                
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MoodLog);
