import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class MedicationItem extends Component {

    handleEdit = () => {
        console.log('edit button clicked!');
        // route to EditMedication Component
    }

    handleDelete = () => {
        console.log('delete button clicked!');
        // dispatch to saga to delete
    }

    render() {
        // creates var for props passed from MedicationList
        const medication = this.props.medication;
        return (
            // Displays ListItem for each medication in medicationsReducer
            <ListItem>
                <ListItemText primary={medication.name} />
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </ListItem>
        )
    }
}

export default connect()(MedicationItem);