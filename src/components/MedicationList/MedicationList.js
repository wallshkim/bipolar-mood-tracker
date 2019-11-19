import React, { Component } from 'react';
import { connect } from 'react-redux';

class MedicationList extends Component {

    componentDidMount() {
        let userId = this.props.user.id
        console.log('In MedicationList, userId is: ', userId);
        // Fetch medications for this user
        this.props.dispatch({ type: 'FETCH_MEDICATIONS', payload: userId })
    }

    render() {
        return (
            <div>
                <ul>


                </ul>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MedicationList);