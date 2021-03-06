import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, MenuItem, FormControl, Select, Paper, Button, FormHelperText } from '@material-ui/core/';
import { withRouter } from 'react-router-dom';
import './EditMedications.css';

/* Creates the Edit Medications Form */
class EditMedications extends Component {
    componentDidMount() {
        // get current medications for comparison
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    state = {
        editedMedication: {
            id: '',
            name: '',
            dosage: '',
            units: '',
            frequency: '',
            time: ''
        }
    }

    handleChangeFor = (property, event) => {
        this.setState({
            editedMedication: {
                ...this.props.selectedMedicationReducer,
                [property]: event.target.value,
            }
        });
    }

    // Dispatch action to medicationsSaga
    handleCancel = () => {
        console.log('cancel clicked');
        this.props.dispatch({
            type: 'CLEAR_SELECTED_MEDICATION',
        })
        this.props.dispatch({
            type: 'FETCH_MEDICATIONS',
        });
        this.setState({
            editedMedication: {
                id: '',
                name: '',
                dosage: '',
                units: '',
                frequency: '',
                time: ''
            }
        });
        // route back to settings
        this.props.history.push(`/settings`);
    }

    // Dispatch action UPDATE MEDICATION
    // Routes back to settings
    updateMedication = () => {
        console.log('UPDATE_MEDICATION saveEdit dispatch payload: ', this.state.editedMedication);
        this.props.dispatch({
            type: 'UPDATE_MEDICATION',
            payload: this.state.editedMedication
        });
        this.props.dispatch({
            type: 'CLEAR_SELECTED_MEDICATION',
        })
        this.props.history.push(`/settings`);
    }

    render() {
        return (
            <div>
                {this.props.selectedMedicationReducer.name && (
                    <>
                        <Paper style={{ margin: "10px", padding: "15px", }}>

                            <h4>Edit Medication</h4>
                            <div className="editMedsSelectContainer">
                                <p className="addMedsLabel">Name: </p>
                                <TextField
                                    defaultValue={this.props.selectedMedicationReducer.name}
                                    type="text"
                                    margin="normal"
                                    onChange={(event) => this.handleChangeFor('name', event)}
                                />
                            </div>
                            <div className="editMedsSelectContainer">
                                <p className="addMedsLabel">Dosage: </p>
                                <TextField
                                    defaultValue={this.props.selectedMedicationReducer.dosage}
                                    type="number"
                                    margin="normal"
                                    onChange={(event) => this.handleChangeFor('dosage', event)}
                                />
                            </div>
                            <div className="editMedsSelectContainer">
                                <p className="addMedsLabel">Units: </p>
                                <TextField
                                    defaultValue={this.props.selectedMedicationReducer.units}
                                    type="text"
                                    margin="normal"
                                    onChange={(event) => this.handleChangeFor('units', event)}
                                />
                            </div>
                            <div className="editMedsSelectContainer">
                                <p className="addMedsLabel">Frequency: </p>
                                <FormControl required>
                                    <Select
                                        style={{ maxWidth: '150px', minWidth: '150px' }}
                                        labelId="frequency"
                                        id="frequency"
                                        defaultValue={this.props.selectedMedicationReducer.frequency}
                                        onChange={(event) => this.handleChangeFor('frequency', event)}
                                        autoWidth>
                                        <MenuItem value="">
                                            <em>Select</em>
                                        </MenuItem>
                                        <MenuItem value='daily'>Daily</MenuItem>
                                        <MenuItem value='asNeeded'>As Needed</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                            </div>

                            <div className="editMedsSelectContainer">
                                <p className="addMedsLabel">Time of Day: </p>
                                <FormControl required>
                                    <Select
                                        labelId="time"
                                        style={{ maxWidth: '150px', minWidth: '150px' }}
                                        id="time"
                                        defaultValue={this.props.selectedMedicationReducer.time}
                                        onChange={(event) => this.handleChangeFor('time', event)}
                                        autoWidth>
                                        <MenuItem value="">
                                            <em>Select</em>
                                        </MenuItem>
                                        <MenuItem value='any'>Any</MenuItem>
                                        <MenuItem value='AM'>AM</MenuItem>
                                        <MenuItem value='PM'>PM</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                            </div>

                            <Button style={{ marginRight: '50px', marginTop: '20px' }} variant="contained" color="primary" onClick={this.handleCancel}>Cancel</Button>
                            <Button style={{ marginTop: '20px' }} variant="contained" color="primary" onClick={this.updateMedication}>Update</Button>
                        </Paper>
                        {/* <pre>{JSON.stringify(this.props.selectedMedicationReducer, null, 2)}</pre>
                        <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                    </>
                )}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(EditMedications));