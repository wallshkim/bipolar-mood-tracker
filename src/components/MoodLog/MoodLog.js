import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class MoodLog extends Component {

    // Current moment
    rawDate = moment().subtract( 0/*this.props.daysBackReducer*/, 'days');

    componentDidMount() {
        this.fetchMedications();
    }

    state = {
        date: this.rawDate.format('L'),
        elevated: '',
        depressed: '',
        sleep: '',
        irritability: '',
        anxiety: '',
        psychoticSymptoms: '',
        therapy: '',
        notes: '',
    }

    // Get user's medications in order to display them in form below
    fetchMedications = () => {
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    /* Requires certain inputs & dispatches action to add entries to moods_per_day in database */
    handleSubmit = () => {
        console.log('in handleSubmit this.state is: ', this.state);
        // Require fields
        if (this.state.sleep && this.state.elevated && this.state.depressed && this.state.irritability && this.state.anxiety && this.state.psychoticSymptoms && this.state.therapy) {
            // Call addMoods saga
            this.props.dispatch({
                type: 'ADD_DAILY_LOG',
                payload: {moods: this.state, medications: this.props.medicationsReducer}
            })
        }
        else {
            // Alert user they need to enter required fields
            alert('Please enter all fields to move forward');
        }
    }

    handleMedChange = (id, event) => {
        console.log('taken changed');
        console.log('event is: ', event.target.value);
        
        this.props.dispatch({
            type: 'SET_MEDICATIONS_TAKEN',
            payload: {medId: id, taken: event.target.value}
        })
    }

    // Update state when inputs are changed
    handleChangeFor = (propertyName, event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }

    render() {
        return (
            <div className="moodContainer">
                <h3>{this.rawDate.format('MMMM Do, YYYY')}</h3>

                <div>
                    <p>Hours Slept Last Night: </p>
                    <TextField
                        id="standard-helperText"
                        label="Hours"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.sleep}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('sleep', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme elevated mood: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.elevated}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('elevated', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme depressed mood: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.depressed}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('depressed', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme irritability: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.irritability}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('irritability', event)}
                    />
                </div>
                <div>
                    <p>Today's most extreme anxiety: </p>
                    <TextField
                        id="standard-helperText"
                        label="Rate 0-4"
                        // value={this.props.selectedMovieDetailsReducer.title}
                        defaultValue={this.state.anxiety}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('anxiety', event)}
                    />
                </div>
                <div>
                    <p>Psychotic Symptoms: </p>
                    <TextField
                        id="standard-helperText"
                        label="True or False"
                        defaultValue={this.state.psychoticSymptoms}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('psychoticSymptoms', event)}
                    />
                </div>
                <div>
                    <p>Therapy: </p>
                    <TextField
                        id="standard-helperText"
                        label="True or False"
                        defaultValue={this.state.therapy}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('therapy', event)}
                    />
                </div>
                <div>
                    <p>Notes: </p>
                    <TextField
                        id="standard-helperText"
                        label="Notes"
                        defaultValue={this.state.notes}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        multiline={true}
                        onChange={(event) => this.handleChangeFor('notes', event)}
                    />
                </div>

                {this.props.medicationsReducer.map((medication) => {
                    return (
                        <div key={medication.id}>
                            <p>{medication.name} {medication.dosage}{medication.units} ({medication.time})</p>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="taken" name="taken" onChange={(event) => this.handleMedChange(medication.id, event)}>
                                <FormControlLabel name="taken" value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel name="taken" value="false" control={<Radio />} label="No" />
                            </RadioGroup>
                            </FormControl>
                        </div>
                    )
                })}

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(MoodLog);