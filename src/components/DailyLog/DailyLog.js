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
import BackIcon from '../../images/back.png';
import ForwardIcon from '../../images/forward.png';

class DailyLog extends Component {

    // Current moment
    // rawDate = moment().subtract(0/*this.props.daysBackReducer*/, 'days');

    componentDidMount() {
        console.log('mounted log')
        this.fetchMedications();
        // this.props.dispatch({
        //     type: 'SET_DATE',
        //     // payload: moment().subtract(this.props.daysBackReducer, "days")
        //     payload: moment()
        // });
        // dispatch only if currentDateReducer has date
        this.props.currentDateReducer &&
            this.props.dispatch({
                type: 'FETCH_DAILY_LOG',
                payload: this.props.currentDateReducer.today.format('L'),
            })
    }

    // var for this.props.dailyLogsReducer.moodLog
    // dailyMoods = this.props.dailyLogsReducer;

    incrementDaysBack = () => {
        console.log('incrementDaysBack was clicked!');
        this.props.dispatch({ type: 'CHANGE_DAILY_LOG', payload: 'increment' });
        // this.props.dispatch({ type: 'INCREMENT_DAYS_BACK' });
        // console.log('In incrementDaysBack, daysBackReducer is: ', this.props.daysBackReducer);
        // this.props.dispatch({
        //     type: 'FETCH_DAILY_LOG',
        //     payload: this.props.currentDateReducer.subtract(this.props.daysBackReducer, "days").format('L')
        // })
        // console.log('In incrementDaysBack, currentDateReducer is: ', this.props.currentDateReducer.subtract(this.props.daysBackReducer, "days").format('L'));
    }

    decrementDaysBack = () => {
        console.log('decrementDaysBack was clicked!');
        this.props.dispatch({ type: 'CHANGE_DAILY_LOG', payload: 'decrement' });
        // this.props.dispatch({ type: 'DECREMENT_DAYS_BACK' });
        // console.log('In decrementDaysBack, daysBackReducer is: ', this.props.daysBackReducer);
        // this.props.dispatch({
        //     type: 'FETCH_DAILY_LOG',
        //     payload: (this.props.currentDateReducer.subtract(this.props.daysBackReducer, "days").format('L'))
        // })
        // console.log('In decrementDaysBack, currentDateReducer is: ', this.props.currentDateReducer.subtract(this.props.daysBackReducer, "days").format('L'));
    }

    // Get user's medications in order to display them in form below
    fetchMedications = () => {
        this.props.dispatch({ type: 'FETCH_MEDICATIONS' })
    }

    fetchDailyLog = () => {
        this.props.dispatch({
            type: 'FETCH_DAILY_LOG',
            payload: this.props.currentDateReducer.format('L')
        });
    }

    /* Requires certain inputs & dispatches action to add entries to moods_per_day in database */
    handleSubmit = () => {
        console.log('in handleSubmit this.props.dailyLogsReducer is: ', this.props.dailyLogsReducer);
        // Require fields
        // if (this.dailyMoods.sleep && this.dailyMoods.elevated && this.dailyMoods.depressed && this.dailyMoods.irritability && this.dailyMoods.anxiety && this.dailyMoods.psychoticSymptoms && this.dailyMoods.therapy) {
        // Call addMoods saga
        this.props.dispatch({
            type: 'ADD_DAILY_LOG',
            payload: { moods: this.props.dailyLogsReducer, medications: this.props.medicationsReducer }
        })
        // }
        // else {
        //     // Alert user they need to enter required fields
        //     alert('Please enter all fields to move forward');
        // }
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
    // handleChangeFor = (propertyName, event) => {
    //     this.setState({
    //         ...this.dailyMoods,
    //         [propertyName]: event.target.value
    //     })
    // }

    handleChangeFor = (propertyName, event) => {
        this.props.dispatch({
            type: 'UPDATE_DAILY_LOG',
            payload: {
                property: propertyName,
                newValue: event.target.value
            }
        })
    }

    handleElevatedChange = (event, value) => {
        this.props.dispatch({
            type: 'UPDATE_DAILY_LOG',
            payload: {
                property: 'elevated',
                newValue: value
            }
        })
    }

    handleDepressedChange = (event, value) => {
        this.props.dispatch({
            type: 'UPDATE_DAILY_LOG',
            payload: {
                property: 'depressed',
                newValue: value
            }
        })
    }

    handleIrritabilityChange = (event, value) => {
        this.props.dispatch({
            type: 'UPDATE_DAILY_LOG',
            payload: {
                property: 'irritability',
                newValue: value
            }
        })
    }

    handleAnxietyChange = (event, value) => {
        this.props.dispatch({
            type: 'UPDATE_DAILY_LOG',
            payload: {
                property: 'anxiety',
                newValue: value
            }
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

        // let dateToShow = this.props.dailyLogsReducer.date ? moment(this.props.dailyLogsReducer.date).format('MMMM Do, YYYY') 
        
        const format = this.props.currentDateReducer.today.format('L')
        let newDay = moment(format).subtract(this.props.daysBackReducer, "days").format('L');




        return (
            <div className="moodContainer">
                <Button onClick={this.fetchDailyLog}>FETCH DAILY LOG</Button>
                <div className="DailyLogDateButtonContainer">
                    <Button onClick={this.incrementDaysBack}><img src={BackIcon} alt="back symbol" /></Button>
                    <h3>{newDay}</h3>
                    <Button onClick={this.decrementDaysBack}><img src={ForwardIcon} alt="forward symbol" /></Button>
                </div>

                <div>
                    <p>Hours Slept Last Night: </p>
                    <TextField
                        id="standard-helperText"
                        label="Hours"
                        // defaultValue={this.props.dailyLogsReducer.sleep}
                        value={this.props.dailyLogsReducer.sleep}
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
                            value={this.props.dailyLogsReducer.elevated}
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
                            value={this.props.dailyLogsReducer.depressed}
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
                            value={this.props.dailyLogsReducer.irritability}
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
                            value={this.props.dailyLogsReducer.anxiety}
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
                        value={this.props.dailyLogsReducer.psychotic_symptoms}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('psychotic_symptoms', event)}
                    />
                </div>
                <div>
                    <p>Therapy: </p>
                    <TextField
                        id="standard-helperText"
                        label="True or False"
                        value={this.props.dailyLogsReducer.therapy}
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
                        value={this.props.dailyLogsReducer.notes}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        multiline={true}
                        onChange={(event) => this.handleChangeFor('notes', event)}
                    />
                </div>

                {this.props.medicationsReducer.map((medication) => {
                    return (
                        console.log('in medicationReducer map, medication is: ', medication.taken),
                        
                        <div key={medication.id}>
                            <p>{medication.name} {medication.dosage}{medication.units} ({medication.time})</p>
                            <FormControl component="fieldset">
                                <RadioGroup value={String(medication.taken)} aria-label="taken" name="taken" onChange={(event) => this.handleMedChange(medication.id, event)}>
                                    <FormControlLabel name="taken" value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel name="taken" value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    )
                })}

                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(DailyLog);