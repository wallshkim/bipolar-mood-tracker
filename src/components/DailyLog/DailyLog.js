import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import BackIcon from '../../images/back.png';
// import ForwardIcon from '../../images/forward.png';
import BigBackIcon from '../../images/back 32px.png';
import BigForwardIcon from '../../images/forward 32px.png';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import './DailyLog.css';
import DisabledDailyLog from '../DisabledDailyLog/DisabledDailyLog';


class DailyLog extends Component {

    componentDidMount() {
        console.log('mounted log')
        this.fetchMedications();

        this.props.currentDateReducer &&
            this.props.dispatch({
                type: 'FETCH_DAILY_LOG',
                payload: this.props.currentDateReducer.today.format('L'),
            })
    }

    incrementDaysBack = () => {
        console.log('incrementDaysBack was clicked!');
        this.props.dispatch({ type: 'CHANGE_DAILY_LOG', payload: 'increment' });
    }

    decrementDaysBack = () => {
        console.log('decrementDaysBack was clicked!');
        this.props.dispatch({ type: 'CHANGE_DAILY_LOG', payload: 'decrement' });
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


    handleSubmit = () => {
        console.log('in handleSubmit this.props.dailyLogsReducer is: ', this.props.dailyLogsReducer);

        this.props.dispatch({
            type: 'ADD_DAILY_LOG',
            payload: { moods: this.props.dailyLogsReducer, medications: this.props.medicationsReducer }
        })

    }

    handleMedChange = (id, event) => {
        console.log('taken changed');
        console.log('event is: ', event.target.value);

        this.props.dispatch({
            type: 'SET_MEDICATIONS_TAKEN',
            payload: { medId: id, taken: event.target.value }
        })
    }

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


    render() {

        // let dateToShow = this.props.dailyLogsReducer.date ? moment(this.props.dailyLogsReducer.date).format('MMMM Do, YYYY') 

        const format = this.props.currentDateReducer.today.format('L')
        let newDay = moment(format).subtract(this.props.daysBackReducer, "days").format('MMMM Do, YYYY');

        const sliderValues = [
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
        ]


        return (
            <div className="moodContainer">
                <div className="DailyLogDateButtonContainer">
                    <Button onClick={this.incrementDaysBack}><img src={BigBackIcon} alt="back symbol" /></Button>
                    <h4 className="currentDate-title">{newDay}</h4>
                    <Button onClick={this.decrementDaysBack}><img src={BigForwardIcon} alt="forward symbol" /></Button>
                </div>

                {this.props.daysBackReducer > 0 ? <DisabledDailyLog /> :
                    <>
                        <div className="dailyInput hours-slept input-grey-background">
                            <p className="inputLabel margin-right">Hours Slept Last Night: </p>
                            <TextField
                                style={{ maxWidth: '50px', minWidth: '50px' }}
                                id="sleep"
                                placeholder="0"
                                // label="Hours"
                                value={this.props.dailyLogsReducer.sleep}
                                type="number"
                                margin="normal"
                                variant='standard'
                                onChange={(event) => this.handleChangeFor('sleep', event)}
                            />
                        </div>

                        <div className="dailyInput">
                            {/* <Typography className="inputLabel" id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme Elevated mood
                    </Typography> */}
                            <p className="inputLabel">Today's most extreme Elevated mood: </p>
                            <div className="sliderContainer">
                                <Slider
                                    onChange={this.handleElevatedChange}
                                    value={this.props.dailyLogsReducer.elevated}
                                    step={1}
                                    min={0}
                                    max={3}
                                    valueLabelDisplay="auto"
                                    marks={sliderValues}
                                />
                            </div>
                        </div>

                        <div className="dailyInput input-grey-background">
                            {/* <Typography className="inputLabel" id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme Depressed mood
                    </Typography> */}
                            <p className="inputLabel">Today's most extreme Depressed mood: </p>
                            <div className="sliderContainer">
                                <Slider
                                    onChange={this.handleDepressedChange}
                                    value={this.props.dailyLogsReducer.depressed}
                                    step={1}
                                    min={0}
                                    max={3}
                                    valueLabelDisplay="auto"
                                    marks={sliderValues}
                                />
                            </div>
                        </div>

                        <div className="dailyInput">
                            {/* <Typography className="inputLabel" id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme irritability
                    </Typography> */}
                            <p className="inputLabel">Today's most extreme irritability: </p>
                            <div className="sliderContainer">
                                <Slider
                                    onChange={this.handleIrritabilityChange}
                                    value={this.props.dailyLogsReducer.irritability}
                                    step={1}
                                    min={0}
                                    max={3}
                                    valueLabelDisplay="auto"
                                    marks={sliderValues}
                                />
                            </div>
                        </div>

                        <div className="dailyInput input-grey-background">
                            {/* <Typography className="inputLabel" id="discrete-slider-restrict" gutterBottom>
                        Today's most extreme anxiety
                    </Typography> */}
                            <p className="inputLabel">Today's most extreme anxiety: </p>
                            <div className="sliderContainer">
                                <Slider
                                    onChange={this.handleAnxietyChange}
                                    value={this.props.dailyLogsReducer.anxiety}
                                    step={1}
                                    min={0}
                                    max={3}
                                    valueLabelDisplay="auto"
                                    marks={sliderValues}
                                />
                            </div>
                        </div>
                        <div className="dailyInput psychotic-container">
                            <p className="inputLabel margin-right">Psychotic Symptoms: </p>
                            <FormControl required>
                                {/* <InputLabel id="time">Time of Day</InputLabel> */}
                                <Select
                                    style={{ maxWidth: '100px', minWidth: '100px' }}
                                    labelId="psychotic"
                                    id="psychotic"
                                    value={this.props.dailyLogsReducer.psychotic_symptoms}
                                    onChange={(event) => this.handleChangeFor('psychotic_symptoms', event)}
                                    autoWidth
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value='true'>True</MenuItem>
                                    <MenuItem value='false'>False</MenuItem>
                                </Select>
                                {/* <FormHelperText>Required</FormHelperText> */}
                            </FormControl>
                            {/* <TextField
                        id="standard-helperText"
                        // label="True or False"
                        placeholder="True or False"
                        value={this.props.dailyLogsReducer.psychotic_symptoms}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('psychotic_symptoms', event)}
                    /> */}
                        </div>
                        <div className="dailyInput therapy-container input-grey-background">
                            <p className="inputLabel margin-right">Therapy: </p>
                            <FormControl required>
                                {/* <InputLabel id="time">Time of Day</InputLabel> */}
                                <Select
                                    style={{ maxWidth: '100px', minWidth: '100px' }}
                                    labelId="therapy"
                                    id="therapy"
                                    value={this.props.dailyLogsReducer.therapy}
                                    onChange={(event) => this.handleChangeFor('therapy', event)}
                                    autoWidth
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value='true'>True</MenuItem>
                                    <MenuItem value='false'>False</MenuItem>
                                </Select>
                                {/* <FormHelperText>Required</FormHelperText> */}
                            </FormControl>
                            {/* <TextField
                        id="standard-helperText"
                        // label="True or False"
                        placeholder="True or False"
                        value={this.props.dailyLogsReducer.therapy}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.handleChangeFor('therapy', event)}
                    /> */}
                        </div>

                        <div className="dailyInput padding-left">
                            {/* <p className="inputLabel">Notes: </p> */}
                            <TextField
                                id="standard-helperText"
                                label="Notes"
                                style={{ maxWidth: '350px', minWidth: '350px' }}
                                value={this.props.dailyLogsReducer.notes}
                                type="text"
                                rows="4"
                                margin="normal"
                                // variant="filled"
                                multiline={true}
                                onChange={(event) => this.handleChangeFor('notes', event)}
                            />
                        </div>

                        {this.props.medicationsReducer.map((medication) => {
                            return (
                                console.log('in medicationReducer map, medication is: ', medication.taken),

                                <div className="input-grey-background dailyInput padding-left" key={medication.id}>
                                    <p>{medication.name} {medication.dosage}{medication.units} ({medication.time})</p>
                                    <FormControl component="fieldset">
                                        <RadioGroup className="radioGroup-container" value={String(medication.taken)} aria-label="taken" name="taken" onChange={(event) => this.handleMedChange(medication.id, event)}>
                                            <FormControlLabel name="taken" value="true" control={
                                                <Radio style={{
                                                    color: "black",
                                                }} />
                                            } label="Yes" />
                                            <FormControlLabel name="taken" value="false" control={
                                                <Radio style={{
                                                    color: "black",
                                                }} />
                                            } label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            )
                        })}

                        <div className="btn-container">
                            <Button
                                style={{ maxWidth: '350px', minWidth: '350px' }}
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}>
                                Submit
                    </Button>
                        </div>
                        {/* <pre>{JSON.stringify(this.props.medicationsReducer, null, 2)}</pre>
                        <pre>{JSON.stringify(this.props.dailyLogsReducer, null, 2)}</pre> */}
                        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                    </>
                }
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(DailyLog);