import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationItem from '../MedicationItem/MedicationItem';
import List from '@material-ui/core/List';

class MedicationList extends Component {

    componentDidMount() {
        this.fetchMedications();
    }

    fetchMedications = () => {
        let userId = this.props.user.id
        console.log('In MedicationList, userId is: ', userId);
        // Fetch medications for this user
        this.props.dispatch({ type: 'FETCH_MEDICATIONS', payload: userId })
    }

    render() {
        return (
            <>
                <List>
                    {this.props.medicationsReducer.map((medication) => {
                        return (
                            <MedicationItem key={medication.id} medication={medication} />
                        )
                    })}
                </List>
                <pre>{JSON.stringify(this.props.medicationsReducer, null, 2)}</pre>
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MedicationList);