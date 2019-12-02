import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class MedicationItem extends Component {

    handleEdit = (id) => {
        console.log('edit button clicked!');
        this.props.dispatch({
            type: 'FETCH_SELECTED',
            payload: id
        })
        // route to EditMedication Component
        this.props.history.push(`/medications/edit/${id}`)
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
            // <ListItem>
            //     <ListItemText primary={medication.name} />
            //     <Button color="primary" onClick={() => this.handleEdit(medication.id)}>Edit</Button>
            //     <Button color="primary" onClick={this.handleDelete}>Delete</Button>
            // </ListItem>
            <tr>
                <td>{medication.name} ({medication.dosage}{medication.units})</td>
                <td><Button color="primary" onClick={() => this.handleEdit(medication.id)}>Edit</Button></td>
                <td><Button color="primary" onClick={this.handleDelete}>Delete</Button></td>
            </tr>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(MedicationItem));