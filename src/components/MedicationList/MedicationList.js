import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationItem from '../MedicationItem/MedicationItem';

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
                    {this.props.medicationsReducer.map((medication) => {
                        return (
                            <MedicationItem key={medication.id} medication={medication} />
                        )
                    })}

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