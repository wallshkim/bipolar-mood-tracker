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
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

class DailyLog extends Component {

    // Current moment
    // rawDate = moment().subtract(0/*this.props.daysBackReducer*/, 'days');

    componentDidMount() {
        this.fetchMedications();
        this.props.dispatch({
            type: 'SET_DATE',
            payload: moment().subtract(this.props.daysBackReducer).format('L')
        });
        // dispatch only if currentDateReducer has date
        this.props.currentDateReducer &&
        this.props.dispatch({
            type: 'FETCH_DAILY_LOG',
            payload: this.props.currentDateReducer,
        })
    }
    
    // var for this.props.dailyLogsReducer.moodLog
    dailyMoods = this.props.dailyLogsReducer;

    // Get user's medications in order to display them in form below
    fetchMedications = () => {
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    fetchDailyLog = () => {
        this.props.dispatch({ type: 'FETCH_DAILY_LOG', payload: this.props.currentDateReducer});
    }

    /* Requires certain inputs & dispatches action to add entries to moods_per_day in database */
    handleSubmit = () => {
        console.log('in handleSubmit this.state is: ', this.dailyMoods);
        // Require fields
        if (this.dailyMoods.sleep && this.dailyMoods.elevated && this.dailyMoods.depressed && this.dailyMoods.irritability && this.dailyMoods.anxiety && this.dailyMoods.psychoticSymptoms && this.dailyMoods.therapy) {
            // Call addMoods saga
            this.props.dispatch({
                type: 'ADD_DAILY_LOG',
                payload: { moods: this.dailyMoods, medications: this.props.medicationsReducer }
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
            payload: { medId: id, taken: event.target.value }
        })
    }

    // Update state when inputs are changed
    handleChangeFor = (propertyName, event) => {
        this.setState({
            ...this.dailyMoods,
            [propertyName]: event.target.value
        })
    }

    handleElevatedChange = (event, value) => {
        this.setState({
            ...this.dailyMoods,
            elevated: value
        })
    }

    handleDepressedChange = (event, value) => {
        this.setState({
            ...this.dailyMoods,
            depressed: value
        })
    }

    handleIrritabilityChange = (event, value) => {
        this.setState({
            ...this.dailyMoods,
            irritability: value
        })
    }

    handleAnxietyChange = (event, value) => {
        this.setState({
            ...this.dailyMoods,
            anxiety: value
        })
    }

    // handleElevatedMild = () => {
    //     console.log('in handleElevatedMild');
    //     this.setState({
    //         ...this.state,
    //         elevated: 1
    //     })
    // }


    render() {
        return (
            <div className="moodContainer">
                <Button onClick={this.fetchDailyLog}>FETCH DAILY LOG</Button>
                <h3>{moment(this.props.currentDateReducer).format('MMMM Do, YYYY')}</h3>

                <div>
                    <p>Hours Slept Last Night: </p>
                    <TextField
                        id="standard-helperText"
                        label="Hours"
                        defaultValue={this.dailyMoods.sleep}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('sleep', event)}
                    />
                </div>
                <div>
                    <Typography id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme Elevated mood
                    </Typography>
                    {/* <Button value={this.state.elevated} onClick={this.handleElevatedMild}>Mild</Button> */}
                    <div className="sliderContainer">
                        <Slider
                            onChange={this.handleElevatedChange}
                            defaultValue={this.dailyMoods.elevated}
                            // valueLabelFormat={valueLabelFormat}
                            // getAriaValueText={valuetext}
                            // aria-labelledby="Today's most extreme Elevated mood"
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={[
                                {
                                    value: 0,
                                    label: 'Stable',
                                },
                                {
                                    value: 1,
                                    label: 'Mild',
                                },
                                {
                                    value: 2,
                                    label: 'Moderate',
                                },
                                {
                                    value: 3,
                                    label: 'Severe',
                                },
                            ]}
                        />
                    </div>
                </div>
                {/* <div>
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
                </div> */}
                {/* <div>
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
                </div> */}
                <div>
                    <Typography id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme Depressed mood
                    </Typography>
                    <div className="sliderContainer">
                        <Slider
                            onChange={this.handleDepressedChange}
                            defaultValue={this.dailyMoods.depressed}
                            // valueLabelFormat={valueLabelFormat}
                            // getAriaValueText={valuetext}
                            // aria-labelledby="Today's most extreme Elevated mood"
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={[
                                {
                                    value: 0,
                                    label: 'Stable',
                                },
                                {
                                    value: 1,
                                    label: 'Mild',
                                },
                                {
                                    value: 2,
                                    label: 'Moderate',
                                },
                                {
                                    value: 3,
                                    label: 'Severe',
                                },
                            ]}
                        />
                    </div>
                </div>
                {/* <div>
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
                </div> */}
                <div>
                    <Typography id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme irritability
                    </Typography>
                    <div className="sliderContainer">
                        <Slider
                            onChange={this.handleIrritabilityChange}
                            defaultValue={this.dailyMoods.irritability}
                            // valueLabelFormat={valueLabelFormat}
                            // getAriaValueText={valuetext}
                            // aria-labelledby="Today's most extreme Elevated mood"
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={[
                                {
                                    value: 0,
                                    label: 'Stable',
                                },
                                {
                                    value: 1,
                                    label: 'Mild',
                                },
                                {
                                    value: 2,
                                    label: 'Moderate',
                                },
                                {
                                    value: 3,
                                    label: 'Severe',
                                },
                            ]}
                        />
                    </div>
                </div>
                {/* <div>
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
                </div> */}
                <div>
                    <Typography id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme anxiety
                    </Typography>
                    <div className="sliderContainer">
                        <Slider
                            onChange={this.handleAnxietyChange}
                            defaultValue={this.dailyMoods.anxiety}
                            // valueLabelFormat={valueLabelFormat}
                            // getAriaValueText={valuetext}
                            // aria-labelledby="Today's most extreme Elevated mood"
                            step={1}
                            min={0}
                            max={3}
                            valueLabelDisplay="auto"
                            marks={[
                                {
                                    value: 0,
                                    label: 'Stable',
                                },
                                {
                                    value: 1,
                                    label: 'Mild',
                                },
                                {
                                    value: 2,
                                    label: 'Moderate',
                                },
                                {
                                    value: 3,
                                    label: 'Severe',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <p>Psychotic Symptoms: </p>
                    <TextField
                        id="standard-helperText"
                        label="True or False"
                        defaultValue={this.dailyMoods.psychoticSymptoms}
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
                        defaultValue={this.dailyMoods.therapy}
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
                        defaultValue={this.dailyMoods.notes}
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

export default connect(mapReduxStateToProps)(DailyLog);