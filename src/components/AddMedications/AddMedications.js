import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TextField, MenuItem, FormControl, Select, Paper, Button } from '@material-ui/core/';
import './AddMedication.css';

/* Creates and handles the form to add a new medication in the Settings tab */
class AddMedications extends Component {
    componentDidMount() {
        // get current medications for comparison
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }
    
    state = {
        newMedication: {
            medicationName: '',
            dosage: '',
            units: '',
            frequency: '',
            time: ''
        }
    }

    addNewMedication = () => {
        console.log('add button clicked!');
        //dispatch to addMed saga
        this.props.dispatch({ type: 'ADD_NEW_MEDICATION', payload: this.state.newMedication });
        // reset inputs
        this.setState({
            newMedication: {
                medicationName: '',
                dosage: 0,
                units: 'mg',
                frequency: '',
                time: ''
            }
        });
        // route back to settings page
        this.props.history.push(`/settings`);
    }

    handleCancel = () => {
        console.log('cancel clicked');
        this.props.dispatch({
            type: 'FETCH_MEDICATIONS',
        });
        // route back to settings
        this.props.history.push(`/settings`);
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newMedication: {
                ...this.state.newMedication,
                [propertyName]: event.target.value
            }
        })
    }

    populateFields = () => {
        this.setState({
            newMedication: {
                medicationName: 'Trazodone',
                dosage: '100',
                units: 'mg',
                frequency: 'asNeeded',
                time: 'any'
            }
        })
    }

    render() {
        return (
            <div>
                <Paper style={{ margin: "10px", padding: "15px", }}>
                    <h4>New Medication</h4>

                    <div className="addMedsSelectContainer">
                        <p className="addMedsLabel">Name: </p>
                        <TextField
                            placeholder="Medication Name"
                            defaultValue={this.state.newMedication.medicationName}
                            type="text"
                            margin="normal"
                            onChange={(event) => this.handleChangeFor('medicationName', event)}
                        />
                    </div>

                    <div className="addMedsSelectContainer">
                        <p className="addMedsLabel">Dosage: </p>
                        <TextField
                            placeholder="0"
                            defaultValue={this.state.newMedication.dosage}
                            type="number"
                            margin="normal"
                            onChange={(event) => this.handleChangeFor('dosage', event)}
                        />
                    </div>

                    <div className="addMedsSelectContainer">
                        <p className="addMedsLabel">Units: </p>
                        <TextField
                            placeholder="mg"
                            defaultValue={this.state.newMedication.units}
                            type="text"
                            margin="normal"
                            onChange={(event) => this.handleChangeFor('units', event)}
                        />
                    </div>

                    <div className="addMedsSelectContainer">
                        <p className="addMedsLabel">Frequency: </p>
                        <FormControl required>
                            <Select
                                style={{ maxWidth: '150px', minWidth: '150px' }}
                                labelId="frequency"
                                id="frequency"
                                value={this.state.newMedication.frequency}
                                onChange={(event) => this.handleChangeFor('frequency', event)}
                                autoWidth
                            >
                                <MenuItem value="">
                                    <em>Select</em>
                                </MenuItem>
                                <MenuItem value='daily'>Daily</MenuItem>
                                <MenuItem value='asNeeded'>As Needed</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="addMedsSelectContainer">
                        <p className="addMedsLabel">Time of Day: </p>
                        <FormControl required>
                            <Select
                                style={{ maxWidth: '150px', minWidth: '150px' }}
                                labelId="time"
                                id="time"
                                value={this.state.newMedication.time}
                                onChange={(event) => this.handleChangeFor('time', event)}
                                autoWidth
                            >
                                <MenuItem value="">
                                    <em>Select</em>
                                </MenuItem>
                                <MenuItem value='any'>Any</MenuItem>
                                <MenuItem value='AM'>AM</MenuItem>
                                <MenuItem value='PM'>PM</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <Button style={{ marginRight: '50px', marginTop: '20px' }} variant="contained" color="primary" onClick={this.handleCancel}>Cancel</Button>
                    <Button style={{ marginTop: '20px' }} variant="contained" color="primary" onClick={this.addNewMedication}>Add</Button>
                </Paper>
                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </div >
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(AddMedications));