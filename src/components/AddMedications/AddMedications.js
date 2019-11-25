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


class AddMedications extends Component {

    componentDidMount(){
        // get current medications for comparison
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    state = {
        newMedication: {
            medicationName: '',
            dosage: 0,
            units: 'mg',
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
        // if(
        //     this.state.newMedication.medicationName === this.props.medicationsReducer.name &&
        //     this.state.newMedication.dosage === this.props.medicationsReducer.dosage &&
        //     this.state.newMedication.units === this.props.medicationsReducer.units &&
        //     this.state.newMedication.frequency === this.props.medicationsReducer.frequency &&
        //     this.state.newMedication.time === this.props.medicationsReducer.time &&
        //     this.props.medicationsReducer.disabled === true
        // ) {
        //     // alert user that it already exists
        //     alert('You already have a medication matching these details. Are you sure you want to add it again?');
            
        //     //dispatch to addMed saga
        //     this.props.dispatch({ type: 'ADD_NEW_MEDICATION', payload: this.state.newMedication });
        //     // reset inputs
        //     this.setState({
        //         newMedication: {
        //             medicationName: '',
        //             dosage: 0,
        //             units: 'mg',
        //             frequency: '',
        //             time: ''
        //         }
        //     })
        //     // route back to settings page
        //     this.props.history.push(`/settings`)
        // }
        // else{
        //     //dispatch to addMed saga
        //     this.props.dispatch({ type: 'ADD_NEW_MEDICATION', payload: this.state.newMedication });
        //     // reset inputs
        //     this.setState({
        //         newMedication: {
        //             medicationName: '',
        //             dosage: 0,
        //             units: 'mg',
        //             frequency: '',
        //             time: ''
        //         }
        //     })
        //     // route back to settings page
        //     this.props.history.push(`/settings`)
        // }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newMedication: {
                ...this.state.newMedication,
                [propertyName]: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h1>New Medication</h1>
                <div className="addMedsSelectContainer">
                <p className="addMedsLabel">Name: </p>
                <TextField
                    // id="standard-helperText"
                    label="Medication Name"
                    defaultValue={this.state.newMedication.medicationName}
                    type="text"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.handleChangeFor('medicationName', event)}
                />
                </div>
                <div className="addMedsSelectContainer">
                <p className="addMedsLabel">Dosage: </p>
                <TextField
                    // id="standard-helperText"
                    // label="0"
                    defaultValue={this.state.newMedication.dosage}
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
                    defaultValue={this.state.newMedication.units}
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
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <Button variant="contained" color="primary" onClick={this.addNewMedication}>Add</Button>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(AddMedications));