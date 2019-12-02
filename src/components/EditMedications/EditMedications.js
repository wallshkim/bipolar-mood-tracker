import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withRouter } from 'react-router-dom';


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
                ...this.state.editedMedication,
                [property]: event.target.value,
            }
        });
    }

    // Dispatch action to medicationsSaga
    handleCancel = () => {
        console.log('cancel clicked');
        this.props.dispatch({
            type: 'FETCH_MEDICATIONS',
        });
        // route back to settings
        this.props.history.push(`/settings`);
    }

    // Dispatch action UPDATE MOVIE to run editMovieSaga that updates server
    // Routes back to home
    updateMedication = () => {
        console.log('UPDATE_MEDICATION saveEdit dispatch payload: ', this.state.editedMedication);
        this.props.dispatch({
            type: 'UPDATE_MEDICATION',
            payload: this.state.editedMedication
        });
        this.props.history.push(`/settings`);
    }

    render() {
        return (
            <div>
                {this.props.selectedMedicationReducer.name && (
                    <>
                        <h1>Edit Medication</h1>
                        <div className="addMedsSelectContainer">
                            <p className="addMedsLabel">Name: </p>
                            <TextField
                                // id="standard-helperText"
                                label="Medication Name"
                                defaultValue={this.props.selectedMedicationReducer.name}
                                // value={this.state.editedMedication.name}
                                type="text"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => this.handleChangeFor('name', event)}
                            />
                        </div>
                        <div className="addMedsSelectContainer">
                            <p className="addMedsLabel">Dosage: </p>
                            <TextField
                                // id="standard-helperText"
                                // label="0"
                                defaultValue={this.props.selectedMedicationReducer.dosage}
                                // value={this.state.editedMedication.dosage}
                                type="number"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => this.handleChangeFor('dosage', event)}
                            />
                        </div>
                        <div className="addMedsSelectContainer">
                            <p className="addMedsLabel">Units: </p>
                            <TextField
                                // id="standard-helperText"
                                // label="Units"
                                defaultValue={this.props.selectedMedicationReducer.units}
                                // value={this.state.editedMedication.units}
                                type="text"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => this.handleChangeFor('units', event)}
                            />
                        </div>
                        <div className="addMedsSelectContainer">
                            <p className="addMedsLabel">Frequency: </p>
                            <FormControl required>
                                {/* <InputLabel id="frequency">Frequency</InputLabel> */}
                                <Select
                                    labelId="frequency"
                                    id="frequency"
                                    defaultValue={this.props.selectedMedicationReducer.frequency}
                                    // value={this.state.editedMedication.frequency}
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

                        <div className="addMedsSelectContainer">
                            <p className="addMedsLabel">Time of Day: </p>
                            <FormControl required>
                                {/* <InputLabel id="time">Time of Day</InputLabel> */}
                                <Select
                                    labelId="time"
                                    id="time"
                                    defaultValue={this.props.selectedMedicationReducer.time}
                                    // value={this.state.editedMedication.time}
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

                        <Button variant="contained" color="primary" onClick={this.handleCancel}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={this.updateMedication}>Update</Button>

                        <pre>{JSON.stringify(this.props.selectedMedicationReducer, null, 2)}</pre>
                        <pre>{JSON.stringify(this.state, null, 2)}</pre>
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