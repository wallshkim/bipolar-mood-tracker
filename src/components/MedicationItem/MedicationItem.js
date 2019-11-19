import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class MedicationItem extends Component {

    // fetchMedications = () => {
    //     let userId = this.props.user.id
    //     console.log('In MedicationList, userId is: ', userId);
    //     // Fetch medications for this user
    //     this.props.dispatch({ type: 'FETCH_MEDICATIONS', payload: userId })
    // }

    render() {

        const medication = this.props.medication;

        return (
            <ListItem>
                <ListItemText primary={medication.name} />
            </ListItem>
        )
    }
}

export default connect()(MedicationItem);