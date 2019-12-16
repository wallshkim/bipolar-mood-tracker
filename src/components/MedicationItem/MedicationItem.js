import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

        this.props.dispatch({ type: 'FETCH_MEDICATIONS' });
    }

    render() {
        // creates var for props passed from MedicationList
        const medication = this.props.medication;
        return (
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