import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class MedicationItem extends Component {

    handleEdit = () => {
        console.log('edit button clicked!');
        // route to EditMedication Component
    }

    handleDelete = () => {
        console.log('delete button clicked!');
        // dispatch to saga to delete
        this.props.dispatch({ 
            type: 'DELETE_MEDICATION', 
            payload: this.props.medication.id 
        })
    }

    render() {
        // creates var for props passed from MedicationList
        const medication = this.props.medication;
        return (
            // Displays ListItem for each medication in medicationsReducer
            <ListItem>
                <ListItemText primary={medication.name} />
                <Button color="primary" onClick={this.handleEdit}>Edit</Button>
                <Button color="primary" onClick={this.handleDelete}>Delete</Button>
            </ListItem>
        )
    }
}

export default connect()(MedicationItem);